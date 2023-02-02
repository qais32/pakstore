import React, {createContext, useState} from 'react';
import p1 from '../assets/1.jpg';
import p2 from '../assets/2.jpg';
import p3 from '../assets/3.jpg';
import p4 from '../assets/4.jpg';
import p5 from '../assets/5.jpg';
import p6 from '../assets/6.jpg';
import p7 from '../assets/7.jpg';
import p8 from '../assets/8.jpg';


export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id:'1',name:'Product1',price:300,image:p1,status:'hot'},
        {id:'2',name:'Product2',price:2000,image:p2,status:'new'},
        {id:'3',name:'Product3',price:700,image:p3,status:'hot'},
        {id:'4',name:'Product4',price:900,image:p4,status:'hot'},
        {id:'5',name:'Product5',price:1499,image:p5,status:'new'},
        {id:'6',name:'Product6',price:1200,image:p6,status:'new'},
        {id:'7',name:'Product7',price:1100,image:p7,status:'hot'},
        {id:'8',name:'Product8',price:1999,image:p8,status:'new'},
	{id:'9',name:'Product8',price:1999,image:p8,status:'new'},
    ])
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
    
}

export default ProductsContextProvider;