const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = farmAnimals.split(' ');



// Use destructuring to assign appropriate variables based on the sounds animals make
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = farmAnimals.split(' ');

// Log the variables to verify the assignments
console.log(cowSound);     // => "moo"
console.log(horseSound);   // => "neigh"
console.log(sheepSound);   // => "baa"
console.log(pigSound);     // => "oink"
console.log(chickenSound); // => "cluck"


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
// Define the farmAnimals string
const farmAnimals = 'moo neigh baa oink cluck';

// Use destructuring to assign appropriate variables, skipping the horse sound
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// Log the variables to verify the assignments
console.log(bessie); // => "moo"
console.log(dolly);  // => "baa"
console.log(babe);   // => "oink"
console.log(little); // => "cluck"


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Log the variables to verify the assignments
console.log(blackAndWhite); // => "moo"
console.log(black);         // => "baa"
console.log(pink); 

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Use destructuring to assign appropriate variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red);    // => "red"
console.log(orange); // => "orange"
console.log(yellow); // => "yellow"
console.log(green);  // => "green"
console.log(blue);   // => "blue"
console.log(indigo); // => "indigo"
console.log(violet); // => "violet"


// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, i, v] = colors;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Use destructuring to assign the first letter of each color to variables, skipping indigo
const [r, o, y, g, b, , v] = colors;

console.log(r); // => "red"
console.log(o); // => "orange"
console.log(y); // => "yellow"
console.log(g); // => "green"
console.log(b); // => "blue"
console.log(v); // => "violet"

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Use destructuring to assign the first letter of each color to variables, skipping indigo
const [r, o, y, g, b, , v] = colors;

console.log(r); // => "red"
console.log(o); // => "orange"
console.log(y); // => "yellow"
console.log(g); // => "green"
console.log(b); // => "blue"
console.log(v); // => "violet"



// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [, , , , , indg, ] = colors;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Use destructuring to assign the sixth element (indigo) to indg
const [, , , , , indg] = colors;

console.log(indg); // => "indigo"


// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

const muppet = {
  muppetName: "Kermit",
  color: "green",
  song: "The Rainbow Connection",
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

// Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName); // => "Kermit"
console.log(color);      // => "green"
console.log(song);       // => "The Rainbow Connection"
console.log(job);        // => "Host of The Muppet Show"
console.log(partner);    // => "Miss Piggy"


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner: kermitPartner } = nestedMuppet;
//solution

const nestedMuppet = {
  name: "Kermit",
  color: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Movin' Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Somethin' Better Comes Along"
    }
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};

// Use destructuring to assign songs 2 and 4
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
console.log(song2); // => "Movin' Right Along"
console.log(song4); // => "I Hope That Somethin' Better Comes Along"

// Use destructuring to assign Kermit's job and partner
const { nestedJob, nestedPartner: kermitPartner } = nestedMuppet;
console.log(nestedJob);     // => "Host of The Muppet Show"
console.log(kermitPartner); // => "Miss Piggy"


