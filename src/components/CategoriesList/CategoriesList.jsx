import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../Category/Category'


const ListCategory = ({ item }) => {
    
    const [category, setCategory] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://localhost: 3000/category/:id/1/`).then((res) => 
                    setCategory(res.data)
          )
        }, 1000);
    }, [])

    return (
        <div className='container'>
            <h2>Categorias</h2>
            <div className='containerProducts'>
                {
                    category.map((e)=>{
                        return(

                            <Link key={e.id} className="categorias" to={`/category/${e.id}`}>
                            <Category categoria={e} key={e.id}/></Link >
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListCategory
