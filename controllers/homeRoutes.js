const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');


// var item = [
//   { title: "my title001", name: "franklin" },
//   { title: "my title002", name: "doug" },
//   { title: "my title003", name: "suzy" },
//   { title: "my title004", name: "milo" }
// ]

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // let them still view homepage even if not logged in
  res.render("acct-login", { item })
});

router.get('/', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    Blog.findAll({})
      .then(dbBlogData => {
        console.log(dbBlogData);
      })
    // Serialize user data so templates can read it
    const blogs = dbBlogData.map((blogpost) => blogpost.get({ plain: true }))
    // Pass serialized data into Handlebars.js template
    res.render('homepage', { blogs })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
    return;
  }
  // let them still view homepage even if not logged in
  res.render("acct-login", { item })
});


module.exports = router;