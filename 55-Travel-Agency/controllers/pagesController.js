import { Journey } from "../models/Journey.js";

const homePage = (req, res) => {
  //req = petition we're making, res = response
  res.render("home", {
    titleName: "Travel Agency",
    pageName: "Home",
  });
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

const testimonialsPage = (req, res) => {
  res.render("testimonials", {
    titleName: "Travel Agency",
    pageName: "Testimonials",
  });
};

//Show journey by slug
const detailJourneyPage = async (req, res) => {
  const { slug } = req.params;
  try {
    const journey = await Journey.findOne({ where: { slug } });
    res.render("detailJourney", {
      titleName: "Travel Agency",
      pageName: journey.title,
      journey
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
