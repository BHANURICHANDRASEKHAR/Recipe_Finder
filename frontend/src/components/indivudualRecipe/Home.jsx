import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Items from './Items';
import './home.css'
export default function Home() {
    const {name}=useParams();
const [itemdata,setitemdata]=useState([{
    "id": 1,
    "type": "biryani",
    "name": "Vegetable Biryani",
    "img":"https://cdn.cdnparenting.com/articles/2020/02/03114317/Methi-Tinda-Pulav-Recipe.jpg",
    "ingredients": [
      "2 cups basmati rice",
      "2 onions, thinly sliced",
      "2 tomatoes, chopped",
      "1 cup mixed vegetables (carrots, peas, beans)",
      "1/2 cup yogurt",
      "1/4 cup chopped cilantro",
      "1/4 cup chopped mint leaves",
      "2 green chilies, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric powder",
      "1/2 teaspoon red chili powder",
      "4 cups water",
      "Salt to taste",
      "2 tablespoons ghee or oil"
    ],
    "making_process": [
      "1. Wash and soak basmati rice in water for 30 minutes.",
      "2. In a large pan, heat ghee or oil. Add cumin seeds and let them splutter.",
      "3. Add sliced onions and sauté until golden brown.",
      "4. Add ginger-garlic paste and chopped green chilies. Sauté for a minute.",
      "5. Add chopped tomatoes and cook until they turn mushy.",
      "6. Add mixed vegetables, turmeric powder, red chili powder, and salt. Cook for 5 minutes.",
      "7. Add yogurt, garam masala, chopped cilantro, and mint leaves. Mix well.",
      "8. Drain the soaked rice and add it to the pan. Mix gently.",
      "9. Pour water into the pan. Cover and cook until rice is done and water is absorbed.",
      "10. Fluff the biryani gently with a fork. Serve hot.",
      "11. Enjoy your delicious Vegetable Biryani!"
    ],

    "calories": "350 calories per serving"
  },
])
  return (
    <div className='container-fluid  '>
       <Items itemdata={itemdata}/>
    </div>
  )
}
