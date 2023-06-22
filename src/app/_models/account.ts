import { Role } from './role';
export class Account {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    plan?: string;
    language?: string;
    role?: Role;
    token?: string;
    notification?: Boolean;
    jwtToken?: string;
}