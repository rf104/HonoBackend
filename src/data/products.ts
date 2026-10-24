export type Product = {
    id : string,
    name : string,
    description : string,
    price : number,
    catagory : string
};

export const products : Product[] = [
    {
        id : "1",
        name : 'Apple iPhone 13',
        description : 'The latest iPhone with A15 Bionic chip and improved camera system.',
        price : 999,
        catagory : 'Electronics'
    },
    {
        id : '2',
        name : 'Samsung Galaxy S21',
        description : 'A powerful Android smartphone with a stunning display and versatile camera.',
        price : 799,   
        catagory : 'Electronics' 
    },
    {
        id : '3',
        name : 'Sony WH-1000XM4',
        description : 'Industry-leading noise-canceling headphones with exceptional sound quality.',    
        price : 349,
        catagory : 'Electronics'
    },
]