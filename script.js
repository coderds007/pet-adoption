async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json();
  const ourTemperature = weatherData.properties.periods[0].temperature
  // console.log(ourTemperature)

  document.querySelector("#temperature-output").textContent = ourTemperature;
}

start()

async function petsArea() {
  const petPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petData = await petPromise.json()
  petData.forEach((pet) => {
    console.log(pet.name)
  })
}

petsArea()
