const shopper = {
    name: "John",
    age: 42,
    isMarried: false,
    groceryCart: ["Eggs", "Milk", "Ramen"],
    frequentShopperSignUp: function() {
        return "Name: " + shopper.name + " Age: " + shopper.age + " Meal of Choice: " + shopper.groceryCart[2];
    }
}

console.log(shopper.frequentShopperSignUp());