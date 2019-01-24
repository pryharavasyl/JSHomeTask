var arr = [1,2,3,4];
var doublearr = arr.map(function(number) {
    return number * 2;
})
console.log (doublearr);



var data = [
    {
      country: 'China',
      population: 1409517397,
    },
    {
      country: 'India',
      population: 1339180127,
    },
    {
      country: 'USA',
      population: 324459463,
    },
    {
      country: 'Indonesia',
      population: 263991379,
    }
  ]
  var datapopulation500 = data.filter(function(obj){
      if (obj.population >= 500000000){
        return obj.country;
      }
      
  })
  console.log(datapopulation500);



  var cinemaVisitors = [
    {
      name: 'visitor1',
      getAge: function() {return 18},
      withParents: function() {return false}
    },
    {
      name: 'visitor2',
      getAge: function() {return 16},
      withParents: function() {return true}
    },
    {
      name: 'visitor3',
      getAge: function() {return 25},
      withParents: function() {return false}
    },
    {
      name: 'visitor4',
      getAge: function() {return 17},
      withParents: function() {return false}
    },
    {
      name: 'visitor5',
      getAge: function() {return 20},
      withParents: function() {return false}
    },
  ];
// some stupid example. I go sleep. Tomorrow (today) maybe i solw it, but it is not fact))
  var cinemaVisitors18 = cinemaVisitors.find(function(obj){
      if (withParents === true || obj.getAge > 18) {
        return obj.name;
      }
      
  })
  console.log(cinemaVisitors18);