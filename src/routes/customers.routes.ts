import { Router } from 'express';

import CreateCustomersService from '../services/CreateCustomersService';
import FindCustomerByCPF from '../services/FindCustomerByCpfService';

const customersRouter = Router();

customersRouter.post('/', async (request, response) => {
  const data = request.body;

  const createCustomers = new CreateCustomersService();

  const customer = await createCustomers.execute(data);

  return response.json(customer);
});

customersRouter.get('/:cpf', async (request, response) => {
  const { cpf } = request.params;
  const findCustomerByCPF = new FindCustomerByCPF();

  const customer = await findCustomerByCPF.execute(cpf);

  return response.json(customer);
});
export default customersRouter;
