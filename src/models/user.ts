export interface Roles{
    admin: boolean;
    master?: boolean;
    jobworker?: boolean;
}


export interface User{
    email: string;
    password: string;
    roles: Roles;
}