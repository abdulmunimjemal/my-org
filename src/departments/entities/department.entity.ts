import { User } from '../../users/entities';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Department, { nullable: true })
  @JoinColumn({ name: 'managingDepartmentId' })
  managingDepartment: Department;

  @Column({ nullable: true })
  managingDepartmentId: number;

  @JoinTable()
  @OneToMany((type) => User, (user) => user.department)
  members: User[];
}
