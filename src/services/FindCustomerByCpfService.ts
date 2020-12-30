import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../repositories/CustomerRepository';

import Customer from '../models/Customer';
import AppError from '../errors/AppError';

class CreateCustomersService {
  public async execute(cpf: string): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);

    const customer = await customerRepository.findCustomerByCPF(cpf);

    if (!customer) {
      throw new AppError('CPF não cadastrado no sistema');
    }

    return customer;
  }
}

export default CreateCustomersService;
