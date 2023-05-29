import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("users")
class User {
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

    @OneToMany(() => Contact, (contacts) => contacts.user)
    contacts: Contact[];
}

export { User };
