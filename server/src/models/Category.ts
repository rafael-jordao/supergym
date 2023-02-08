import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('categories')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    icon: string;

    @Column()
    category: string;
}

export default User;