import classController from "../class/controller.js";
import professorController from "../professor/controller.js";
import schoolController from "../school/controller.js";

const resolvers = {
  Query: {
    // We must not return a promise in a resolver
    async indexClasses() {
      // Resolve the promise and return the result (not a promise)
      return await classController.index();
    },
    async Professors() {
      return await professorController.index();
    },
    async Schools() {
      return await schoolController.index();
    },
    async class(_, args) {
      return await classController.show(args._id);
    },
  },
};

export default resolvers;
