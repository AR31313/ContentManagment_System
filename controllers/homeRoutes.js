const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

// If a session exists, redirect the request to the homepage
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // let them still view homepage even if not logged in
  res.render("acct-login")
});
router.get("/signup", (req, res) => {
  // If the user already has an account send them to the home page
  if (req.user) {
    console.log("test");
    res.render("homepage");
  }
  res.render("acct-signup");
});
// Get all blogs upon entering Homepage
router.get('/', async (req, res) => {
  try {

    const dbBlogData = await Blog.findAll({
    });

    // Serialize user data so templates can read it
    const blogs = dbBlogData.map((blogpost) => blogpost.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;