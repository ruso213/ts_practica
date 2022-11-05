import {category  } from "../categoryidkw/category";
import { basemodel } from "../basemodel";
export type Sizes = "X"| "M"| "L"| "XL" | "S"

export interface Product extends basemodel{
    title : string;
    stock : number;
    size?:Sizes;
    category : category
} 