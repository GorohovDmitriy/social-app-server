const express = require("express");
const router = express.Router();
const controller = require("../Controller/UsersController");

router.post("/create", controller.createUser);
router.get("/", controller.getUsers);

module.exports = router;
