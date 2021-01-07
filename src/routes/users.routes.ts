import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createCustomer = new CreateUserService();

  const user = await createCustomer.execute({ name, email, password });

  delete user.password;

  return response.json(user);
});

export default usersRouter;
