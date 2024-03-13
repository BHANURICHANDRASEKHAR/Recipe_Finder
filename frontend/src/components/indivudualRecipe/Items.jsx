import React, { useEffect, useState } from 'react';
import { data, chagelaunge } from './lanugaes';
import { Cascader } from 'antd';
import { Link } from 'react-router-dom';
import { MdOutlineAddCircle } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { PiBowlFoodLight } from "react-icons/pi";
import Chartmodal from './ChartModal';
import {gettypedata} from '../Recipes/fetchdata'
import { SiSimilarweb } from "react-icons/si";
export default function Items({ itemdata,type }) {
  const [languageData, setLanguageData] = useState({data1:itemdata[0].making_process,data2: itemdata[0].ingredients});
  

  return (
    <div>
      {Object.keys(itemdata).map((key, index) => {
        const data = itemdata[key];
        console.log(data)
        return (
          <div className='container text-white mt-5' key={index}>
            <div className='row'>
              <Language setLanguageData={setLanguageData} languageData={languageData}/>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-6'>
                <div className='card mt-2'>
                  <img className='card-img-top recipe-img' src={data.img} alt='img not found' />
                </div>
              </div>
              <div className='col-sm-6 mt-3 '>
              <h4 className='lead item-name d-block w-90'><FaDirections/>  Directions to Prepare </h4>

              {languageData.data1.map((items, innerIndex) => (
                <p key={innerIndex} className='mt-4 bg-transparent'><MdOutlineAddCircle className='text-success icons'/>{items}</p>
              ))}
            <Icons calories={data.calories}/>
            </div>    
            </div>
            <div className='row'>    
            <div className='col-sm-6 mt-3'>
            <h4 className='lead item-name d-block w-100'><TfiMenuAlt/> Ingredients</h4><br></br>
            {languageData.data2.map((items, innerIndex) => (
              <p key={innerIndex} className='mt-4'><MdOutlineAddCircle className='text-success icons mr-4'/>{items} ,</p>
            ))}
          </div>
          <div className='col-sm-6 mt-3'>
          <Relatedproducts type={type}/>
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
    chagelaunge(languageData, setLanguageData,currentLanguage,setCurrentLanguage,value[0]);
  };

  return (
    <div className='d-flex justify-content-end bg-transparent'>
      <span className='mt-1'>Change Language</span>&ensp;
      <Cascader options={data} onChange={onChange} defaultValue={['English']} />
    </div>
  );
};
const Icons=()=>{
  return(
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-4'>
    <BsFillHeartPulseFill className=' icon1'/>
    <h4 className='mt-2'>{data.calories || '250'}</h4>
    </div>
    <div className='col-4 text-center'>
    <PiBowlFoodLight className='icon1 text-white'/>
    <h4 className='mt-2 '>Serving</h4>
    </div>
    <div className='col-4 text-center'>
    <Chartmodal/>
    </div>
    </div>
    </div>
  )
}

const Relatedproducts=({type})=>{
  const [data,setdata]=useState([])
  useEffect(()=>{
    gettypedata(setdata,type)
  },[type])

  return(
    <React.Fragment>
    <h4 className='lead item-name d-block w-100'><SiSimilarweb/> Related Items </h4><br></br>
   <div className='card-data1'>
   {
    data.length>0&&data.slice(0,5).map((links,index)=>{
      return(
        <Link to={`/recipe/${encodeURIComponent(links._id)}-${encodeURIComponent(links.type)}`}  key={index}>
 
        <div className='card-data-items2 mt-3'>
        
        <div className='card-img2'>
        <img src={links.img} />
        </div>
        <div className='card-title2'>
        <h5 className='text-white text-center'>{links.name}</h5>
        </div>
     
        </div>      </Link>
      )
    })
  }
   </div>
    </React.Fragment>
  )
}