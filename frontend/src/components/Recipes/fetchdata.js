import axios from 'axios'

export default async function fetchdata(setactualdata,setfulldata)
{
    const data=await axios.get('http://localhost:5000/v1/get');
    const result=await data.data.data
    setfulldata(result)
    setactualdata(result)
    
}
export function  filtereddata(fulldata,setactualdata,targetvalue)
{
    if(targetvalue=='default')
    {

        setactualdata(fulldata)
    }
    else{
        const filtereddata=fulldata.filter(item=>item.type==targetvalue)
    setactualdata(filtereddata)
    }
}
export  async function gettypedata(setactualdata,type)
{
    console.log('hello',type)
    const data=await axios.get(`http://localhost:5000/v1/get/${type}`);
    const result=await data.data.data
    console.log(result)
    setactualdata(result)
    
}
export function searchdata(setsearchdata,fulldata,searchvalue)
{
    const filtereddata=fulldata.filter(item=>item.name.toLowerCase().includes(searchvalue.toLowerCase()))
    setsearchdata(filtereddata)
}