const router = require("express").Router();
const users = require("./route/users.route");
router.use("/users", users);
module.exports = router;
