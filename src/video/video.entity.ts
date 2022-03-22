import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("video")
export class Video {

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
}