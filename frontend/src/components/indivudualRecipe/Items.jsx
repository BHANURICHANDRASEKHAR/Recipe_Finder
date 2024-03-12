import React, { useState } from 'react';
import { data, chagelaunge } from './lanugaes';
import { Cascader } from 'antd';

export default function Items({ itemdata }) {
  const [languageData, setLanguageData] = useState({data1:itemdata[0].making_process,data2: itemdata[0].ingredients});
  console.log(languageData);

  return (
    <div>
      {Object.keys(itemdata).map((key, index) => {
        const data = itemdata[key];
        return (
          <div className='container text-white mt-5' key={index}>
            <div className='row'>
              <Language setLanguageData={setLanguageData} languageData={languageData}/>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-6'>
                <div className='card'>
                  <img className='card-img-top' src={data.img} alt='img not found' />
                </div>
              </div>
              <div className='col-sm-6'>
              <h4 className='lead'>Making Process</h4>
              {languageData.data1.map((items, innerIndex) => (
                <p key={innerIndex}>{items}</p>
              ))}
            </div>
            <div className='col-sm-6'>
              <h4 className='lead'>Ingredients</h4>
              {languageData.data2.map((items, innerIndex) => (
                <span key={innerIndex}>{items}</span>
              ))}
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const Language = ({languageData, setLanguageData}) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const onChange = (value) => {
    chagelaunge(languageData, setLanguageData);
  };

  return (
    <div className='d-flex justify-content-end bg-transparent'>
      <span className='mt-1'>Change Language</span>&ensp;
      <Cascader options={data} onChange={onChange} defaultValue={['English']} />
    </div>
  );
};
