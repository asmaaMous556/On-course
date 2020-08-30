import { category } from './category';

export interface course{
    categories:category[],
    userId:string,
    name:string,
    points:number,
    description:string,
    imageUrl:string
}

export interface CoursesResponse{
    message:string,
    courses: course[]
}