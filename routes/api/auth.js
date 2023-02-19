const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middleware');
const { schemas } = require('../../models/user');
const router = express.Router();

router.post(
  '/users/signup',
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  '/users/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get('/users/logout', authenticate, ctrlWrapper(ctrl.logout));

router.get('/users/current', authenticate, ctrlWrapper(ctrl.getCurrentUser));

module.exports = router;
