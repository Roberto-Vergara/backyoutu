import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn } from "typeorm";
import { Creator } from "../creator/creator.entity";
import { Like } from "../like/like.entity";


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

    @Column({ default: 0 })
    likes: number;

    @Column({ default: 0 })
    dislikes: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Creator, creator => creator.video)
    @JoinColumn({ name: "creator_id" })
    creator: Creator;

    @OneToMany(() => Like, like => like.video)
    like: Like[];
}