import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


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

    @Column({ default: false })
    uploader: boolean;

    @Column({ type: "simple-array", default: [] })
    videos: string[];
}