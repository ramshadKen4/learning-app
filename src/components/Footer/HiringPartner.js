import React from 'react';
import './style.css'

const images = [
  'accenture.svg',
  'allianz.svg',
  'genpact.svg',
  'gyansys.svg',
  'hcl.svg',
  'ibm.svg',
  'infosys.svg',
  'iquanti.svg',
  'landt.svg',
  'pwc.svg',
  'wipro.svg'
];

function HiringPartner() {
  return (
    <div>
      <h2 className='heading'>Our hiring partners</h2>
      <div className='partner-container'>
        {images.map((imageName, index) => (
          <div className='partner-item' key={index}>
            <img src={`/icons/${imageName}`} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiringPartner;
