import { Region } from "../types";



// -- Get list of countries of some region like Asia or America

const API_URL_COUNTRIES = {
  api: 'https://restcountries.com/v3.1/region/',
  fieldsToRequest: '?fields=name,capital,flags,population,region,cca3'
}

export const getCountriesByRegion = async (region: Region) => {
  const apiToRequest = API_URL_COUNTRIES.api + region.toLowerCase() + API_URL_COUNTRIES.fieldsToRequest

  const response = await fetch(apiToRequest)
  const countriesInRegion = await response.json();

  return countriesInRegion;
}

// --- Get specific country information like Ukraine or Mexico
const API_URL_COUNTRY = 'https://restcountries.com/v3.1/alpha?codes='

export const getCountry = async (name: string) => {
  const apiToFetch = API_URL_COUNTRY + name.toLowerCase()
  const response = await fetch(apiToFetch)
  const json = await response.json()
  const country = json[0];
  
  return country;
}

const API_BORDER_COUNTRIES = {
  api: "https://restcountries.com/v3.1/alpha?codes=",
  fieldsToRequest: "&fields=name,cca3"
}


export const getCountriesByCode = async (countriesCodes: string[] | undefined) => {
  if (!countriesCodes) return

  const apiToRequest = API_BORDER_COUNTRIES.api + countriesCodes.join(',') + API_BORDER_COUNTRIES.fieldsToRequest

  const response = await fetch(apiToRequest)
  const countriesInfo = await response.json()

  return countriesInfo;
}