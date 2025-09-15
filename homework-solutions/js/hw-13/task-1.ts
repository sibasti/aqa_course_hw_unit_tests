let num1: number = 42;
let str: string = 'Hello, TypeScript!';
let isComplete: boolean = true;
const numbers: number[] = [1,2,3,4,5];
const cities: string[] = ['Minsk', 'Warsaw', 'London'];
const person : {name: string; age: number; city: string} = {
    name:'Alice',
    age: 30,
    city: 'Minsk',
};

type User ={
    name: string;
    age: number;
    email?: string;
};

type Grade = 'junior' | 'middle' | 'senior';

interface ICar{
    brand: string;
    model: string;
    year?: number;
};

interface IAddress{
    street: string;
    city: string;
    zipCode: number;
};

interface IFullAddress extends IAddress{
    country: string;
};

type Product ={
    id: number;
    name: string;
    price: number;

};

type DiscountedProduct = Product & {
    discount: number;
};

function calculateDiscount(product: DiscountedProduct): number{
    const discountPrice = product.price - (product.price * product.discount) / 100;
    return discountPrice;
};

const product: DiscountedProduct ={
    id:1,
    name:'Laptop',
    price:1000,
    discount:10,
};
console.log(calculateDiscount(product));




