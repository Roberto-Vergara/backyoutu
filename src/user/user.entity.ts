import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Creator } from "../creator/creator.entity";
import { Like } from "../like/like.entity";


@Entity("user")
export class User extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    lastname: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Creator, creator => creator.user)
    creator: Creator;

    @OneToMany(() => Like, like => like.user)
    like: Like;
}