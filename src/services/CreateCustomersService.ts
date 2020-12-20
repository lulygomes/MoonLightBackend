import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../repositories/CustomerRepository';

import Customer from '../models/Customer';

interface Request {
  name: string;
  cpf: string;
  phone: string;
  address: string;
}

class CreateCustomersService {
  public async execute({
    name,
    cpf,
    phone,
    address,
  }: Request): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);
    const customer = await customerRepository.verifyAndCreateCustomer({
      name,
      cpf,
      address,
      phone,
    });

    return customer;
  }
}

export default CreateCustomersService;
