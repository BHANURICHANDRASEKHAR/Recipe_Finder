const data= [
    {
      id: 1,
      name: 'Chicken Tikka Masala',
      country: 'India',
      ingredients: [
        'Chicken',
        'Yogurt',
        'Tomato sauce',
        'Spices (garam masala, coriander, cumin)',
        'Cream',
        'Garlic',
        'Ginger'
      ],
      making_process: [
        'Marinate chicken in yogurt and spices.',
        'Grill or bake until cooked through.',
        'Simmer in a tomato-based sauce with cream, garlic, and ginger.'
      ],
      calories: 350,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.85IXX7yURAfwImU0m6omDQHaLH?w=133&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 2,
      name: 'Sushi',
      country: 'Japan',
      ingredients: [
        'Raw fish (salmon, tuna)',
        'Rice',
        'Nori (seaweed)',
        'Soy sauce',
        'Wasabi',
        'Pickled ginger'
      ],
      making_process: [
        'Slice raw fish and prepare sushi rice.',
        'Wrap in nori and slice into bite-sized pieces.',
        'Serve with soy sauce, wasabi, and pickled ginger.'
      ],
      calories: 300,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.zoTWoTGFWz4T77wp9Ff-eAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 3,
      name: 'Spaghetti Bolognese',
      country: 'Italy',
      ingredients: [
        'Ground beef',
        'Tomatoes',
        'Onions',
        'Garlic',
        'Tomato paste',
        'Spaghetti',
        'Olive oil'
      ],
      making_process: [
        'Sauté onions and garlic in olive oil.',
        'Brown ground beef and add tomatoes and tomato paste.',
        'Simmer until the sauce thickens.',
        'Serve over cooked spaghetti.'
      ],
      calories: 400,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.5ytc9PIjzGPY1pBGbFxmdwHaHa?w=222&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 4,
      name: 'Beef Stroganoff',
      country: 'Russia',
      ingredients: [
        'Beef strips',
        'Mushrooms',
        'Onions',
        'Sour cream',
        'Mustard',
        'Egg noodles',
        'Butter'
      ],
      making_process: [
        'Sauté beef strips and mushrooms in butter.',
        'Add onions and cook until caramelized.',
        'Stir in sour cream and mustard.',
        'Serve over cooked egg noodles.'
      ],
      calories: 380,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.rBxSVEgT5zpwOvkbvS4GWgHaHa?rs=1&pid=ImgDetMain'
    },
    {
      id: 5,
      name: 'Barbecue Ribs',
      country: 'United States',
      ingredients: [
        'Pork ribs',
        'Barbecue sauce',
        'Dry rub (paprika, brown sugar, garlic powder)',
        'Apple cider vinegar'
      ],
      making_process: [
        'Rub pork ribs with dry rub and let marinate.',
        'Slow-cook or grill until tender.',
        'Baste with barbecue sauce and apple cider vinegar.'
      ],
      calories: 450,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.7xpon_zhRi97l_TudmqkuQHaFj?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 6,
      name: 'Paella',
      country: 'Spain',
      ingredients: [
        'Chicken thighs',
        'Chorizo sausage',
        'Shrimp',
        'Rice',
        'Saffron',
        'Bell peppers',
        'Tomatoes',
        'Chicken broth'
      ],
      making_process: [
        'Sear chicken thighs and chorizo in a paella pan.',
        'Add rice, saffron, bell peppers, and tomatoes.',
        'Pour in chicken broth and let simmer until rice is cooked.',
        'Arrange shrimp on top and cook until they turn pink.'
      ],
      calories: 380,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.3eoKZqvLx18t6uzzflsf6QHaJy?rs=1&pid=ImgDetMain'
    },
    {
      id: 7,
      name: 'Butter Chicken',
      country: 'India',
      ingredients: [
        'Chicken thighs',
        'Tomato puree',
        'Butter',
        'Cream',
        'Ginger-garlic paste',
        'Spices (garam masala, cumin, coriander)',
        'Kasuri methi (dried fenugreek leaves)'
      ],
      making_process: [
        'Marinate chicken in yogurt and spices.',
        'Cook in a tomato-based sauce with butter and cream.',
        'Add kasuri methi for flavor before serving.'
      ],
      calories: 400,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.hcWbNbOAci5jAXs1OPrs1AHaLH?w=121&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 8,
      name: 'Beef Bulgogi',
      country: 'South Korea',
      ingredients: [
        'Beef sirloin',
        'Soy sauce',
        'Sesame oil',
        'Garlic',
        'Brown sugar',
        'Pear (or apple) puree',
        'Green onions'
      ],
      making_process: [
        'Slice beef thinly and marinate in soy sauce, sesame oil, and pear puree.',
        'Sauté with garlic until cooked through.',
        'Garnish with green onions before serving.'
      ],
      calories: 360,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.cn1SRFhggq0zFM3i2joAhAHaJ4?w=161&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 9,
      name: 'Chicken Adobo',
      country: 'Philippines',
      ingredients: [
        'Chicken thighs',
        'Soy sauce',
        'Vinegar',
        'Garlic',
        'Bay leaves',
        'Black peppercorns',
        'Brown sugar'
      ],
      making_process: [
        'Marinate chicken in soy sauce, vinegar, garlic, and spices.',
        'Simmer until chicken is tender and the sauce thickens.',
        'Serve with rice.'
      ],
      calories: 320,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.rV-XX7a3koRNrIUxVCarIQHaE6?w=302&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 10,
      name: 'Seafood Paella',
      country: 'Spain',
      ingredients: [
        'Mussels',
        'Clams',
        'Shrimp',
        'Calamari',
        'Rice',
        'Saffron',
        'Bell peppers',
        'Tomatoes',
        'Chicken broth'
      ],
      making_process: [
        'Sear seafood in a paella pan.',
        'Add rice, saffron, bell peppers, and tomatoes.',
        'Pour in chicken broth and let simmer until rice is cooked.',
        'Garnish with fresh parsley before serving.'
      ],
      calories: 400,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/R.8ea8630b3ec4982f522b975564acdcf7?rik=byVIgw61adqJZw&riu=http%3a%2f%2fwww.tasteforcooking.com%2fwp-content%2fuploads%2f2016%2f01%2fThinkstockPhotos-84465093.jpg&ehk=Mbm7s89te3VX3fC5sG2IM7%2fnfMl6ns%2ftarfRoTW7PUU%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 11,
      name: 'Salmon Teriyaki',
      country: 'Japan',
      ingredients: [
        'Salmon fillets',
        'Soy sauce',
        'Mirin',
        'Brown sugar',
        'Garlic',
        'Ginger',
        'Sesame seeds',
        'Green onions'
      ],
      making_process: [
        'Marinate salmon in soy sauce, mirin, brown sugar, garlic, and ginger.',
        'Grill or pan-sear until salmon is cooked through.',
        'Drizzle with teriyaki sauce and garnish with sesame seeds and green onions.'
      ],
      calories: 350,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.iJMIq2b0LU5TP4wahUhmQwHaLH?w=129&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 12,
      name: 'Shrimp Scampi',
      country: 'Italy',
      ingredients: [
        'Shrimp',
        'Linguine pasta',
        'Garlic',
        'White wine',
        'Lemon juice',
        'Butter',
        'Parsley',
        'Red pepper flakes'
      ],
      making_process: [
        'Sauté shrimp and garlic in butter until shrimp are pink.',
        'Deglaze with white wine and add lemon juice.',
        'Toss with cooked linguine pasta and garnish with parsley and red pepper flakes.'
      ],
      calories: 320,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.V2lRVx3VZOlJVf0-GTkAaQHaLH?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 13,
      name: 'Chicken Korma',
      country: 'India',
      ingredients: [
        'Chicken thighs',
        'Yogurt',
        'Cashews',
        'Onions',
        'Ginger-garlic paste',
        'Spices (cardamom, cinnamon, cloves)',
        'Cream',
        'Saffron'
      ],
      making_process: [
        'Marinate chicken in yogurt and spices.',
        'Cook in a sauce made with cashews, onions, and cream.',
        'Infuse with saffron before serving.'
      ],
      calories: 380,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.B_aFcijLH1ZOQfsmTbvUpgHaLH?w=130&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 14,
      name: 'Beef Wellington',
      country: 'United Kingdom',
      ingredients: [
        'Beef tenderloin',
        'Mushrooms',
        'Puff pastry',
        'Prosciutto',
        'Dijon mustard',
        'Egg wash'
      ],
      making_process: [
        'Sear beef tenderloin and coat with Dijon mustard.',
        'Make a mushroom duxelles and wrap beef with prosciutto.',
        'Encase in puff pastry and bake until golden brown.'
      ],
      calories: 420,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.iehJEMj83jSn-AZEKX0nPQHaHa?w=222&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 15,
      name: 'Thai Green Curry with Prawns',
      country: 'Thailand',
      ingredients: [
        'Prawns',
        'Coconut milk',
        'Green curry paste',
        'Bamboo shoots',
        'Bell peppers',
        'Thai basil leaves',
        'Fish sauce'
      ],
      making_process: [
        'Simmer prawns, bamboo shoots, and bell peppers in coconut milk.',
        'Stir in green curry paste and fish sauce.',
        'Garnish with Thai basil leaves before serving.'
      ],
      calories: 300,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.GDbuMA4OJ6wb--qo_tQHHQHaJQ?w=174&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 16,
      name: 'Jerk Chicken',
      country: 'Jamaica',
      ingredients: [
        'Chicken thighs',
        'Scallions',
        'Thyme',
        'Allspice',
        'Garlic',
        'Ginger',
        'Scotch bonnet pepper',
        'Soy sauce'
      ],
      making_process: [
        'Blend scallions, thyme, allspice, garlic, ginger, and Scotch bonnet pepper.',
        'Marinate chicken in the jerk seasoning and soy sauce.',
        'Grill or roast until chicken is fully cooked.'
      ],
      calories: 370,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.bAGppZh8Tp-tO-DWhRmy2gHaE7?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 17,
      name: 'Lamb Biryani',
      country: 'India',
      ingredients: [
        'Lamb chunks',
        'Basmati rice',
        'Onions',
        'Yogurt',
        'Tomatoes',
        'Biryani spices (cardamom, cinnamon, cloves)',
        'Saffron',
        'Mint leaves'
      ],
      making_process: [
        'Marinate lamb in yogurt and biryani spices.',
        'Layer lamb, partially cooked rice, saffron, and mint leaves.',
        'Cook until the rice is fully cooked and lamb is tender.'
      ],
      calories: 400,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.tu5m-eu70-lWhzZSCt2FFAHaJQ?w=171&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 18,
      name: 'Crab Rangoon',
      country: 'China',
      ingredients: [
        'Crab meat',
        'Cream cheese',
        'Green onions',
        'Wonton wrappers',
        'Soy sauce',
        'Sweet chili sauce'
      ],
      making_process: [
        'Mix crab meat, cream cheese, and chopped green onions.',
        'Place a spoonful of the mixture in the center of wonton wrappers.',
        'Fold and seal, then deep fry until golden brown.',
        'Serve with soy sauce and sweet chili sauce.'
      ],
      calories: 220,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.NI8WiDp1X3n0Z_D-90zADwHaJQ?w=162&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 19,
      name: 'Moroccan Lamb Tagine',
      country: 'Morocco',
      ingredients: [
        'Lamb shoulder',
        'Onions',
        'Garlic',
        'Apricots',
        'Almonds',
        'Cumin',
        'Coriander',
        'Cinnamon'
      ],
      making_process: [
        'Sear lamb in a tagine or heavy-bottomed pot.',
        'Add onions, garlic, spices, apricots, and almonds.',
        'Slow-cook until the lamb is tender and flavors meld.'
      ],
      calories: 450,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.1r3Fp_oG_8bFP8JBPv_XoQHaLF?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 20,
      name: 'Shrimp and Grits',
      country: 'United States',
      ingredients: [
        'Shrimp',
        'Grits',
        'Andouille sausage',
        'Bell peppers',
        'Onions',
        'Chicken broth',
        'Cheddar cheese'
      ],
      making_process: [
        'Sauté shrimp, Andouille sausage, bell peppers, and onions.',
        'Prepare grits separately.',
        'Serve the sautéed mixture over a bed of cheesy grits.'
      ],
      calories: 380,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.DrNqoR0dd1Zu9XQ-uwt62AHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 21,
      name: 'Bistecca alla Fiorentina',
      country: 'Italy',
      ingredients: [
        'T-bone steak',
        'Olive oil',
        'Rosemary',
        'Garlic',
        'Salt',
        'Black pepper'
      ],
      making_process: [
        'Season T-bone steak with olive oil, rosemary, garlic, salt, and black pepper.',
        'Grill to desired doneness, ensuring a crust on the outside.',
        'Rest and slice before serving.'
      ],
      calories: 480,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.o43D8oTzPmzxhFpLtCARbwHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 22,
      name: 'Cajun Jambalaya',
      country: 'United States',
      ingredients: [
        'Andouille sausage',
        'Chicken thighs',
        'Shrimp',
        'Rice',
        'Tomatoes',
        'Bell peppers',
        'Onions',
        'Cajun seasoning'
      ],
      making_process: [
        'Sauté Andouille sausage, chicken thighs, shrimp, and non-vegetables.',
        'Add rice, tomatoes, and Cajun seasoning.',
        'Simmer until the rice is cooked and flavors meld.'
      ],
      calories: 420,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.4dJjH2XwORxzfw72uT1YzQHaK-?w=129&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 23,
      name: 'Tandoori Salmon',
      country: 'India',
      ingredients: [
        'Salmon fillets',
        'Yogurt',
        'Tandoori spices (cumin, coriander, paprika)',
        'Lemon juice',
        'Garlic',
        'Ginger',
        'Cilantro'
      ],
      making_process: [
        'Marinate salmon in a mixture of yogurt, Tandoori spices, lemon juice, garlic, and ginger.',
        'Grill or bake until salmon is cooked through.',
        'Garnish with chopped cilantro before serving.'
      ],
      calories: 360,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.ihnu9e1369KfSZ1X79rUygHaHa?w=140&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 24,
      name: 'Chicken Satay',
      country: 'Indonesia',
      ingredients: [
        'Chicken skewers',
        'Peanut sauce',
        'Soy sauce',
        'Lime juice',
        'Garlic',
        'Turmeric',
        'Brown sugar'
      ],
      making_process: [
        'Marinate chicken skewers in a mixture of soy sauce, lime juice, garlic, turmeric, and brown sugar.',
        'Grill or pan-sear until chicken is cooked.',
        'Serve with peanut sauce for dipping.'
      ],
      calories: 300,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.fUWhlqPnaHuQIOTz3XocrAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 25,
      name: 'Korean BBQ Ribs',
      country: 'South Korea',
      ingredients: [
        'Beef short ribs',
        'Soy sauce',
        'Mirin',
        'Garlic',
        'Sesame oil',
        'Brown sugar',
        'Green onions'
      ],
      making_process: [
        'Marinate beef short ribs in a mixture of soy sauce, mirin, garlic, sesame oil, and brown sugar.',
        'Grill until ribs are caramelized and cooked to perfection.',
        'Garnish with chopped green onions before serving.'
      ],
      calories: 440,
      type: 'non-veg',
      img: 'https://th.bing.com/th/id/OIP.YgxHLiFB_ETcROaGpKaeGwHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    }
  ]
    data.forEach((link)=>{
        link.type='non-veg',
        link.img=''
    })
    console.log(data)