const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
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
    //add comments to each Post
    const blogs = dbBlogData.map((blogpost) => blogpost.get({ plain: true }));
    for (let index = 0; index < blogs.length; index++) {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      // console.log(blogs[index])
      // blogs[index].tacocat = "leroy"
      const commentData = await Comment.findAll({
        where: {
          blog_id: blogs[index].id
        }
      });
      // console.log(commentData)

      if (commentData) {
        blogs[index].comment = commentData.map((cpost) => cpost.get({ plain: true }));
      } else blogs[index].comment = null

      console.table(blogs)
    }
    // Pass serialized data into Handlebars.js template
    res.render('homepage', { blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  if (req.user) {
    console.log("test line 43");
    res.render("acct-dashboard");
  }
});
module.exports = router;