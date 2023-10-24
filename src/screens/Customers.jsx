import React from 'react'
import './Customers.css'
import Slider from '../components/Slider'

function Customers() {
  return (
    <section id='Customers'>
      <div style={{
        width: 'auto',
        height: '100vh',
        display:'flex',
        justifyContent:'center',
        color:'black',
        marginTop:'10px',
        
        
      }}>
        <div>
          <h1 style={{ color: 'black', fontWeight: 'bolder', fontFamily: 'inherit' }}>Our Customers</h1>
            <div className='' style={{width:'800px',height:'100px'}}>
              <Slider/>
              <Slider/>
              <Slider/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Customers
