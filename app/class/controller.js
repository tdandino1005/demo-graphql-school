import ClassModel from "./index.js";

// TODO: Improve this 💩

const controller = {
  index() {
    return ClassModel.find({}).populate("professor");
  },
  show(id) {
    return ClassModel.findById(id);
  },
  updateClassBuilding(id, newBuilding) {
    return ClassModel.findByIdAndUpdate(id, { building: newBuilding });
  },
};

export default controller;
