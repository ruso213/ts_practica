import {category  } from "../categoryidkw/category";
import { basemodel } from "../categoryidkw/basemodel";


export type Sizes = "X"| "M"| "L"| "XL" | "S"

export interface Product extends basemodel {
    title : string;
    image:string;
    description: string;
    stock : number;
    size?:Sizes;
    color:string;
    price: number;
    category : category;
    isNew:boolean;
    tags:string[];
} 

