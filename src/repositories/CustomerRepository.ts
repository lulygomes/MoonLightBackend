import { EntityRepository, Repository } from 'typeorm';

import Customer from '../models/Customer';

@EntityRepository(Customer)
class CustomerRepository extends Repository<Customer> {
  public async verifyAndCreateCustomer({
    name,
    cpf,
    phone,
    address,
  }: Omit<Customer, 'id' | 'created_at' | 'updated_at'>): Promise<Customer> {
    const existCustomer = await this.findOne({
      where: { cpf },
    });

    if (existCustomer) {
      return existCustomer;
    }

    const newCustomer = this.create({ name, cpf, phone, address });
    await this.save(newCustomer);

    return newCustomer;
  }
}

export default CustomerRepository;
