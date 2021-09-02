import { useEffect } from 'react'
import '../ItemList/itemList.css'
import { Item } from '../Item/Item'


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

