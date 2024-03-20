import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
}
