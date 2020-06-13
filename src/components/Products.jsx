import React from 'react'
import { Item } from './Card'


const products = [
    {
        image: 'image1.png',
        name: 'Cat Tee Long Shirt',
        price: '14.59'
    },
    {
        image: 'image5.jpg',
        name: 'Yellow',
        price: '5.50'
    },
    {
        image: 'image2.png',
        name: 'White Sweater',
        price: '6.99'
    },
    {
        image: 'image6.jpg',
        name: 'White shirt',
        price: '24.59'
    },
    {
        image: 'image3.png',
        name: 'Cat T-shirt',
        price: '72.50'
    },
    {
        image: 'image7.jpg',
        name: 'Scarf',
        price: '11.99'
    },
    {
        image: 'image4.png',
        name: ' T-shirt',
        price: '20.59'
    },
    {
        image: 'image8.jpg',
        name: 'Black Jacket ',
        price: '34.99'
    }
]

export const Num = products.length


export function Items() {
   return  (
       <div class="row">
            {
                products.map((itm, i) => <Item key={i} product={itm} />)
            }
       </div> 
   )      
}

export function Size() {
    const sizes = ['XS', 'X', 'M', 'ML', 'L', 'XL', 'XXL']
    return (
        <div class="size">
            {
               sizes.map((size) => <button key={size} class="btn btn-default mr-2" type="submit">{size}</button>)   
            }  
        </div>
    )
}

