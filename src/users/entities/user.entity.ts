import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { currentTimestamp } from '../../shared/helpers/dateFormat.helper';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true, length: 100 })
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  insertCreated() {
    this.created_at = new Date(currentTimestamp());
    this.updated_at = new Date(currentTimestamp());
  }

  @BeforeUpdate()
  insertUpdated() {
    this.updated_at = new Date(currentTimestamp());
  }
}
