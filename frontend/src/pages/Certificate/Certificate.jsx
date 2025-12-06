import React from 'react'
import certificate from '../../assets/Certificate.png'
import Cards from '../../componenets/Cards/Cards'
const Certificate = () => {
  return (
    <div>
      <div className='cards' >
      <Cards heading="Generate Bonafide Certificate" value="" photo={certificate} />
      <Cards heading="Generate Leaving Certificate" value="" photo={certificate} />
      <Cards heading="Generate Character Certificate" value="" photo={certificate} />
      
      </div>
    </div>
  )
}

export default Certificate;
