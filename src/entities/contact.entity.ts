import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn({ type: "date" })
    created_at: string;

    @ManyToOne(() => User)
    user: User;
}

export { Contact };
