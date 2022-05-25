const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// // Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

var item = [
  { title: "my title001", name: "franklin" },
  { title: "my title002", name: "doug" },
  { title: "my title003", name: "suzy" },
  { title: "my title004", name: "milo" }
]

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // let them still view homepage even if not logged in
  res.render("acct-login", { item })
});

module.exports = router;
