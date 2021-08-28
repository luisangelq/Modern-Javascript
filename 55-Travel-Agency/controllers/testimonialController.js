import { Testimonials } from "./../models/Testimonials.js";

const saveTestimonial = async (req, res) => {
  //Validate
  const { name, email, message } = req.body;

  //Consult the database to get the testimonials
  const testimonials = await Testimonials.findAll();

  let error;
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    error = "Please fill all the fields";
  }
  if (error) {
    res.render("testimonials", {
      titleName: "Travel Agency",
      pageName: "Testimonials",
      error,
      name,
      email,
      message,
      testimonials,
    });
  } else {
    //Save to DB
    try {
      await Testimonials.create({
        name,
        email,
        message,
      });
      res.redirect("/testimonials");
    } catch (error) {
      console.log(error);
    }
  }
};

export { saveTestimonial };
