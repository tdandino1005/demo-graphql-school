import classController from "../class/controller.js";

const resolvers = {
  Query: {
    indexClasses() {
      return classController.index();
    },
  },
};

export default resolvers;
