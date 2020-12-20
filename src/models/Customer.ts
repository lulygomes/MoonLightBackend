import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}

export default Customer;
