import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
// @Tree('nested-set')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: 'integer', default: null })
  parentId: number;

  @Column({ type: 'datetime' })
  createdAt: string;

  @OneToMany((type) => MenuItem, (menuItem) => menuItem.id)
  children: MenuItem[];

  // @TreeChildren()
  // children: MenuItem[];

  // @TreeParent()
  // parent: MenuItem;
}
