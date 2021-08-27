import { useEffect } from 'react'
import { Item } from '../Item/Item'
import '../ItemList/itemList.css'




export const ItemList = ({item}) => {
  useEffect(() => {
    console.log(item)
  }, [item])

  return (
  
    <div className="card">
            {item.map(item => (
            <Item  key={item.id} item={item} />
          ))}

    </div>
)
}

