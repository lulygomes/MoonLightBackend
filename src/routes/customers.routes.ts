import { Router } from 'express';

const customersRouter = Router();

const customers = [];

customersRouter.post('/', (request, response) => {
  const { name, cpf, address, phone } = request.body;

  const customer = { name, cpf, address, phone };

  return response.json(customer);
});

export default customersRouter;
