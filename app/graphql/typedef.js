import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Get all the classes. If there are no classes, return an empty array."
    indexClasses: [Class]!
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
  }
`;

export default typeDefs;
