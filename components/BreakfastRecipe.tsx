import React, { useState } from 'react';

// TypeScript interface for the breakfast recipe
interface BreakfastRecipe {
  label: string;
  description: string;
}

const BreakfastGenerator = () => {
  // State for storing the text input from the user
  const [input, setInput] = useState('');

  // State for storing the generated breakfast recipe
  const [recipe, setRecipe] = useState<BreakfastRecipe | null>(null);

  // Event handler for the "Go!" button
  const handleGoButtonClick = () => {
    // Generate a random breakfast recipe
    const breakfastRecipes: BreakfastRecipe[] = [
      {
        label: 'Scrambled Eggs',
        description: 'Scramble eggs in a pan with butter and season with salt and pepper.',
      },
      {
        label: 'Omelette',
        description:
          'Whisk eggs in a bowl and cook in a pan with butter, filling with cheese and veggies of your choice.',
      },
      {
        label: 'Pancakes',
        description:
          'Mix flour, sugar, baking powder, salt, and milk in a bowl and cook in a pan with butter.',
      },
      {
        label: 'French Toast',
        description:
          'Dip bread in a mixture of eggs and milk and cook in a pan with butter until golden brown.',
      },
      {
        label: 'Yogurt and Granola',
        description:
          'Top plain yogurt with your favorite granola and add fruit and honey for sweetness.',
      },
      {
        label: "Monica's famous muffins",
        description: "Chandler: Hey, do you want to come over for breakfast? I made some of Monica's famous muffins. Ross: Mmm, those are the best! I love how she always adds that secret ingredient. Rachel: I know, right? They're so good. Joey: Can I have another one? Monica: Sure, Joey. Here you go. Enjoy!"
      },
      {
        label: "Yoshi's fruit salad",
        description: "Yoshi: Mmm, I love fruit salad for breakfast! It's so yummy and healthy. Mario: Yeah, you're right, Yoshi. And it's so easy to make too. Just mix some fruit in a bowl and you're good to go. Luigi: Hey, can I have some of that? Yoshi: Of course, Luigi. Here you go. Enjoy! Bowser: Hmph, fruit salad? That's for babies. I need something more filling for breakfast. Donkey Kong: Don't worry, Bowser. I have some bananas and coconuts for you."
      },
      {
        label: "Caribou porridge",
        description: "Rudolph: Hey, guys, I made some porridge for breakfast. It's really warm and filling. Dasher: Oh, that sounds great, Rudolph. I'm so cold from flying all night. Prancer: Yeah, me too. I could use some hot porridge to warm up. Dancer: Can I have some too, Rudolph? Rudolph: Of course, Dancer. Here you go. Enjoy!"
      },
      {
        label: "PB&J sandwich",
        description: "Mommy: Hey, honey, what do you want for breakfast? I can make you a PB&J sandwich if you want. Kid: Yay, I love PB&J sandwiches! Can you make it with lots of peanut butter and jelly please? Mommy: Sure, sweetie. Here you go. Enjoy your sandwich!"
      },
      {
        label: "ओमलेट",
        description: "माता: अरे, मैं तुम्हारे लिए ओमलेट बना सकती हूँ। चाहोगे? बेटा: हाँ, मैं बहुत ही ओमलेट खाना पसंद करता हूँ। माता: ठीक है, बेटा। यहाँ आपका ओ",
      },
      {
        label: "Smoothie bowl",
        description: "Siri: Hey, I have a suggestion for breakfast. How about making a smoothie bowl? You can blend some fruit and yogurt, and then top it with your favorite toppings. It's healthy, delicious, and easy to make. Give it a try!"
      },
      {
        label: "Fried eggs",
        description: "Uncaught TypeError: Cannot read property 'eggs' of undefined. at cookEggs (app.js:5) at app.js:12 at app.js:16 at app.js:20"
      },
      {
        label: "Cereal",
        description: "mov ax, 0x4b42 ; load the cereal into the AX register mov bx, 0x5448 ; load the milk into the BX register add ax, bx ; add the cereal and milk together mov cx, ax ; store the result in the CX register int 0x10 ; print the result to the screen"
      },
      {
        label: "Martian omelette",
        description: "Martian 1: Hey, let's make an omelette for breakfast. Martian 2: Good idea. We can use these Martian eggs and add some Martian cheese and veggies. Martian 1: Sounds delicious. Let's get cooking! Martian 2: Ok, first we need to whisk the eggs in a bowl..."
      },
      {
        label: "sremmus",
        description: "yob: yhW ,uoy evig dna gnihtemos kooL .siht si sremmus gnirebmuH .kooL ot evah uoy enoyna gnidnats dna slesruoY"
      },
      {
        label: "Joey's homemade waffles",
        description: "Rachel: Joey, these waffles are amazing! Did you make them yourself? Joey: Yeah, I did. I learned how to make waffles from my mom. They're her secret recipe. Ross: Wow, Joey. You're a waffle master. Can I have another one please? Joey: Sure, Ross. Here you go. Enjoy!"
      },
      {
        label: "Toad's breakfast burrito",
        description: "Toad: Hey, guys, I made some breakfast burritos for us. They're filled with eggs, bacon, cheese, and veggies. Mario: Mmm, that sounds delicious, Toad. I'm starving. Can I have one please? Toad: Of course, Mario. Here you go. Enjoy! Luigi: Me too, me too! Can I have one too, Toad? Toad: Sure thing, Luigi. Here you go. Enjoy!"
      },
      {    label: "Tamagoyaki",    description: "Whisk eggs in a bowl, then pour them into a special frying pan and cook them into a thin, rolled-up omelette. It's really tasty!"  },  {    label: "Croissants",    description: "A kind of flaky, buttery pastry that's shaped like a crescent moon. We usually dip them in coffee or hot chocolate and they're delicious!"  },  {    label: "Chilaquiles",    description: "Made with tortilla chips, salsa, eggs, and cheese. You fry the tortilla chips in a pan until they're crispy, then add the salsa, eggs, and cheese and cook them all together. It's really yummy!"  },  {    label: "Cornetto",    description: "A kind of pastry that's shaped like a cone and filled with things like chocolate or jam. We dip it in coffee or milk and it's so good!"  },  {    label: "Acai Bowl",    description: "A kind of smoothie made with frozen acai berries, banana, and other fruit. We top it with things like granola, nuts, and honey and it's really tasty and healthy!"  },
      {
        label: "Subtle breakfast recipes",
        description: "Sometimes, the best breakfast recipes are the ones that are subtle and understated. For example, a simple omelette made with fresh herbs and cheese can be incredibly satisfying. Or, for something a little sweeter, try mixing some fruit into your morning yogurt for a tasty and healthy treat. The key is to not overdo it and let the flavors speak for themselves."
        },
        {
        label: "Subtle variations on classic breakfast dishes",
        description: "If you're looking to add a bit of variety to your breakfast routine, try making subtle variations on classic dishes. For instance, instead of plain scrambled eggs, try adding some herbs or spices to give them a little extra flavor. Or, if you're a fan of oatmeal, try mixing in some different fruits or nuts to add a new dimension to the dish. The possibilities are endless!"
        },
        {
        label: "Subtle breakfast flavors that pack a punch",
        description: "Just because a breakfast recipe is subtle doesn't mean it can't pack a punch. For example, a sprinkle of chili flakes on your scrambled eggs can add a nice kick of heat. Or, try adding a drizzle of honey to your yogurt for a sweet and subtle flavor. The key is to experiment and find the flavors that you love."
        },
        {
        label: "Subtle breakfast options for picky eaters",
        description: "If you're cooking for someone who's a picky eater, subtle breakfast recipes can be a great way to introduce new flavors without overwhelming them. For instance, try making a scrambled egg dish with just a hint of garlic and onion, or mix some vegetables into their omelette for a nutritious and tasty meal. With a little bit of creativity, you can make breakfast enjoyable for even the pickiest of eaters."
        },
        

    ];

    // Create a regex that matches the user's input, allowing for variations in spelling and formatting
    const regex = new RegExp(input, "i");

    // Create an array to store the matched recipes
    const matchedRecipes = [];

    // Loop through the list of recipes
    for (const recipe of breakfastRecipes) {
        // Check if the recipe's name, description, or labels match the regex
        if (regex.test(recipe.description) || regex.test(recipe.label)) {
            // If the regex matches, add the recipe to the list of matched recipes
            matchedRecipes.push(recipe);
        }
    }

    // If there are any matched recipes, select one at random
    if (matchedRecipes.length > 0) {
        // Set the random matched recipe in state
        setRecipe(matchedRecipes[Math.floor(Math.random() * matchedRecipes.length)]);
    } else {
        // If there are no matched recipes, set a random recipe in state
        setRecipe(breakfastRecipes[Math.floor(Math.random() * breakfastRecipes.length)]);
    }

  };

  const pullImage = (label) => {
    // create a map of labels to image URLs
    const images = {
      "Scrambled Eggs": "https://www.google.com/images/scrambled_eggs.jpg",
      "Yogurt Parfait": "https://www.google.com/images/yogurt_parfait.jpg",
      "Smoothie Bowl": "https://www.google.com/images/smoothie_bowl.jpg",
      "Pancakes": "https://www.google.com/images/pancakes.jpg",
      "French Toast": "https://www.google.com/images/french_toast.jpg",
      "Omelette": "https://www.google.com/images/omelette.jpg",
    };

    // return the image URL for the given label
    return images[label];
  }

  return (
    <div className="BreakfastGenerator">
      {/* Text input for the user */}
      <p>Ahoy there, fellow traveler! I have discovered a most wondrous device that can generate delicious breakfast recipes at the press of a button. Simply type in a word or phrase of your choosing, and then press the "Go!" button to reveal the recipe.

To use this device, simply approach it and gaze upon its splendor. You will see a small box in which you can enter your chosen word or phrase. Once you have done so, simply press the button labeled "Go!" and the device will reveal a most delicious breakfast recipe for you to enjoy.

I must warn you, however, that this device is most unpredictable. It may reveal a recipe for scrambled eggs one moment, and a recipe for pancakes the next. But fear not, for every recipe it generates is sure to delight your taste buds and nourish your body.

So go forth, brave explorer, and discover the delicious breakfast recipes that this wondrous device has to offer. Bon appetit!</p>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          // Handle the Enter key press
          if (event.key === 'Enter') {
            handleGoButtonClick();
          }
        }}
        className="BreakfastGenerator-input" // Add a class name for the input
      />

      {/* "Go!" button */}
      <button onClick={handleGoButtonClick} className="BreakfastGenerator-button">
        Go!
      </button>

      {/* Output the generated breakfast recipe */}
      {recipe && (
        <>
          <p className="BreakfastGenerator-label">
            <strong>{recipe.label}</strong>
          </p>
          {/* <img src={pullImage(recipe.label)} alt={recipe.label} /> */}
          <p className="BreakfastGenerator-description">{recipe.description}</p>
        </>
      )}
    </div>
  );
};

export default BreakfastGenerator