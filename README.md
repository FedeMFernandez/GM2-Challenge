# NodeJS Interview

## What Eval?

1. Clean Code
2. Self documented Code
3. MVC Pattern
4. Error Handling
5. How to handle Async operations
6. Express Best practices
7. How to use env variables (Nice to have)

## Exercise definition

The task involves creating the necessary functionalities that allow a user with a doctor role to view EHRS (which is a text file that describes the patient's symptoms and medical history) one by one and label them with an ICD-10 diagnostic code and a description of the diagnosis. The application should record the case identification, doctor identification, case label, and time taken to label each case. The user should be able to log in with their email and password.

- Create an endpoint that allows the user to log in with their email and password, respond with an error message in case of failure with the most convenient error code.
- Create an endpoint that allows the user to retrieve EHRS one by one (use pagination with page size equals to one).
- Create an endpoint that allows the user to label an EHR with an ICD-10 diagnostic code and a description of the diagnosis, respond with an error message in case of failure with the most convenient error code.
- Implement a middleware to handle application errors (It would be good to evaluate).

NOTE:
EHR Definition: An electronic (digital) collection of medical information about a person that is stored on a computer. An electronic medical record includes information about a patient’s health history, such as diagnoses, medicines, tests, allergies, immunizations, and treatment plans. Electronic medical records can be seen by all healthcare providers who are taking care of a patient and can be used by them to help make recommendations about the patient’s care. Also called EHR and electronic health record.

## Exercise Rules

1. Any type of question is allowed.
2. Prioritize the topics that are being evaluated (not the speed of development).
3. Googling or downloading portions of code from the internet is allowed if necessary.
4. You can use the information in the folder located at /data as records of a database. Implementing a database is not necessary, all can live in memory.
5. If something is confusing, you can decide the right way to implement the solution but you need to be very clear with that with a comment or note in the code that explains your choosing.
6. The delivered starting point is only a reference to start the development and could be incomplete, you are free to apply changes to build your own solution

## How to run the example solution project?

1. Run `yarn install` to install the dependencies.
2. Run `yarn dev` to start the server.

## Optional

Use NestJs and TypeScript.
