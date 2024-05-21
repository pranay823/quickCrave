import React from 'react'
import Item from './Item'

const RestroItems = ({info}) => {
  
  return (
    <div className='mx-4'>
    {  info?.map((item)=>(
      <Item itemData={item.card.info} />
    ))}
    </div>
  )
}

export default RestroItems