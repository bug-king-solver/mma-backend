// src/entities/Fight.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Fighter } from '../../fighter/entities/fighter.entity';
import { Event } from '../../event/entities/event.entity';

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.fights)
  @JoinColumn({name: 'event_id'})
  event: Event;

  @ManyToOne(() => Fighter, fighter => fighter.fights1)
  @JoinColumn({name: 'fighter1_id'})
  fighter1: Fighter;

  @ManyToOne(() => Fighter, fighter => fighter.fights2)
  @JoinColumn({name: 'fighter2_id'})
  fighter2: Fighter;

  @Column({
    nullable: false,
    default: '',
  })
  result: string;
}
