const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
router.get("/planets", controllers.getPlanets);
router.post("/", middlewares.planetsValidation, controllers.createPlanets);
module.exports = router;
