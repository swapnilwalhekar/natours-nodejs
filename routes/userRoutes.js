const express = require('express');
const {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { signUp, logIn } = require('../controllers/authControlller');

const router = express.Router();

router.post('/signup', signUp)
router.post('/login', logIn)

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
