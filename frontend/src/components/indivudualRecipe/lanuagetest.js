import  { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(
    'AIzaSyCWppe00EAyA3Xd7NHQTS2uoaDHcUmmFwU', 
    );
    const data=`The Google AI JavaScript SDK enables developers to use Google's state-of-the-art generative AI models (like Gemini) to build AI-powered features and applications. This SDK supports use cases like:

    Generate text from text-only input
    Generate text from text-and-images input (multimodal)
    Build multi-turn conversations (chat)
    (for Node.js) Embedding
    You can use this JavaScript SDK for applications built with Node.js or for web apps.
    
    For example, with just a few lines of code, you can access Gemini's multimodal capabilities to generate text from text-and-image input.`
  async function get()
  {
    try{
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
     const prompt = `The Google AI JavaScript SDK enables developers to use Google's convert it into telugu`

  
    const result = await model.generateContent(prompt);
    const response = await result.response;
   
     console.log(response.text())
     console.log('hello')
     }
     catch(e)
     {
     console.log(e.message)
     }
    
  }
  get();