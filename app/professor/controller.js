import ProfessorModel from "./index.js";

const controller = {
  index() {
    return ProfessorModel.find({}).populate("classes");
  },
};

export default controller;
