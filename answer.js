// create 5 burgers (at least 3 should be beef)
db.burger.insert({meat: 'beef', cheese: 'false', toppings: ['ketchup', 'onions', 'pickles']})
db.burger.insert({meat: 'beef', cheese: 'false', toppings: ['ketchup', 'onions', 'pickles']})
db.burger.insert({meat: 'beef', cheese: 'pepperjack', toppings: ['onions', 'pickles']})
db.burger.insert({meat: 'turkey', cheese: 'false', toppings: ['tomato']})
db.burger.insert({meat: 'bean', cheese: 'queso', toppings: ['lettuce', 'tomato', 'cilantro']})
// find all the burgers
// Atlas atlas-3x9ncu-shard-0 [primary] burgers> db.burger.find()
[
  {
    _id: ObjectId("648b361a7d28536a54c61af6"),
    meat: 'beef',
    cheese: 'false',
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b366d7d28536a54c61af7"),
    meat: 'beef',
    cheese: 'false',
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b37177d28536a54c61af8"),
    meat: 'beef',
    cheese: 'pepperjack',
    toppings: [ 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b37647d28536a54c61af9"),
    meat: 'turkey',
    cheese: 'false',
    toppings: [ 'tomato' ]
  },
  {
    _id: ObjectId("648b379a7d28536a54c61afa"),
    meat: 'bean',
    cheese: 'queso',
    toppings: [ 'lettuce', 'tomato', 'cilantro' ]
  }
]

// show just the meat of each burger
db.burger.find({}, {meat: 1})
[
  { _id: ObjectId("648b361a7d28536a54c61af6"), meat: 'beef' },
  { _id: ObjectId("648b366d7d28536a54c61af7"), meat: 'beef' },
  { _id: ObjectId("648b37177d28536a54c61af8"), meat: 'beef' },
  { _id: ObjectId("648b37647d28536a54c61af9"), meat: 'turkey' },
  { _id: ObjectId("648b379a7d28536a54c61afa"), meat: 'bean' }
]




// show just the toppings of each burger


db.burger.find({}, {toppings: 1})
[
  {
    _id: ObjectId("648b361a7d28536a54c61af6"),
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b366d7d28536a54c61af7"),
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b37177d28536a54c61af8"),
    toppings: [ 'onions', 'pickles' ]
  },
  { _id: ObjectId("648b37647d28536a54c61af9"), toppings: [ 'tomato' ] },
  {
    _id: ObjectId("648b379a7d28536a54c61afa"),
    toppings: [ 'lettuce', 'tomato', 'cilantro' ]
  }
]

// show everything but the cheese

db.burger.find({}, {cheese: 0})
[
  {
    _id: ObjectId("648b361a7d28536a54c61af6"),
    meat: 'beef',
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b366d7d28536a54c61af7"),
    meat: 'beef',
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b37177d28536a54c61af8"),
    meat: 'beef',
    toppings: [ 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b37647d28536a54c61af9"),
    meat: 'turkey',
    toppings: [ 'tomato' ]
  },
  {
    _id: ObjectId("648b379a7d28536a54c61afa"),
    meat: 'bean',
    toppings: [ 'lettuce', 'tomato', 'cilantro' ]
  }
]


// find all the burgers with beef

db.burger.find({meat: 'beef'})
[
  {
    _id: ObjectId("648b361a7d28536a54c61af6"),
    meat: 'beef',
    cheese: 'false',
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b366d7d28536a54c61af7"),
    meat: 'beef',
    cheese: 'false',
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b37177d28536a54c61af8"),
    meat: 'beef',
    cheese: 'pepperjack',
    toppings: [ 'onions', 'pickles' ]
  }
]


// find all the burgers that are not beef

db.burger.find( {meat: {$ne: 'beef'}})
[
  {
    _id: ObjectId("648b37647d28536a54c61af9"),
    meat: 'turkey',
    cheese: 'false',
    toppings: [ 'tomato' ]
  },
  {
    _id: ObjectId("648b379a7d28536a54c61afa"),
    meat: 'bean',
    cheese: 'queso',
    toppings: [ 'lettuce', 'tomato', 'cilantro' ]
  }
]


// find the first burger with cheese

db.burger.findOne({cheese:{$ne:'false'}})
{
  _id: ObjectId("648b37177d28536a54c61af8"),
  meat: 'beef',
  cheese: 'pepperjack',
  toppings: [ 'onions', 'pickles' ]
}


// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate({cheese:{$ne:'false'}},{$set:{cheese: 'double cheese'}})

[
    {
      _id: ObjectId("648b361a7d28536a54c61af6"),
      meat: 'beef',
      cheese: 'false',
      toppings: [ 'ketchup', 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b366d7d28536a54c61af7"),
      meat: 'beef',
      cheese: 'false',
      toppings: [ 'ketchup', 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b37177d28536a54c61af8"),
      meat: 'beef',
      cheese: 'double cheese',
      toppings: [ 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b37647d28536a54c61af9"),
      meat: 'turkey',
      cheese: 'false',
      toppings: [ 'tomato' ]
    },
    {
      _id: ObjectId("648b379a7d28536a54c61afa"),
      meat: 'bean',
      cheese: 'queso',
      toppings: [ 'lettuce', 'tomato', 'cilantro' ]
    }
  ]
  
// find the burger you updated to have double cheese

db.burger.find({cheese: 'double cheese'})

[
  {
    _id: ObjectId("648b37177d28536a54c61af8"),
    meat: 'beef',
    cheese: 'double cheese',
    toppings: [ 'onions', 'pickles' ]
  }
]


// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({meat: 'beef'}, {$set:{meat: 'veggie'}})

[
    {
      _id: ObjectId("648b361a7d28536a54c61af6"),
      meat: 'veggie',
      cheese: 'false',
      toppings: [ 'ketchup', 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b366d7d28536a54c61af7"),
      meat: 'veggie',
      cheese: 'false',
      toppings: [ 'ketchup', 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b37177d28536a54c61af8"),
      meat: 'veggie',
      cheese: 'double cheese',
      toppings: [ 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b37647d28536a54c61af9"),
      meat: 'turkey',
      cheese: 'false',
      toppings: [ 'tomato' ]
    },
    {
      _id: ObjectId("648b379a7d28536a54c61afa"),
      meat: 'bean',
      cheese: 'queso',
      toppings: [ 'lettuce', 'tomato', 'cilantro' ]
    }
  ]

// delete one of your veggie burgers
// BEWARE: db.burger.remove({meat: 'veggie'}) DELETES ALL!!!  DO NOT USE!

db.burger.deleteOne({meat: 'veggie'})

[
    {
      _id: ObjectId("648b366d7d28536a54c61af7"),
      meat: 'veggie',
      cheese: 'false',
      toppings: [ 'ketchup', 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b37177d28536a54c61af8"),
      meat: 'veggie',
      cheese: 'double cheese',
      toppings: [ 'onions', 'pickles' ]
    },
    {
      _id: ObjectId("648b37647d28536a54c61af9"),
      meat: 'turkey',
      cheese: 'false',
      toppings: [ 'tomato' ]
    },
    {
      _id: ObjectId("648b379a7d28536a54c61afa"),
      meat: 'bean',
      cheese: 'queso',
      toppings: [ 'lettuce', 'tomato', 'cilantro' ]
    }
  ]

// drop the collection
//Expected Output
//true

db.burger.drop()


// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

db.dropDataBase();


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 