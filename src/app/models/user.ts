export interface User {
    email: string ;
    password:string;
    confirmPassword?:string;
    isAdmin?:boolean;
  }