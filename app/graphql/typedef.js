import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Get all the classes. If there are no classes, return an empty array."
    indexClasses: [Class]!
  }
  "A class in our school."
  type Class {
    "The unique identifier for the class. thsi is a MongoDB ObjectID"
    _id: ID!
    name: String!
    "The name of the class."
    building: String!
    creditHours: Int!
  }
`;

export default typeDefs;
