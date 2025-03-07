# Database_migration_node_js
 This is the file for database migrations for node.js


Students

POST http://localhost:5000/api/students → Create a student

GET http://localhost:5000/api/students → Get all students

GET http://localhost:5000/apistudents/id → Get a specific student

PUT http://localhost:5000/api/studentsid → Update a student

DELETE http://localhost:5000/api/students/id → Delete a student

 npx sequelize-cli migration:generate --name create-students

npx sequelize-cli model:generate --name Student --attributes name:string,email:string



Teachers

POST http://localhost:5000/api/teachers → Create a teacher

GET http://localhost:5000/api/teachers → Get all teachers

GET http://localhost:5000/api/teachers/id → Get a specific teacher

PUT http://localhost:5000/api/teachers/id → Update a teacher

DELETE http://localhost:5000/api/teachers/id → Delete a teacher

npx sequelize-cli migration:generate --name create-teachers 



Courses

POST http://localhost:5000/api/courses → Create a course

GET http://localhost:5000/api/courses → Get all courses

GET http://localhost:5000/api/courses/id → Get a specific course

PUT http://localhost:5000/api/courses/id → Update a course

DELETE http://localhost:5000/api/courses/id → Delete a course


npx sequelize-cli model:generate --name Teacher --attributes name:string,subject:string

npx sequelize-cli migration:generate --name create-courses

 npx sequelize-cli model:generate --name Course --attributes name:string,description:string


Assignments

POST http://localhost:5000/api/assignments → Create an assignment

GET http://localhost:5000/api/assignments → Get all assignments

GET http://localhost:5000/api/assignments/id → Get a specific assignment

PUT http://localhost:5000/api/assignments/id → Update an assignment

DELETE http://localhost:5000/api/assignments/id → Delete an assignment

npx sequelize-cli migration:generate --name create-assignments 

npx sequelize-cli model:generate --name Assignment --attributes title:string,due_date:date
