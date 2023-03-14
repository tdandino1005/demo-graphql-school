import { gql } from "graphql-tag";

// We define what users are allowed to do (e.g. Query)
const typeDefs = gql`
  type Query {
    schools: [School!]!
    "Get all the classes at this 🏫."
    classes: [Class!]!
    "Get all 👨🏾‍🏫s at this 🏫."
    professors: [Professor!]!
    "Get a class by its ID."
    class(_id: ID!): Class
  }
  type Mutation {
    "Create a new 🏫."
    createSchool(name: String!, location: String!, studentCount: Int): School
    "Move a class to a new building."
    updateClassBuilding(_id: ID!, newBuilding: String!): Class
  }
  "A school in our 🏫."
  type School {
    _id: ID!
    "The name of the school."
    name: String!
    "The location of the school."
    location: String!
    "The number of students enrolled in the school."
    studentCount: Int
    "Classes offered by the school."
    classes: [Class]
  }
  "A class in our 🏫."
  type Class {
    "The unique identifier for the class. This is a MongoDB ID."
    _id: ID!
    "The name of the class."
    name: String!
    building: String!
    "The number of credit hours for the class."
    creditHours: Int!
    "The professor teaching the class."
    professor: Professor
  }
  "A professor at our 🏫."
  type Professor {
    _id: ID!
    name: String!
    "The professor's office hours."
    officeHours: String
    officeLocation: String
    "Rating of the professor by 🧑‍🎓s."
    studentScore: Int
    "Classes taught by the professor."
    classes: [Class]
  }
`;

export default typeDefs;
