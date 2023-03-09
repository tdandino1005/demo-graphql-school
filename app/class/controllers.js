import initConn from "../conn.js";
import ClassModel from "./index.js";

const controller = {
  index() {
    return ClassModel.find({});
  },
  updateClassBuilding(id, newBuilding) {
    return ClassModel.findByIdAndUpdate(id, { building: newBuilding });
  },
};

await initConn();

controller
  .index()
  .then((classes) => {
    console.log(classes);
  })
  .catch((err) => {
    console.error(err.message);
  });

export default controller;
