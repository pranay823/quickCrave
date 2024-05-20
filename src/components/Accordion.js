import React, { useState } from 'react'
import RestroItems from './RestroItems'

const Accordion = ({title , data}) => {

   const itemCards = data.card.card.itemCards
   console.log(itemCards)

   const [show,setshow] = useState(false)

  return (
    <div>
         <p onClick={()=>setshow(!show)} className='px-4 py-2 bg-main_color m-2 flex justify-between rounded-full '>{title} <p >🔽</p></p>
         {show &&
            <RestroItems info={itemCards} />
         } 
    </div>
  )
}

export default Accordion