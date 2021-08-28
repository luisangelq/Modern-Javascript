import express from "express";
import {
  homePage,
  aboutPage,
  journeysPage,
  testimonialsPage,
} from "../controllers/pagesController.js";

const router = express.Router();

router.get("/", homePage);

router.get("/aboutUs", aboutPage);

router.get("/journeys", journeysPage);

router.get("/testimonials", testimonialsPage);
export default router;
