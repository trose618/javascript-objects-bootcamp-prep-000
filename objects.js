function updateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign({}, obj, {[key]: value})
}

var meals = {}
var sweetMeal = 'dessert'

meals[sweetMeal] = 'cake'
meals.snack = 'yogurt'

console.log(meals.dessert)
console.log(meals[sweetMeal])
console.log("Keys and values in meal: \n" + meals)