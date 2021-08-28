import Sequelize from "sequelize";
import db from "../config/db.js";

export const Journey = db.define("journeys", {
    title: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.STRING,
    },
    date_go: {
        type: Sequelize.DATE,
    },
    date_back: {
        type: Sequelize.DATE,
    },
    image: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    availables: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    }


})