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

  console.log(journeys);

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

export { homePage, aboutPage, journeysPage, testimonialsPage };
