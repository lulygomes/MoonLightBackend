import { EntityRepository, Repository } from 'typeorm';

import AppError from '../errors/AppError';

import Customer from '../models/Customer';

interface Request {
  name: string;
  cpf: string;
  phone: string;
  address: string;
}

@EntityRepository(Customer)
class CustomerRepository extends Repository<Customer> {
  public async verifyAndCreateCustomer({
    name,
    cpf,
    phone,
    address,
  }: Request): Promise<Customer> {
    const existCustomer = await this.findOne({
      where: { cpf },
    });

    if (existCustomer) {
      throw new AppError('Cliente já cadastrdo com este cpf.');
    }

    const newCustomer = this.create({ name, cpf, phone, address });
    await this.save(newCustomer);

    return newCustomer;
  }
}

export default CustomerRepository;
