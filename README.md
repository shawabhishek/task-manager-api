# Task-manager-REST api

Hosted in heroku web service

http://shawabhi-task-manager.herokuapp.com

Can be run on POSTMAN to test routes as it is REST-API (no frontend)

Routes are:

POST /users (to create account)

POST /users/login (to login)(It is configured with JWT service)

After that all routes need authentication without that no route will be open

GET /users/me (to fetch user data)

PATCH /users/me (to update data)

DELETE /users/me (to delete user)

POST /users/logout (to logout user)

POST /tasks/:id (to create task)

GET /tasks/:id (to fetch user task)

PATCH /users/:id (to update task detail)

DELETE /users/:id (to delete particular task)

All data stored in MONGODB
