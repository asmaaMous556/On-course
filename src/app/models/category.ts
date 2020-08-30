import { course } from './course';

export interface category{
    name:string,
    courses:course[]
}

export interface CategoryResponse{
    message:string,
    categories: category[]
}