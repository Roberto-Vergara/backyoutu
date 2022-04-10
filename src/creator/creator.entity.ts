import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, OneToMany, CreateDateColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Video } from "../video/video.entity";


@Entity()
export class Creator extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => User, user => user.creator)
    @JoinColumn({
        name: "user_id"
    })
    user: User;

    @OneToMany(() => Video, video => video.creator)
    video: Video[];
}