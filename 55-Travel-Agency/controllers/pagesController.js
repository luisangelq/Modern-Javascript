import { Journey } from "../models/Journey.js";
import { Testimonials } from "../models/Testimonials.js";

const homePage = async (req, res) => {
  //consult the database to get the 3 journeys
  try {
    const response = await Promise.all([
      Journey.findAll({ limit: 3 }),
      Testimonials.findAll({ limit: 3 }),
    ]);
    res.render("home", {
      titleName: "Travel Agency",
      pageName: "Home",
      home: "home",
      journeys: response[0],
      testimonials: response[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const aboutPage = (req, res) => {
  res.render("aboutUs", {
    titleName: "Travel Agency",
    pageName: "About Us",
  });
};

const journeysPage = async (req, res) => {
  //Consult the database to get the journeys
  const journeys = await Journey.findAll();

  res.render("journeys", {
    titleName: "Travel Agency",
    pageName: "Next Journeys",
    journeys,
  });
};

const testimonialsPage = async (req, res) => {
  try {
    //Consult the database to get the testimonials
    const testimonials = await Testimonials.findAll();

    res.render("testimonials", {
      titleName: "Travel Agency",
      pageName: "Testimonials",
      testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};

//Show journey by slug
const detailJourneyPage = async (req, res) => {
  const { slug } = req.params;
  try {
    const journey = await Journey.findOne({ where: { slug } });
    res.render("detailJourney", {
      titleName: "Travel Agency",
      pageName: journey.title,
      journey,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  homePage,
  aboutPage,
  journeysPage,
  testimonialsPage,
  detailJourneyPage,
};
