---
sidebar_position: 1
---

# Overview
:::important
I decided to write most of the authentication and session management myself because I wanted to learn and try it myself. Usually this is not recommended, and you should use a proven libraries like [Passport.js](https://www.passportjs.org/) instead. Since this project is just a hobby project, I do not expect many users, and we are not dealing with sensitive data, I am willing to implement it myself.
:::

The user authentication is implemented as transparently as possible, while also fulfilling our set account security goals. As is typical for websites, a user is greeted with an authentication page when they first visit the website. They can then choose to create a new account or log in if they already have an account. If the user authenticates themselves they get access to the web application. User authentication is persisted by using a session that is managed by the server and its identifier is stored on the client. If a client requests any action that requires authentication, it is required to send that identifier along with the request. How exactly this is realized is explained in the other **Authentication** pages.

## Supported login methods
We currently only support sign-up and log in with username/email address and password. For two-factor authentication methods we support an authenticator app and email (*currently not implemented*).

## Sessions
There exist two types of sessions: **pre-session** and **sessions**.
As the name suggest, a pre-session is used when a client is not authenticated, and a user session is used when the client is authenticated.