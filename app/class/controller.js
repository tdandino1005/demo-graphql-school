import ClassModel from "./index.js";

const controller = {
  index() {
    return ClassModel.find({}).populate("professor");
  },
  updateClassBuilding(id, newBuilding) {
    return ClassModel.findByIdAndUpdate(id, { building: newBuilding });
  },
};

export default controller;
