import axios from 'axios';

export const data = [
  { id: 'en', name: 'English', label: 'English', value: 'en' },
  { id: 'hi', name: 'Hindi', label: 'Hindi', value: 'hi' },
  { id: 'te', name: 'Telugu', label: 'Telugu', value: 'te' },
  { id: 'ta', name: 'Tamil', label: 'Tamil', value: 'ta' },
  { id: 'ml', name: 'Malayalam', label: 'Malayalam', value: 'ml' }
];


export async function chagelaunge(languageData, setLanguageData,currentLanguage,setCurrentLanguage,target_language,setloader) {
 setloader(true)
  const url = 'https://text-translator2.p.rapidapi.com/translate';
  let list=[languageData.data1,languageData.data2];
  var l1=[];
  try {
    const translations = await Promise.all(
      list.map(async (ele, index) => {
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '0480c11929msh80c307a53902b53p192c60jsn3b1ca5068d75',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
          },
          body: new URLSearchParams({
            source_language: currentLanguage,
            target_language: target_language,
            text: ele
          })
        };

        const response = await fetch(url, options);
        const result = await response.text();

        // Log the response and result for debugging
    
        const data = await JSON.parse(result);
        const textdata=data.data.translatedText
        var list=textdata.split(',')
        l1.push(list);
     
        
      })
    );
    setloader(false)
    setLanguageData({"data2":l1[0] ,"data1":l1[1]})
   setCurrentLanguage(target_language)
    
  } catch (error) {
    setloader(false)
    console.error(error.message);
  }
}


export  async function fetchdatafromdatabase(setdata,id)
{
 try{
  const result=await axios.get(`http://localhost:5000/v1/getId/${id}`);
  
  const data=await result.data.data;
    
    setdata(data)
 }
 catch (error) {console.log(error.message);}


}
