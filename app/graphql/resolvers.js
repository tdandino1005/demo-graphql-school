import classController from "../class/controller.js";

const resolvers = {
  Query: {
    // We must not return a promise in a resolver
    async indexClasses() {
      // Resolve the promise and return the result (not a promise)
      return await classController.index();
    },
  },
};

export default resolvers;
