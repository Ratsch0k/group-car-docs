# Account security
## Introduction
User accounts are protected on several layer of the system and at several points during the user's interaction flow with the server.

### Adversary
We assume the following potential adversary.

An adversary is able to eavesdrop on the communication between a user and the server. They are able to send believable phishing mails and steal a user's credentials, cookies, and send requests from HTTP forms on the user's browser. They can be a user of the website themselves. We assume that they most likely have no access to another user's email account, but we will acknowledge that this might not be the case and try to account for that. They have knowledge about the source code (especially because it's publicly available), but no access to secrets on the server. Lastly, we assume that they are not able to break any current cryptographic recommendations.

## Communication
All communication to the server is done over **HTTPS** using **TLS 1.3**, the latest Transport-layer security protocol available on the web. This provides confidentiality, integrity, and server authentication. To enforce that a client always uses *HTTPS* all communication to port *80* is immediately redirected to *443*, and [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) is implemented to protect against some man-in-the-middle attacks.

## Session management
See [Session Management](./session_management)

## Password storage
To prevent comprised passwords in the event of a server breach, we use modern methods to store passwords.
Passwords are hashed with a salt using [bcrypt](https://www.npmjs.com/package/bcrypt) before storing them. This makes them robust against rainbow table attacks and decreases the chance of adversaries compromising the passwords.