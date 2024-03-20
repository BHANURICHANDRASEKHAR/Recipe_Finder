import React, {  useEffect, useState } from 'react';
import { data, chagelaunge } from './lanugaes';
import { Cascader } from 'antd';
import { MdOutlineAddCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Review from './Review';
import RelatedProducts from './RelatedProducts';
import Images from './Images';
import Loader from '../../Loader';
export default function Items({ itemdata,type }) {
  const [languageData, setLanguageData] = useState({data1:itemdata[0].making_process,data2: itemdata[0].ingredients});

  useEffect(() =>{
   
 setLanguageData({data1:itemdata[0].making_process,data2: itemdata[0].ingredients})
  },[itemdata[0]._id])
  return (
   <div className='container-fluid'>
   <div>
   {Object.keys(itemdata).map((key, index) => {
     const data = itemdata[key];
     return (
       <div className='container text-white mt-5' key={index+index}>
      {/* 
    <div className='row'>
           <Language setLanguageData={setLanguageData} languageData={languageData}/>
         </div>
        */}   
         <Images data={data} languageData={languageData}/>
         <div className='row'>    
         <div className='col-sm-6 mt-3'>
         <h4 className='lead item-name d-block w-100'><TfiMenuAlt/> Ingredients</h4><br></br>
         {languageData.data2.map((items, innerIndex) => (
           <p key={innerIndex} className='mt-4'><MdOutlineAddCircle className='text-success icons mr-4'/>{items} ,</p>
         ))}
       </div>
       <div className='col-sm-6 mt-3'>
       <RelatedProducts type={type}/>
       </div>
       </div>
       </div>
     );
   })}

 </div>
 <div className='container text-white mt-5'>

 <Review itemsdata={itemdata}/>
 </div>
   </div>
  ); 
}

const Language = ({languageData, setLanguageData}) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
const [loader,setloader]=useState(false)
  const onChange = (value) => {
    chagelaunge(languageData, setLanguageData,currentLanguage,setCurrentLanguage,value[0],setloader);
  };

  return (
    <div className='d-flex justify-content-end bg-transparent'>
    {
      loader&&<Loader/>
    }
      <span className='mt-1'>Change Language</span>&ensp;
      <Cascader options={data} onChange={onChange} defaultValue={['English']} />
    </div>
  );
};


