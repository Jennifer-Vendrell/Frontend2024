export const getCurrentWeather = async (dog) => {
    const url = import.meta.env.VITE_ANIMALSAPI_CURRENT_URL
    const key = import.meta.env.VITE_ANIMALSAPI_KEY
    const response = await fetch(`${url}?key=${key}&q=${dog}&aqi=no&lang=es`)
    const weather = await response.json()
  
    return weather
  }