const data=[
    {
      id: 1,
      name: 'Paneer Tikka',
      country: 'India',
      ingredients: [
        'Paneer (Indian cottage cheese)',
        'Yogurt',
        'Ginger-garlic paste',
        'Spices (cumin, coriander, garam masala)',
        'Lemon juice',
        'Capsicum and onion chunks'
      ],
      making_process: [
        'Marinate paneer cubes in yogurt, ginger-garlic paste, and spices.',
        'Thread paneer, capsicum, and onion onto skewers.',
        'Grill until paneer is golden brown and veggies are tender.',
        'Sprinkle lemon juice and serve hot.'
      ],
      calories: 250,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.jzAnh3Z4vl65g7oSWRqtPAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 2,
      name: 'Caprese Salad',
      country: 'Italy',
      ingredients: [
        'Tomatoes',
        'Fresh mozzarella cheese',
        'Basil leaves',
        'Extra virgin olive oil',
        'Balsamic vinegar',
        'Salt and pepper'
      ],
      making_process: [
        'Slice tomatoes and mozzarella cheese.',
        'Arrange them alternately on a plate.',
        'Sprinkle with fresh basil leaves.',
        'Drizzle with olive oil and balsamic vinegar.',
        'Season with salt and pepper.'
      ],
      calories: 180,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.aSUe-E9FpjMQEV75pzlHjwHaLH?w=145&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 3,
      name: ' Sushi',
      country: 'Japan',
      ingredients: [
        'Sushi rice',
        'Nori (seaweed) sheets',
        'Avocado',
        'Cucumber',
        'Carrot',
        'Soy sauce',
        'Wasabi and pickled ginger for serving'
      ],
      making_process: [
        'Spread sushi rice over a nori sheet.',
        'Place thin slices of avocado, cucumber, and carrot on top.',
        'Roll tightly and cut into bite-sized pieces.',
        'Serve with soy sauce, wasabi, and pickled ginger.'
      ],
      calories: 220,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.RTYBAy4Q-MZaTbGHTO1ViwHaE6?w=301&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 4,
      name: 'Hummus',
      country: 'Middle East',
      ingredients: [
        'Chickpeas',
        'Tahini',
        'Garlic',
        'Lemon juice',
        'Olive oil',
        'Cumin',
        'Salt'
      ],
      making_process: [
        'Blend chickpeas, tahini, garlic, and lemon juice until smooth.',
        'Drizzle with olive oil and sprinkle with cumin and salt.',
        'Serve as a dip with pita bread or veggies.'
      ],
      calories: 150,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.ry5yX866z0YvdlavhJN8ZwHaLH?rs=1&pid=ImgDetMain'
    },
    {
      id: 5,
      name: 'Ratatouille',
      country: 'France',
      ingredients: [
        'Eggplant',
        'Zucchini',
        'Bell peppers',
        'Tomatoes',
        'Onions',
        'Garlic',
        'Herbs de Provence'
      ],
      making_process: [
        'Slice vegetables thinly.',
        'Layer them in a baking dish, alternating the veggies.',
        'Sprinkle with herbs de Provence and bake until tender.',
        'Serve as a side dish or over pasta.'
      ],
      calories: 180,
      type: 'veg',
      img: 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg'
    },
    {
      id: 6,
      name: 'Spinach and Feta Stuffed Peppers',
      country: 'Greece',
      ingredients: [
        'Bell peppers',
        'Spinach',
        'Feta cheese',
        'Quinoa',
        'Onion',
        'Garlic',
        'Olive oil',
        'Tomato sauce'
      ],
      making_process: [
        'Cook quinoa according to package instructions.',
        'Sauté spinach, onion, and garlic in olive oil until wilted.',
        'Mix quinoa, sautéed veggies, and crumbled feta.',
        'Stuff bell peppers and bake until peppers are tender.',
        'Serve with tomato sauce.'
      ],
      calories: 220,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.MGs7tidLvTcaQGktvE3SWQHaJ4?rs=1&pid=ImgDetMain'
    },
    {
      id: 7,
      name: 'Dal Makhani',
      country: 'India',
      ingredients: [
        'Black lentils',
        'Kidney beans',
        'Tomatoes',
        'Onion',
        'Ginger-garlic paste',
        'Cream',
        'Spices (cumin, coriander, garam masala)'
      ],
      making_process: [
        'Soak black lentils and kidney beans overnight.',
        'Pressure cook with tomatoes, onion, and spices.',
        'Simmer with cream until flavors meld.',
        'Serve hot with rice or naan.'
      ],
      calories: 300,
      type: 'veg',
      img: 'https://th.bing.com/th/id/R.d91c03e29c2b39626ffd3227ad97de18?rik=18nbH%2bHewI21Zw&riu=http%3a%2f%2fimages.media-allrecipes.com%2fuserphotos%2f960x960%2f3879374.jpg&ehk=LmttCMEIjM2ekO9%2fo9JMIlV%2bL%2fv9vdg0%2f8ehqoHwOuA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 8,
      name: ' Pad Thai',
      country: 'Thailand',
      ingredients: [
        'Rice noodles',
        'Tofu',
        'Bean sprouts',
        'Carrots',
        'Peanuts',
        'Lime',
        'Soy sauce',
        'Tamarind paste'
      ],
      making_process: [
        'Soak rice noodles in hot water until tender.',
        'Stir-fry tofu, bean sprouts, and carrots.',
        'Toss with cooked noodles, peanuts, and sauce.',
        'Squeeze lime before serving.'
      ],
      calories: 280,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.q8OCErWK2moyZlxut2ZMPwHaLH?rs=1&pid=ImgDetMain'
    },
    {
      id: 9,
      name: 'Mushroom Risotto',
      country: 'Italy',
      ingredients: [
        'Arborio rice',
        'Mushrooms',
        'Vegetable broth',
        'Onion',
        'White wine',
        'Parmesan cheese',
        'Butter'
      ],
      making_process: [
        'Sauté mushrooms and onions in butter.',
        'Add Arborio rice and cook until translucent.',
        'Deglaze with white wine and gradually add broth.',
        'Stir in Parmesan cheese until creamy.'
      ],
      calories: 260,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.fL1tLqHt6SZRMntz6IDWAAHaE8?rs=1&pid=ImgDetMain'
    },
    {
      id: 10,
      name: ' Bibimbap',
      country: 'South Korea',
      ingredients: [
        'Cooked rice',
        'Soy sauce',
        'Sesame oil',
        'Carrots',
        'Spinach',
        'Bean sprouts',
        'Fried egg',
        'Gochujang (Korean red pepper paste)'
      ],
      making_process: [
        'Arrange cooked rice in a bowl.',
        'Top with sautéed vegetables and a fried egg.',
        'Drizzle with soy sauce, sesame oil, and gochujang.',
        'Mix well before eating.'
      ],
      calories: 290,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.HM3h5MO7d0rzSMX8YJs00AHaLH?rs=1&pid=ImgDetMain'
    },
    {
      id: 11,
      name: ' Goulash',
      country: 'Hungary',
      ingredients: [
        'Potatoes',
        'Carrots',
        'Bell peppers',
        'Tomatoes',
        'Onions',
        'Paprika',
        'Vegetable broth'
      ],
      making_process: [
        'Sauté onions in oil until translucent.',
        'Add potatoes, carrots, and bell peppers.',
        'Stir in tomatoes and paprika.',
        'Simmer in vegetable broth until vegetables are tender.'
      ],
      calories: 230,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.MPUCZ4mlmiIBgjNmE7QV8gHaLH?rs=1&pid=ImgDetMain'
    },
    {
      id: 12,
      name: 'Chickpea Curry',
      country: 'India',
      ingredients: [
        'Chickpeas',
        'Tomatoes',
        'Onions',
        'Garlic',
        'Ginger',
        'Curry spices (turmeric, cumin, coriander)',
        'Coconut milk'
      ],
      making_process: [
        'Sauté onions, garlic, and ginger until fragrant.',
        'Add curry spices and cook until aromatic.',
        'Stir in chickpeas, tomatoes, and coconut milk.',
        'Simmer until the curry thickens.'
      ],
      calories: 280,
      type: 'veg',
      img: 'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/05/Chickpea-Curry-Recipe1.jpg'
    },
    {
      id: 13,
      name: ' Pho',
      country: 'Vietnam',
      ingredients: [
        'Rice noodles',
        'Vegetable broth',
        'Tofu',
        'Bean sprouts',
        'Basil leaves',
        'Lime',
        'Sriracha',
        'Hoisin sauce'
      ],
      making_process: [
        'Cook rice noodles according to package instructions.',
        'Simmer tofu and bean sprouts in vegetable broth.',
        'Serve noodles topped with broth, herbs, and condiments.'
      ],
      calories: 250,
      type: 'veg',
      img: 'https://th.bing.com/th/id/R.3aa52a0ca895531f175b25f7912ad717?rik=qjmdaNXcYneFVQ&riu=http%3a%2f%2fwww.deliciouseveryday.com%2fwp-content%2fuploads%2fVegan-Pho-recipe-photo-compressor.jpg&ehk=OS8qE3qCpdURPJkACyHzjFoT9%2fjdy4yhKPdzvy4f3iI%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 14,
      name: ' Moussaka',
      country: 'Greece',
      ingredients: [
        'Eggplant',
        'Potatoes',
        'Tomatoes',
        'Onions',
        'Feta cheese',
        'Bechamel sauce'
      ],
      making_process: [
        'Slice and roast eggplant and potatoes.',
        'Sauté onions and layer with roasted veggies and tomatoes.',
        'Top with feta cheese and bechamel sauce.',
        'Bake until golden brown.'
      ],
      calories: 290,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.Js-Mln0rRWM6c0mlyzqP1gHaKz?rs=1&pid=ImgDetMain'
    },
    {
      id: 15,
      name: ' Tamales',
      country: 'Mexico',
      ingredients: [
        'Corn masa',
        'Corn husks',
        'Black beans',
        'Cheese',
        'Salsa verde',
        'Cilantro',
        'Lime'
      ],
      making_process: [
        'Soak corn husks and spread masa on each.',
        'Add black beans, cheese, and salsa verde.',
        'Fold and steam until masa is cooked through.',
        'Serve with cilantro and lime.'
      ],
      calories: 260,
      type: 'veg',
      img: ''
    },
    {
      id: 16,
      name: ' Paella',
      country: 'Spain',
      ingredients: [
        'Bomba rice',
        'Vegetable broth',
        'Bell peppers',
        'Tomatoes',
        'Artichokes',
        'Green beans',
        'Saffron',
        'Paprika'
      ],
      making_process: [
        'Sauté bell peppers, tomatoes, and green beans.',
        'Add bomba rice, saffron, and paprika.',
        'Pour in vegetable broth and simmer until rice is cooked.',
        'Garnish with artichokes before serving.'
      ],
      calories: 270,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.5SxtW4WZqVNmqckcmEQxDQHaJN?rs=1&pid=ImgDetMain'
    },
    {
      id: 17,
      name: ' Borscht',
      country: 'Russia',
      ingredients: [
        'Beets',
        'Cabbage',
        'Carrots',
        'Potatoes',
        'Onions',
        'Garlic',
        'Dill',
        'Sour cream'
      ],
      making_process: [
        'Boil beets, cabbage, carrots, and potatoes.',
        'Sauté onions and garlic until fragrant.',
        'Combine sautéed ingredients with boiled veggies.',
        'Serve with a dollop of sour cream and garnish with dill.'
      ],
      calories: 240,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.zoT7iwEl3XDwHWZYHq-VSQHaLH?rs=1&pid=ImgDetMain'
    },
    {
      id: 18,
      name: ' Bibimbap',
      country: 'South Korea',
      ingredients: [
        'Cooked rice',
        'Soy sauce',
        'Sesame oil',
        'Carrots',
        'Spinach',
        'Bean sprouts',
        'Fried egg',
        'Gochujang (Korean red pepper paste)'
      ],
      making_process: [
        'Arrange cooked rice in a bowl.',
        'Top with sautéed vegetables and a fried egg.',
        'Drizzle with soy sauce, sesame oil, and gochujang.',
        'Mix well before eating.'
      ],
      calories: 290,
      type: 'veg',
      img: 'https://iheartumami.com/wp-content/uploads/2021/04/Keto-Korean-Bibimbap-Recipe--I-Heart-Umami-700x1050.jpg'
    },
    {
      id: 19,
      name: ' Gyoza',
      country: 'Japan',
      ingredients: [
        'Gyoza wrappers',
        'Cabbage',
        'Carrots',
        'Mushrooms',
        'Garlic',
        'Soy sauce',
        'Sesame oil'
      ],
      making_process: [
        'Mix finely chopped cabbage, carrots, and mushrooms.',
        'Add garlic, soy sauce, and sesame oil.',
        'Spoon mixture onto gyoza wrappers, seal, and pan-fry.',
        'Serve with soy dipping sauce.'
      ],
      calories: 220,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.fuoHpec5k4RIYeb-cfF4wgHaHa?rs=1&pid=ImgDetMain'
    },
    {
      id: 20,
      name: ' Tofu Stir-Fry',
      country: 'China',
      ingredients: [
        'Firm tofu',
        'Broccoli',
        'Bell peppers',
        'Carrots',
        'Soy sauce',
        'Ginger',
        'Garlic',
        'Sesame seeds'
      ],
      making_process: [
        'Press and cube tofu, then stir-fry until golden.',
        'Sauté broccoli, bell peppers, and carrots.',
        'Add soy sauce, ginger, and garlic.',
        'Combine tofu and veggies, sprinkle with sesame seeds.'
      ],
      calories: 260,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.4tpRcZn1MVHnEUVvOnPVRQHaLH?rs=1&pid=ImgDetMain'
    },
    {
      id: 21,
      name: ' Paella',
      country: 'Spain',
      ingredients: [
        'Bomba rice',
        'Bell peppers',
        'Tomatoes',
        'Artichokes',
        'Green beans',
        'Saffron',
        'Vegetable broth'
      ],
      making_process: [
        'Sauté bell peppers and tomatoes in olive oil.',
        'Add bomba rice, saffron, and vegetable broth.',
        'Stir in artichokes and green beans.',
        'Cook until rice is tender and a crust forms at the bottom.'
      ],
      calories: 270,
      type: 'veg',
      img: 'https://simple-veganista.com/wp-content/uploads/2016/01/best-vegetable-vegan-paella-recipe-7.jpg'
    },

  
    {
      id: 25,
      name: ' Lasagna',
      country: 'Italy',
      ingredients: [
        'Lasagna noodles',
        'Ricotta cheese',
        'Spinach',
        'Mushrooms',
        'Marinara sauce',
        'Mozzarella cheese',
        'Parmesan cheese'
      ],
      making_process: [
        'Cook lasagna noodles according to package instructions.',
        'Layer with ricotta, spinach, mushrooms, and marinara sauce.',
        'Top with mozzarella and Parmesan cheese.',
        'Bake until bubbly and golden.'
      ],
      calories: 300,
      type: 'veg',
      img: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/3/2013/08/4de7b585417a9e5a5f6d8dcec190405c0ff0219a.jpeg'
    },
    {
      id: 26,
      name: ' Enchiladas',
      country: 'Mexico',
      ingredients: [
        'Corn tortillas',
        'Black beans',
        'Corn',
        'Bell peppers',
        'Onions',
        'Enchilada sauce',
        'Cheese'
      ],
      making_process: [
        'Sauté bell peppers and onions until tender.',
        'Stir in black beans, corn, and enchilada sauce.',
        'Fill corn tortillas, roll, and place in a baking dish.',
        'Top with cheese and bake until cheese is melted and bubbly.'
      ],
      calories: 260,
      type: 'veg',
      img: 'https://www.wellplated.com/wp-content/uploads/2017/11/-Enchiladas-with-Sweet-Potato-or-Butternut-Squash.jpg'
    },
    {
      id: 27,
      name: ' Tom Yum Soup',
      country: 'Thailand',
      ingredients: [
        'Vegetable broth',
        'Lemongrass',
        'Galangal',
        'Kaffir lime leaves',
        'Mushrooms',
        'Tofu',
        'Cherry tomatoes',
        'Lime juice'
      ],
      making_process: [
        'Simmer lemongrass, galangal, and kaffir lime leaves in vegetable broth.',
        'Add mushrooms, tofu, and cherry tomatoes.',
        'Simmer until flavors meld, then add lime juice before serving.'
      ],
      calories: 150,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.CQOT7M5QvHvVNlKFu1x1EgHaKv?rs=1&pid=ImgDetMain'
    },
    {
      id: 28,
      name: ' Fajitas',
      country: 'Mexico',
      ingredients: [
        'Bell peppers',
        'Onions',
        'Zucchini',
        'Mushrooms',
        'Fajita seasoning',
        'Flour tortillas',
        'Guacamole'
      ],
      making_process: [
        'Sauté bell peppers, onions, zucchini, and mushrooms.',
        'Season with fajita seasoning.',
        'Serve in warm flour tortillas with guacamole.'
      ],
      calories: 230,
      type: 'veg',
      img: 'https://th.bing.com/th/id/OIP.giWFAhl_koq2pYWVNcBclgHaK9?rs=1&pid=ImgDetMain'
    },

    {
      id: 30,
      name: ' Stuffed Bell Peppers',
      country: 'Global',
      ingredients: [
        'Bell peppers',
        'Quinoa',
        'Black beans',
        'Corn',
        'Tomatoes',
        'Cheese',
        'Taco seasoning'
      ],
      making_process: [
        'Cook quinoa and mix with black beans, corn, tomatoes, and taco seasoning.',
        'Cut bell peppers in half and stuff with the quinoa mixture.',
        'Top with cheese and bake until peppers are tender.'
      ],
      calories: 280,
      type: 'veg',
      img: 'https://i0.wp.com/justwhatweeat.com/wp-content/uploads/2016/11/Stuffed-Bell-Peppers-Gluten-Free-Vegan--Healthy-3C.jpg?ssl=1'
    }
  ]
  
data.forEach((link)=>{
    link.type='veg',
    link.img=''
})
console.log(data)
