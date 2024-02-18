const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Note : array koi bhi data le leta h

// marvel_heros.push(dc_heros)
// isme array ko as a data le liya

// push operation exsisting array ko hi modify kr deta h

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// concat operation modify nhi krta h  wo new array return krta h
// 1st method
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// 2nd method

// Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// concat h wo return krta h new array









// rarely use cases
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// imp when we doing data scraping

// q. puche rehe h
// console.log(Array.isArray("ram"));

// kisi ko bhi Array bna dega ye
// console.log(Array.from("ram"))

// isme hame ye btana pdega ki keys ka me array bnau ya value ka ?
// console.log(Array.from({name:"hitesh"}))                 imp. for interview


// multiple variables ya array ko array me convert krne ke liye.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
