//---------------------------OBJECT DESTRUCTURING
const persone = {
  name: 'Davide',
  age: 29,
  location: {
    city: 'Isernia',
    temp: 24
  }
}

// crea variabili con lo stesso nome e/o valori di default
const {
  name,
  age = 0
} = persone;

// variabili interne con lo stesso nome
const {city, temp} = persone.location;

// variabili più interne con nomi custom
const {customCityVarName: city, customTempVarName: temp} = persone.location;

// valori di default e custom name
const {
  nameWithDefault: name = 'default_name'
} = persone

//--------------------------ARRAY DESTRUCTURING
const adress = ['1299 S Junipero', 'Philadelphia', 'Pennsylvania', '19874'];
const str_example = `You are in ${adress[1]}, living at the ${adress[0]}`;

// DESTRUCTURING
const [adress, city, state, code] = adress;

// evitare qualche valore (tipo secondo e quarto)
const [adresss,, statee] = adress;

// defaults
const [bla = 'qualcosa',,] = adress;
