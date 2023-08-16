// src/entities/Fighter.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fight } from '../../fight/entities/fight.entity';
import { Ranking } from '../../ranking/entities/ranking.entity';

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'fighter_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  weight_class: string;

  @Column({
    nullable: false,
    default: '',
  })
  nationality: string;

  @Column({
    nullable: false,
    default: '',
  })
  team: string;

  @Column({
    nullable: false,
    default: 0,
  })
  wins: number;

  @Column({
    nullable: false,
    default: 0,
  })
  losses: number;

  @Column({
    nullable: false,
    default: 0,
  })
  knockouts: number;

  @Column({
    nullable: false,
    default: 0,
  })
  submissions: number;

  // ...other statistics

  @OneToMany(() => Fight, fight => fight.fighter1)
  fights1: Fight[];

  @OneToMany(() => Fight, fight => fight.fighter2)
  fights2: Fight[];

  @OneToMany(() => Ranking, ranking => ranking.fighter)
  rankings: Ranking[];
}
