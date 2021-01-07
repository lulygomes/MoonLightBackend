import { Router } from 'express';

import CreateCustomersService from '../services/CreateCustomersService';
import FindCustomerByCPF from '../services/FindCustomerByCpfService';
import ListAllCustomer from '../services/ListAllCustomersService';

const customersRouter = Router();

customersRouter.post('/', async (request, response) => {
  try {
    const data = request.body;

    const createCustomers = new CreateCustomersService();

    const customer = await createCustomers.execute(data);

    return response.json(customer);
  } catch (err) {
    return response.send(err);
  }
});

customersRouter.get('/:cpf', async (request, response) => {
  try {
    const { cpf } = request.params;
    const findCustomerByCPF = new FindCustomerByCPF();

    const customer = await findCustomerByCPF.execute(cpf);

    return response.json(customer);
  } catch (err) {
    return response.send(err);
  }
});

customersRouter.get('/', async (request, response) => {
  try {
    const listAllCustomer = new ListAllCustomer();

    const customers = await listAllCustomer.execute();

    return response.json(customers);
  } catch (err) {
    return response.send(err);
  }
});
export default customersRouter;
