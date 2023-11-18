import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
    <h1>NEW COLLECTIONS</h1>
    <hr/>
    <div className='collections'>
    {new_collections.map((e,i)=>{
        return <Item key={i} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price}/>
    })}
    </div>      
    </div>
  )
}

export default NewCollections
