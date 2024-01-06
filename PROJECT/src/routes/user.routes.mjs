import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.mjs";
import registerUser from "../controllers/user.controller.mjs";

const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);


export default router;
