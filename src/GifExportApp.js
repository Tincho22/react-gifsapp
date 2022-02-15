import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExportApp = ()=>{
    
    const [categories, setCategories] = useState([]); 

    return (
        <>
            
            <h2>GifExportApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map((category) => <GifGrid key={category} category={category}/>)
                }
            </ol>
            
        </>
    );

}


export default GifExportApp;