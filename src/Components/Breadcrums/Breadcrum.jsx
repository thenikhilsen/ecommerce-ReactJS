import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  return (
    <div className='breadcrum'>
       HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {props.product.category} <img src={arrow_icon} alt=''/> {props.product.name}
    </div>
  )
}

export default Breadcrum
