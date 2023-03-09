import SchoolModel from "./index.js";

const controller = {
  index() {
    return SchoolModel.find({}).populate({
      path: "classes",
      populate: "professor",
    });
  },
};

export default controller;
