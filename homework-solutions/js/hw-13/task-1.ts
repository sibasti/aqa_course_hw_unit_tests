let num1: number = 42;
let str: string = 'Hello, TypeScript!';
let isComplete: boolean = true;
let numbers: number[] = [1,2,3,4,5];
let cities: string[] = ['Minsk', 'Warsaw', 'London'];
let person : {name: string; age: number; city: string} = {
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

interface Car{
    brand: string;
    model: string;
    year?: number;
};

interface Address{
    street: string;
    city: string;
    zipCode: number;
};

interface FullAddress extends Address{
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

