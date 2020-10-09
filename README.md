### Chat Room (Node - express - Postgres - socketIO)

A chat app where users create rooms and chat with their friends.

## Tools Used

[Javascript](https://javascript.info/) : Language used.

[NodeJS](https://nodejs.org/en/) : server environment.

[Express](http://expressjs.com/) : used for building fast APIs.

[socket-io] : Enables realtime, bi-directional communication between web clients and servers

[Heroku](https://www.heroku.com/) : Deployment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

TO setup the project on your local machine do the following
Install Node

```
npm install node
```

Install Postgres

```
[Postgres](http://www.postgresqltutorial.com/install-postgresql/)
```

Clone the repo by running

```
git clone https://github.com/luc-tuyishime/chat-room-backend.git
cd chat-room-backend
```

Then install all the necessary dependencies

```
npm install
```

## Database setup

```
Creata a .env file

Copy and Paste the DATABASE_URL

DATABASE_URL=postgres://[USERNAME]:[PASSWORD]@localhost/[DATABASE_NAME]
```

## Deployment

-   URL = http://localhost:7000
-   PORT = 7000
-   DB_HOST='localhost'
-   DB_NAME=chat_express
-   DB_USERNAME=username
-   DB_PASSWORD=password

## Run the application

```
npm start

```

## Contributor

-   Jean luc Tuyishime <luctunechi45@gmail.com>

---

## License & copyright

Copyright (c) Jean luc Tuyishime, Software developer
