var obj1 = {name: "golurk", 
            url: "https://pokeapi.co/api/v2/pokemon/623/"
}

var obj2 = {id: "623",
            name: "Golurk"
}

// console.log (obj1, obj2);

// var str = obj1.url;

var testArray1 = [];
var testArray2 = [];

var res = obj1.url.split("/");

console.log(res[6] == obj2.id);

console.log(obj2.id);
