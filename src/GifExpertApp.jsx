import React, { useState } from 'react';
import { GifGrid,AddCategory } from './component/';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const  onAddCategory = (category) => { 

        if(categories.includes(category)) return;

        setCategories([category]);    
    
    }

return (
    <>

    
    <h1>GifExpertApp</h1>
    

    <AddCategory 
    onNewCategory={onAddCategory}
    />


        {
        categories.map(category => 
        <GifGrid key={category} category={category}/>
        )
        }

    </>
);
}