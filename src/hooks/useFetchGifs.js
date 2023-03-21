
import { useState, useEffect } from 'react';
import { getGifs } from '../api/getGif';


export const useFetchGifs = (category) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newimages = await getGifs(category);
        setImages(newimages);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getImages();
    }, [category])
 


return{
    images: images,
    isLoading: isLoading
}
}


