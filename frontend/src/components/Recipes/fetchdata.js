import axios from 'axios'

export default async function fetchdata(setactualdata,setfulldata,setloader)
{
    setloader(true)
    const data=await axios.get('https://recipe-finder-1.onrender.com/v1/get');
    const result=await data.data.data
    setloader(false)
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
export  async function gettypedata(setactualdata,type,setloader)
{
    setloader(true)
    const data=await axios.get(`https://recipe-finder-1.onrender.com/v1/get/${type}`);
    const result=await data.data.data
    setloader(false)
    setactualdata(result)
    
}
export function searchdata(setsearchdata,fulldata,searchvalue)
{
    const filtereddata=fulldata.filter(item=>item.name.toLowerCase().includes(searchvalue.toLowerCase()))
    setsearchdata(filtereddata)
}