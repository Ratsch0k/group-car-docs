# Web security

## CSRF protection
**Cross-site request forgery** is an attack in which an attacker performs some action on behalf of a user without them knowing. 
This is often achieved by letting the user navigate to some attacker-controlled website.
This website will then send a request using a form, often on immediately after the webpage loaded.
A form is used because it bypasses the *Same-origin policy* and cookies are sent with the request.
If the user had an active session, the cookie holding the session token will be sent with the request.
With this method the attacker could perform an action on behalf of the user, such as changing their password.

There exist several protection and mitigation techniques against *CSRF*.
We will integrate several different methods to provide a broad range of protections.
A relevant source for information about this topic is the [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html).

### CSRF Token
Our main protection against *CSRF* attacks are so called **CSRF Tokens**.
We will use the **synchronizer token pattern** with a CSRF token bound to the user's session.

#### Implementation
When a session is created, be it a pre-session or an actual session, the server additionally generates a secret, unpredictable and in all sessions unique CSRF token.
This token is bound to the pre-session/session.
The client retrieves this token immediately after initial page load by sending a request to the designated API endpoint. The token is sent using a custom header in the response.
Furthermore, if the user authenticates by signing up or logging in, the server will send the CSRF token bound to the new session in the same custom header in the response to the authentication request.
The client stores the CSRF token in-memory and sends it along with API calls.
If the client sends a request to a CSRF protected endpoint, the server checks if the request contains the required CSRF token in the specified header and checks if it is equal to the one stored in the session.
If yes, the request is process. If no, the server will reject the request and delete the session, protecting the user from further attacks.

Such strict punishment for a CSRF token mismatch is appropriate to prevent any brute-force attack.
Due to the circumstances in which a session and the bound CSRF token are used, such behavior should have no impact on user experience.
A session is specific to one device/client over a given time duration and consequently the CSRF token bound to the session.
CSRF tokens do not change during a session's validity period and other session can not modify a session, with the exception of deleting a session.
If the client behaves as expected, retrieving the token, only storing and using the token of the current session, and sending it with API calls, the CSRF token should always be correct.
Therefore, we can assume a mismatch is most likely of malicious nature.


### Login CSRF
A subcategory of CSRF attack is the **Login CSRF**.
Instead of impersonating the user, the attacker tries to log the user into the attacker's account.
The goal could be to let the user make requests while logged in with the attacker's account.
Those requests could leak sensitive information of the user.

Consider some search engine that provides a history feature that keeps track of all search queries and the links the user clicked on.
If the attacker logs the user in with the attacker's account, the attacker gains access to the search history of the user.

While this webpage doesn't deal with sensitive information, such an attack is still not desired.

*Login CSRF* can be prevent by implementing *CSRF tokens* for pre-session.

### SameSite Cookie
The *SameSite* attribute of cookies can be used to tell the browser when it should send a cookie along with a request to another webpage.
We will use this feature and set the *SameSite* attribute of the session cookie to **Lax**.
This tells the browser to send the session cookie in a cross-origin environment only along with top-level navigation and safe HTTP methods.

### Checking request origin
The nature of CSRF attack is that they are executed from another webpage.
Thus, the source origin and destination origin will not match for an CSRF attack.
We will check for requests if both origin match and discard those where they don't.

### Forced user interaction
For very sensitive actions, such as changing the password, we enforce additional user interaction.
For example, a user can only change their password by supplying their old one.
This prevents an attacker that could bypass our CSRF protections from changing the user's password because they would have to know the current password.
For such actions the user is required to provide their password before the action is executed.
While this may impact user experience it provides improved security and is only used for some very sensitive actions.

## Input validation
We implement client-side input validation using JavaScript to guide users and to prevent possible invalid requests from being sent to the server.
Unfortunately, those protections are easily bypassed by malicious users.
Additionally, when dealing with user input, exploits like *XSS*, *RCE*, and *SQL injections* have to be considered.

We protect server endpoints accepting user input, with a two-layered protection.
While we explain each layer separately, there may be some overlap when looking at implementation details.
We do not implement the underlying system but use features or libraries built into or for the frameworks we use.

### Schema validation
First, input is validated against a defined schema.
In this layer, the type of the input is validated, e.g. checking that the input is a string.
Validation starts with simple type assertions on the complete input itself and later checks specific conditional, nested, or complex assertions on parts of the input.
This ensures that from everything after this layer can be certain that the input has an expected format and follows our defined schema. Invalid requests are rejected with a detailed response.
A key aspect of this layer is that it doesn't modify the input.

### Sanitizing
The main purpose of this layer is to protect against *XSS* attacks by modifying the input based on specific rules.
This is mainly achieved by converting characters used in exploits into their *HTML entity* representation.
Additionally, it tries to standardize the input, e.g. removing starting or leading whitespace, such that following request handlers do not have to worry about it.