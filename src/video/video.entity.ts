import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("video")
export class Video extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    video_url: string;

    @Column()
    creator_id: string;

    @Column()
    likes: number;

    @Column()
    dislikes: number;
}