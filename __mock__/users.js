//this hashedPassword corresponds to this string => 'genericPassword'
const hashedPassword =
  "$2a$10$MXGdqzKEp7ueSZdz/DCoE.JQb3X3wFreHxwbPP67n0qrUN1lE8SA6";

const users = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "doctor1@gmail.com",
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    firstname: "Patrick",
    lastname: "Jones",
    email: "user1@gmail.com",
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

exports.users = users;
