import { Router } from "express";
import { RegisterUser } from "../controllers/user.controller.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(RegisterUser);
// router.route("/login").post(loginUser);

//secured routes
// router.route("/logout").post(verifyJWT, logoutUser);
// router.route("/").get(verifyJWT, getCurrentUser);
// router.route("/update-account").patch(verifyJWT, updateAccountDetails);

export default router;
