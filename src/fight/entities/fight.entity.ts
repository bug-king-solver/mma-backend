// src/entities/Fight.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Fighter } from '../../fighter/entities/fighter.entity';
import { Event } from '../../event/entities/event.entity';

@Entity()
export class Fight {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @ManyToOne(() => Event, event => event.fights)
  event: Event;

  @ManyToOne(() => Fighter, fighter => fighter.fights1)
  fighter1: Fighter;

  @ManyToOne(() => Fighter, fighter => fighter.fights2)
  fighter2: Fighter;

  @Column({
    nullable: false,
    default: '',
  })
  result: string;

  // ...other details
}
