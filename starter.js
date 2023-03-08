////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => {
  return num1 - num2
}

const multiply = function(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

// console.log(add(6,3))

const calculator = (num1, num2, callback) => {
  if(Number(num1) && +num2){
    num1 = +num1
    num2 = +num2
    return callback(num1, num2)
  } else {
    console.log('You need to send in numbers only')
  }
}

const result = calculator(6, 3, add)
// console.log(result)
const result2 = calculator('9', 7, multiply)
// console.log(result2)
const result3 = calculator(6, 3, (num1, num2) => num1 + num2)
// console.log(result3)


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}
// applyPercentDiscount(catProducts[1], .25)
// console.log(catProducts)
const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}
// applyFlatRateDiscount(dogProducts[0], 3)
// console.log(dogProducts[0])

function applyDiscounts(arr, callback, discount){
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], discount)
  }
}
// applyDiscounts(dogProducts, applyFlatRateDiscount, 1)
// console.log(dogProducts)

function applyDiscountsByInventory(arr, callback, amount, discount){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].inventory < amount){
      callback(arr[i], discount)
    }
  }
}
// applyDiscountsByInventory(catProducts, applyPercentDiscount, 20, .50)
// console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makeSandwich(bread){
  return (ingredients) => {
    let order = `You ordered a ${bread} bread sandwich with `
    for (let i = 0; i < ingredients.length; i++){
      order += `${ingredients[i]} `
    }
    return order
  }
}

const makeWhiteSandwich = makeSandwich('white')
console.log(makeWhiteSandwich(['bacon', 'lettuce']))

const makeIdiotSandwich = makeSandwich("Chef Ramsey's hands")
console.log(makeIdiotSandwich(['idiot chef', 'chef ramsey']))



