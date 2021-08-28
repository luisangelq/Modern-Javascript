import express from "express";
import {
  homePage,
  aboutPage,
  journeysPage,
  testimonialsPage,
  detailJourneyPage
} from "../controllers/pagesController.js";
import {saveTestimonial} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", homePage);

router.get("/aboutUs", aboutPage);

router.get("/journeys", journeysPage);
//wildcard route
router.get("/journeys/:slug", detailJourneyPage);

router.get("/testimonials", testimonialsPage);
router.post("/testimonials", saveTestimonial); 
export default router;
