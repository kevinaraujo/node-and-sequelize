# Node and Sequelize ORM

A little project using node and Sequelize ORM.

I used here a docker-compose to handle the containers.

Run on root folder:

- `npm install`
- `docker-compose up -d`

## Creating Database

Create a new database `english_school` on mysql container and then run this commands on `/api` folder:

- `npx sequelize-cli db:migrate` to create all tables
- `npx sequelize-cli db:seed:all` to populate the table with data

## Testing API

import the `postman_collection.json` file to postman app.


## Database

The project is based on Mysql database. To access the database on terminal type `docker ps` to get the CONTAINER ID.
Then type `docker exec <YOUR_CONTAINER_ID> -it /bin/bash`. Now you are inside the container!

Type `mysql -u root -p` to access the database. Put the password when requested.