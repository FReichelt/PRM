import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ default: '', unique: true })
    username: string;

    @Column({ default: '' })
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ default: '', select: false })
    password!: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt!: Date;

    @Column({ type: 'boolean', default: false })
    isAdmin: boolean = false;
}
