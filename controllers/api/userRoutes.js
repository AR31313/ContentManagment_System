const router = require('express').Router();
const { User } = require('../../models');

//SIGN-UP
// create a new user
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session.save(() => {
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log('error', err);
    res.status(400).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGOUT
// log out current user, destroy the session
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  } else res.redirect('/login');


});

// GET Users
// Edit/PUT User info
// Delete/DESTROY User 


module.exports = router;