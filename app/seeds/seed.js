import ClassModel from "../class/index.js";
import initConn, { conn } from "../conn.js";
import ProfessorModel from "../professor/index.js";
import SchoolModel from "../school/index.js";
import data from "./data.json" assert { type: "json" };

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
// conn
await initConn();

conn.once("open", async () => {
  try {
    console.info("Dropping collections...");
    await ClassModel.deleteMany();
    await ProfessorModel.deleteMany();
    await SchoolModel.deleteMany();

    console.info("Seeding classes...");
    const classes = await ClassModel.insertMany(data.classes);

    console.info("Seeding professors...");
    const professors = await ProfessorModel.insertMany(data.professors);

    console.info("Seeding schools...");
    const schools = await SchoolModel.insertMany(data.schools);

    console.info(
      "Randomly assigning classes to 🏫s and professors to classes..."
    );

    await classes.reduce(async (previousPromise, classObj) => {
      await previousPromise;

      const randSchool = schools[getRandomIndex(schools)];
      randSchool.classes.push(classObj._id);
      await randSchool.save();

      const randProfessor = professors[getRandomIndex(professors)];
      classObj.professor = randProfessor._id;
      await classObj.save();

      // reference class on professor model
      randProfessor.classes.push(classObj._id);
      await randProfessor.save();
    }, Promise.resolve());

    console.info("Done seeding!");
  } catch (err) {
    console.error(err.message);
  } finally {
    conn.close();
  }
});
import ClassModel from "../class/index.js";
import initConn, { conn } from "../conn.js";
import ProfessorModel from "../professor/index.js";
import SchoolModel from "../school/index.js";
import data from "./data.json" assert { type: "json" };

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

await initConn();

conn.once("open", async () => {
  try {
    console.info("Dropping collections...");
    await ClassModel.deleteMany();
    await ProfessorModel.deleteMany();
    await SchoolModel.deleteMany();

    console.info("Seeding classes...");
    const classes = await ClassModel.insertMany(data.classes);

    console.info("Seeding professors...");
    const professors = await ProfessorModel.insertMany(data.professors);

    console.info("Seeding schools...");
    const schools = await SchoolModel.insertMany(data.schools);

    console.info(
      "Randomly assigning classes to 🏫s and professors to classes..."
    );

    await classes.reduce(async (previousPromise, classObj) => {
      await previousPromise;

      const randSchool = schools[getRandomIndex(schools)];
      randSchool.classes.push(classObj._id);
      await randSchool.save();

      const randProfessor = professors[getRandomIndex(professors)];
      classObj.professor = randProfessor._id;
      await classObj.save();

      // reference class on professor model
      randProfessor.classes.push(classObj._id);
      await randProfessor.save();
    }, Promise.resolve());

    console.info("Done seeding!");
  } catch (err) {
    console.error(err.message);
  } finally {
    conn.close();
  }
});