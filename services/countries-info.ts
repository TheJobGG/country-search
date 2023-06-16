import { Region } from "../types";

const API_URL_COUNTRIES = 'https://restcountries.com/v3.1/region/'
const FIELDS_TO_REQUEST = "?fields=name,capital,flags,population,region"


const API_URL_COUNTRY = 'https://restcountries.com/v3.1/name/'

export const getCountries = async (region: Region) => {
  const response = await fetch(API_URL_COUNTRIES + region.toLowerCase() + FIELDS_TO_REQUEST)
  const json = await response.json();
  console.log('fetched...')
  return json;
}

export const getCountry = async (name: string) => {
  const response = await fetch(API_URL_COUNTRY + name.toLowerCase())
  const json = await response.json()
  const country = json[0];

  return country
}