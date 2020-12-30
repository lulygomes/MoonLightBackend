import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../repositories/CustomerRepository';

import Customer from '../models/Customer';
import AppError from '../errors/AppError';

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

    const existCustomer = await customerRepository.findCustomerByCPF(cpf);

    if (existCustomer) {
      throw new AppError('CPF já cadastrado no sistema');
    }
    const customer = await customerRepository.createCustomer({
      name,
      cpf,
      address,
      phone,
    });

    return customer;
  }
}

export default CreateCustomersService;
