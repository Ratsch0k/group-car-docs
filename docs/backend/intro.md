---
slidebar_position: 1
---

# Introduction
Building a webapp often requires building a backend. Especially when persistent data and authentication mechanisms are planned.
There are many options when building a backend. From architectural to specific technical ones. Because I wanted to expand my horizon and learn as much as possible about this whole project, I decided to get my hands dirty and build as much as I can from the ground up.

## Overview
To host the website and the backend I chose [DigitalOcean](https://www.digitalocean.com/) because of its cheap prices and high configurability.
For the server I chose the Javascript framework [ExpressJs](https://expressjs.com/) which is build upon [NodeJS](https://nodejs.org/en/).
The server uses a [PostgreSQL](https://www.postgresql.org/) database to store application data.
In front of the server, [Nginx](https://nginx.org/en/) is used as a reverse proxy server and to serve some static content.
The server itself runs within a [Docker](https://www.docker.com/) container.

Visit the source code here: https://github.com/Ratsch0k/group-car-api

## Used software and libraries
As mentioned before, the software this project is build upon is **ExpressJS**, **NodeJS**, **PostgreSQL**, **Nginx**.
But for many parts of the project I used additional libraries. The following section includes the most essential ones. 

I use [sequelize](https://sequelize.org/) as an *ORM*, [socket.io](https://socket.io/) for WebSocket communication, [nodemailer](https://nodemailer.com/about/) to send emails, [bcrypt](https://github.com/kelektiv/node.bcrypt.js) for handling user passwords, [canvas](https://github.com/Automattic/node-canvas) for generating profile pictures, and [express-validator](https://express-validator.github.io/docs/) to validate and sanitize user data.
For testing, I use [sinon.js](https://sinonjs.org/), [chai](https://www.chaijs.com/), [mocha](https://mochajs.org/) and [supertest](https://github.com/visionmedia/supertest).

The project itself is written in [TypeScript](https://www.typescriptlang.org/) and code quality is ensured with [ESLint](https://eslint.org/) and [CodeFactor](https://www.codefactor.io/).