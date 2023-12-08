# Node and Sequelize ORM

A little project using node and Sequelize ORM.

I used here a docker-compose to handle the containers.

Run on root folder:

- `npm install`
- `docker-compose up -d`


## Testing API:

import the `postman_collection.json` file to postman app.


## Database

The project is based on Mysql database. To access the database on terminal type `docker ps` to get the CONTAINER ID.
Then type `docker exec <YOUR_CONTAINER_ID> -it /bin/bash`. Now you are inside the container!

Type `mysql -u root -p` to access the database. Put the password when requested.