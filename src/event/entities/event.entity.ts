// src/entities/Event.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fight } from '../../fight/entities/fight.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'event_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: new Date(),
  })
  date: Date;

  @Column({
    nullable: false,
    default: '',
  })
  location: string;

  @OneToMany(() => Fight, fight => fight.event)
  fights: Fight[];
}
