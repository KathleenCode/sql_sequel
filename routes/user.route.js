// import express from "express";
// const router = express.Router();

import {Router } from "express";
const router = Router();

import {addUser, addUserWithProfile, delUser, fetchUser, getOne, getUsersProfile, upUser} from "../controller/user.control.js";

router.post("/", addUser);
router.get("/", fetchUser);
router.post("/post", addUserWithProfile);
router.get("/profiles", getUsersProfile);
router.get("/:id", getOne);
router.put("/:id", upUser);
router.delete("/:id", delUser);

export default router;