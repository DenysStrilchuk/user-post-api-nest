<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

## Description

This project is a NestJS application designed for user management, with MongoDB integration, authentication, and more. It includes the following features:
- Google authentication
- User registration and login
- User status tracking (online/offline)
- Group management (users belong to groups and have roles)

# Installation

Clone the repository and install dependencies:

```bash
$ git clone <your-repo-url>
$ cd <your-project-folder>
$ npm install
```

# Running the app

## Development mode
```bash
$ npm run start:dev
```

## Production mode
```bash
$ npm run start:prod

$ docker run --name mongodb -d -p 27017:27017 mongo
```

# Test

## Run unit tests
```bash
$ npm run test
```
## Run e2e tests
```bash
$ npm run test:e2e
```
## Check test coverage
```bash
$ npm run test:cov
```

# Support

This project is open source and maintained with contributions from the community. If you'd like to support, feel free to reach out.

Stay in touch
Author - Denys Strilchuk

# License

Nest is [MIT licensed](LICENSE).
