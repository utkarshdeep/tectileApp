export interface Roles{
    admin?: boolean;
    master?: boolean;
    jobworker: boolean;
}


export class User{
    uid: string;
    email: string;
    password: string;
    roles: Roles;


    constructor(authData) {
        this.uid = authData.uid
        this.email    = authData.email
        this.password = authData.password
        this.roles    = { jobworker: true }
      }
}