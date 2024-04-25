import React from 'react';
import './style.css'

const images = [
  'pwc.svg',
  'genpact.svg',
  'ibm.svg',
  'wipro.svg',
  'accenture.svg',
  'allianz.svg',
  'iquanti.svg',
  'infosys.svg',
  'gyansys.svg',
  'hcl.svg',
  'landt.svg',
];

function HiringPartner() {
  return (
    <div>
      <h2 className='extraspace heading'>Our Hiring Partners :</h2>
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
