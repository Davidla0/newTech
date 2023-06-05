import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post{
    @PrimaryKey()
    id!:number
    
    @Property({type: 'date',  defaultRaw: 'now' })
    createdAt = new Date()

    @Property({onUpdate: () => new Date(), type: 'date', defaultRaw: 'now' })
    updatedAt = new Date()

    @Property({type: 'text'})
    title!: string
}