import React from 'react';
import './Products.css';
import {Datas} from './Data'


const Product = () => {
  return (
    <div className='Product_Container'>
        <div className='Product_Wrapper'>
          {Datas?.map((item)=>(
              <div className='Prod_Card'>
              <img src={item.Avatar} className='Img'/>
              <h4 className='ProductName'>{item.name}</h4>
              <p className='Desc_Contain'>{item.desc}</p>
              <div className='Done_Prod'>
                  <p>${item.price}</p>
                  <button>add</button>
              </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Product