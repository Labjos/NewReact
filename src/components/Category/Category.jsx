import React, {useEffect, useState}from 'react'
import Item from '../Item/Item';

const ListCategory = ({ item }) => {

    const categoryId = item.params.id
    function capitalize(str) {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    } 
    const capCategoryId = capitalize(categoryId);
    
    const [category, setCategory] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://swapi.dev/api/people/:id/1/`)
                .then((response) => {
                    console.log(response)
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setCategory(data)
                })
        }, 1000);
    }, [categoryId])

    return (
        <div className='container'>
            <h2>{capCategoryId}</h2>
            <div className='containerProducts'>
                {
                    category.map((e)=>{
                        return(
                            <div>

                                <Item key={e.id} product={e}/>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListCategory
