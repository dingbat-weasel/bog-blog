const router = require("express").Router();
const { Article, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Get all posts and join with user data
    const articleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    //Serialize
    const articles = articleData.map((article) => article.get({ plain: true }));

    // Pass into template
    res.render("homepage", {
      articles,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render("users", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
