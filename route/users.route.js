const { Router } = require("express");
const controller = require("../controller/users.controller");
const router = Router();
router.post("/", controller.create);
module.exports = router;
