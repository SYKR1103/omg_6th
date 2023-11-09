import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";




@Entity()


export class Newjean {


    @PrimaryGeneratedColumn('uuid')
    public id:string;


    @Column()
    public name:string;
    
    @Column()
    public price: number;

    @Column({default:true})
    public isSealed : boolean




}





