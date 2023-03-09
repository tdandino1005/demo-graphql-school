import SchoolModel from "./index.js";

const controller = {
  create(newSchool) {
    return SchoolModel.create(newSchool);
  },
  index() {
    return SchoolModel.find({}).populate({
      path: "classes",
      populate: "professor",
    });
  },
};

export default controller;
