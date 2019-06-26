import axios from "axios";

async function getTypeNumber(selectedType) {
  let typeNumberPromise = axios
    .get("https://pokeapi.co/api/v2/type/")
    .then(function(typeList) {
      // console.log(typeList);
      let type;
      for (type = 0; type < typeList.data.results.length; type++) {
        // console.log(typeList.data.results[type].name);
        if (typeList.data.results[type].name === selectedType) {
          return typeList.data.results[type].url;
        }
      }
    });
  let typeNumberResult = await typeNumberPromise;
  console.log(typeNumberResult);
  return typeNumberResult;
}

function getTypeURL(selectedType) {
  // console.log(selectedType);
  if (selectedType === "all") {
    return "https://pokeapi.co/api/v2/pokemon/";
  } else {
    let typeURL = getTypeNumber(selectedType);
    return typeURL;
  }
}

module.exports = {
  getPokemonByType: function(selectedType) {
    let typeURL = getTypeURL(selectedType);
    axios.get(typeURL).then(function(typeData) {
      let pokemon = typeData.data.pokemon;
      return pokemon;
    });
    // let typePokemonResult = await typePokemonPromise;
  },

  getTypes: async function() {
    let types = axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(function(typeData) {
        console.log(typeData);
        return typeData.data.results;
      });
  }
};
