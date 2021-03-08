// Diffrenece between call, bind and apply

//The bind() method creates a new function that, when called, has its this keyword set to the provided value

var pokemon = {
    firstname: 'Srashti',
    lastname: 'Gupta',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon();

// Srashti Gupta I chose you !
// The main differences between bind() and call() is that the call() method:
// Accepts additional parameters as well
// Executes the function it was called upon right away.
// The call() method does not make a copy of the function it is being called on.

//The call() method calls a function with a given this value and arguments provided individually.

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms