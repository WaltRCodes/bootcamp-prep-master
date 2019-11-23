let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,


};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function(){
  let sum = 0;
 
  for (let category in this) {
    
    if (category === 'cash') {
      continue;
    }

    let items = this[category];
    

    for (let itemName in items) {
      let itemObj = items[itemName];
      //console.log(itemObj);
      sum += itemObj.cost * itemObj.quantity;
    }

  }


  return sum;

}

tacoCatInc.sale = function(order) {
  let price = 0;

  for (let category in order) {

    let item = order[category];

    price += this[category][item].cost;

    this.cash += this[category][item].cost;

    this[category][item].quantity--;
  }

  return price;
}