const router = require('express').Router();
const usersService = require('./user.service');
const User = require('./user.model');

router.route('/')
  // Gets all users
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })

  // Creates a new user
  .post( async (req, res) => {
    const userParams = req.body;
    const newUser = await usersService.create(userParams);

    res
      .status(201)
      .json(User.toResponse(newUser))
  })

router.route('/:userId')
  // Gets a user by ID
  .get(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.getById(userId);

    if (user) {
      res.json(User.toResponse(user))
    } else {
      res.sendStatus(404)
    }
  })

  // Updates a user by ID
  .put( async (req, res) => {
    const { userId } = req.params;
    const schema = req.body;

    const updatedUser = await usersService.updateById(userId, schema);

    if (updatedUser) {
      res.json(User.toResponse(updatedUser))
    } else {
      res.sendStatus(400)
    }
  })

  // Deletes user by ID
  .delete( async (req, res) => {
    const { userId } = req.params;

    const isUserDeleted = await usersService.deleteById(userId);

    if (isUserDeleted) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  })

module.exports = router;
