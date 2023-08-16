// src/entities/Ranking.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Fighter } from '../../fighter/entities/fighter.entity';

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  weight_class: string;

  @ManyToOne(() => Fighter, fighter => fighter.rankings)
  fighter: Fighter;

  @Column({
    nullable: false,
    default: 0,
  })
  rank: number;
}
