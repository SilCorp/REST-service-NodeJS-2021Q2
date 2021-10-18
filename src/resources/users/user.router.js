const router = require('express').Router();
const usersService = require('./user.service');
const User = require('./user.model');

router.route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post( async (req, res) => {
    const userParams = req.body;
    const newUser = await usersService.createUser(userParams);

    res
      .status(201)
      .json(User.toResponse(newUser))
  })

router.route('/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.getById(userId);

    if (user) {
      res.json(User.toResponse(user))
    } else {
      res.sendStatus(404)
    }
  })


module.exports = router;
