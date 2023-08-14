// src/entities/Fighter.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fight } from './fight.entity';
import { Ranking } from './ranking.entity';

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight_class: string;

  @Column()
  nationality: string;

  @Column()
  team: string;

  @Column()
  wins: number;

  @Column()
  losses: number;

  @Column()
  knockouts: number;

  @Column()
  submissions: number;

  // ...other statistics

  @OneToMany(() => Fight, fight => fight.fighter1)
  fights1: Fight[];

  @OneToMany(() => Fight, fight => fight.fighter2)
  fights2: Fight[];

  @OneToMany(() => Ranking, ranking => ranking.fighter)
  rankings: Ranking[];
}
