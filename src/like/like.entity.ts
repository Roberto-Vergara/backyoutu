import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("like")
export class Like extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    like: boolean; //si es true es like, si es false es dislike

    // relation con videoId(al video que le dio like)
    // relacion con userId(el que dio like)
}