const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/150'

async function catchPokemon(url){
    let pokeObject = await fetch(url)
    let pokeJSON = await pokeObject.json()
    let {name, sprites, stats } = pokeJSON
    let image = sprites.back_default
    
    console.log(stats)
    
    let pokemon = {}
    stats.forEach(item => {

        pokemon = {...pokemon,[item.stat.name]: item.base_stat}
       
    });

    pokemon.name = name 
    pokemon.image = image 

    console.log(pokemon)
    
}

catchPokemon(pokemonAPI)



