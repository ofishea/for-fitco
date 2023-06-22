import { Role } from './role';
export class Account {
    id?: string;
    name?: string;
    email?: string;
    avatar?: number;
    plan?: string;
    language?: string;
    role?: Role;
    notification?: Boolean;
    jwtToken?: string;
}