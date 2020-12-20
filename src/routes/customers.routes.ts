import { Router } from 'express';

import CreateCustomersService from '../services/CreateCustomersService';

const customersRouter = Router();

customersRouter.post('/', async (request, response) => {
  const data = request.body;

  const createCustomers = new CreateCustomersService();

  const customer = await createCustomers.execute(data);

  return response.json(customer);
});

export default customersRouter;
