import { BaseEntity, Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Video } from "../video/video.entity";


@Entity("like_video")
export class Like extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    like: boolean; //si es true es like, si es false es dislike


    @ManyToOne(() => User, user => user.like)
    @JoinTable({ name: "user_id" })
    user: User;

    @ManyToOne(() => Video, video => video.like)
    video: Video;
}