export class Account {
    id!: string;
    name!: string;
    email!: string;
    avatar!: number;
    plan!: string;
    language!: string;
    notification!: Boolean;
    jwtToken?: string;
}