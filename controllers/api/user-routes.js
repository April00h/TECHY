const router = require('express').Router();
const { User } = require('../../models');

// User registration
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !user.checkPassword(req.body.password)) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json({ user, message: 'Logged in successfully' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// User logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => res.status(204).end());
  } else {
    res.status(404).end();
  }
});

module.exports = router;