import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../repositories/CustomerRepository';

import Customer from '../models/Customer';
import AppError from '../errors/AppError';

class ListAllCustomerByCPFService {
  public async execute(): Promise<Customer[]> {
    const customerRepository = getCustomRepository(CustomerRepository);

    const customer = await customerRepository.findAllCustomer();

    if (!customer) {
      throw new AppError('Não foi encontrado nem um cliente.');
    }

    return customer;
  }
}

export default ListAllCustomerByCPFService;
