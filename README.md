# Project-api

Hello Spartan ⚔️ !! This is the Project_API challenge application made with NestJS and PostgreSQL database. This README file contains instructions on how to test the application.

<!-- ## Testing the Application Online

You can test the application using Swagger API endpoint

1. Open your web browser and navigate to the following URL: -->
# How To Use
you can see how to use the API using the endpoint **/api** that show the docmentation of all endpoints, schemas, request bodys and responses of all routes.

## Running the app using Docker Compose 🐋 (recommended)

### Prerequisites
- [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine

1. create a docker-compose.yml file using the example bellow, you can change the default envs if you want to.

```YAML
version: '3.9'
services:
  db:
    container_name: 'db'
    image: postgres
    environment:
      POSTGRES_PASSWORD: '1234'	
      POSTGRES_USER: 'postgres'	
      POSTGRES_DB: 'projects'
    ports:
      - 5434:5432
    volumes:
      - pg-data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD', 'pg_isready', '-h', 'db', '-p', '5432']
      interval: 2s
      timeout: 5s
      retries: 10
      start_period: 1s

  api:
    container_name: projects-api
    image: fabio08/sparta-project-api:1.0
    environment:
      DATABASE_URL: 'postgres://postgres:1234@db:5432/projects'
    tty: true
    ports:
      - 80:3001
    depends_on:
      db:
        condition: service_healthy

volumes:
  pg-data:

```
2. execute the file using docker composer
```
$ docker-compose -f path/to/the/docker-compose.yml up -d
```
3. test the endpoints at http://localhost using insomnia, postman or your favorite tool.
## alternatively you can build the image locally from the repo files


1. clone the repo to your machine and build the image locally
```
$ git clone https://github.com/fabioalmeida08/projects_api
$ cd projects_api
```
3. use .env.example file to make a .env file in the same directory
3. **set the variables in the new .env file following the example**
4.run the docker-compose command to build the image locally
```
$ docker-compose up -d --build
```
5. test the endpoints at http://localhost using insomnia, postman or your favorite tool.

## Running app locally on your machine 🖥️ (not recommended)

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/package/npm) or [YARN](https://classic.yarnpkg.com/lang/en/docs/install/) installed on your machine
- Postgres instance running on your machine 
- The repo files on your machine

### Steps
1. clone the repo to your machine and move to where the repo as cloned
```
$ git clone https://github.com/fabioalmeida08/projects_api
$ cd projects_api
```
2. Run the following command to install the dependencies: `npm install` or `yarn install` 
3. use .env.example file to make a .env file in the same directory
4. set the variables in the new .env file following the example in the .ev.example
5. Run the following command to start the app: `npm run start:dev` or `yarn start:dev`
6. test the endpoints at http://localhost:3001/ using insomnia, postman or your favorite tool.

### TODO
- [ ] Deploy the application online
- [ ] create a troubleshot section
- [x] create template file for insomnia to test api endpoints