import { Link } from "wouter";
import useSWR from 'swr'

import { getCountry } from "../../services/countries-info"
import LoadingFallback from "../components/LoadingFallback"
import { IconBackArrow } from "../components/Icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Country, Currencies } from "../../types";
import BorderCountries from "../components/BorderCountries";
import CountryNotFound from "../components/CountryNotFound";

function CountryDetail(props: { params: { country: string } }) {
  // Extraemos los props del componente
  const { params: { country } } = props

  // Hacemos fetch de la data y la guardamos, así como los estados (booleanos) de error y loading
  const { data, isLoading } = useSWR<Country>(`country${country}`, () => getCountry(country))


  // Verificamos si aun se está haciendo fetch de la información, de ser así se muestra el componente <LoadingFallback/>
  if (isLoading)
    return <div className="h-[75vh] flex items-center justify-center overflow-hidden"> <LoadingFallback /> </div>

  // Al terminar, se verifica que se tiene contenido en la constante data.
  if (data !== undefined) {
    const { population, region, subregion, capital, tld, currencies, languages, borders } = data
    const { png, alt } = data.flags
    const { common, nativeName } = data.name

    let currenciesValues
    const getCurrencies = (currencies: Currencies) => {
      return Object.values(currencies).map((currency) => currency.name);
    };

    if (currencies !== undefined) {
      currenciesValues = getCurrencies(currencies)
    }

    let nativeNameCommon;
    if (nativeName) {
      const nativeNameValues = Object.values(nativeName);
      nativeNameCommon = nativeNameValues[0]?.common;
    }

    let listOfLanguages;
    if (languages !== undefined) {
      listOfLanguages = Object.values(languages)
    }


    return (
      <>
        {
          data &&
          <div className="container mx-auto">
            <div className="my-10 lg:mb-0 mx-7 lg:mx-20">
              <Link href="/"
                className="w-fit flex gap-3 items-center py-2 px-7 rounded-sm shadow-md
                bg-c-white dark:bg-c-dark-blue-elements dark:text-c-very-light-gray-bg">
                <IconBackArrow className="dark:fill-c-very-light-gray-bg" /> Back
              </Link>

              <div className="lg:flex lg:items-center lg:gap-20 dark:text-c-white ">
                <LazyLoadImage src={png} alt={alt ? alt : `${common}' flag`}
                  className="my-14 w-[350px] h-[300px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[400px] object-contain lg:object-left flex-1" />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-6">{common}</h1>
                  <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">

                    <div className="mb-10 lg:mb-0 lg:min-w-[200px]">
                      <p className="my-2"><span className="font-bold">Native Name:</span> {nativeNameCommon}</p>
                      <p className="my-2"><span className="font-bold"> Population:</span> {population}</p>
                      <p className="my-2"><span className="font-bold">Region:</span> {region}</p>
                      <p className="my-2"><span className="font-bold">Sub Region:</span> {subregion}</p>
                      <p className="my-2"><span className="font-bold">Capital:</span> {capital}</p>
                    </div>

                    <div className="lg:min-w-[200px]">
                      <p className="my-2"> <span className="font-bold">Top Level Domain:</span> {tld}</p>
                      <p className="my-2"><span className="font-bold">Currencies:</span> {currenciesValues?.join(', ')}</p>
                      <p className="my-2"> <span className="font-bold">Languages:</span> {listOfLanguages?.join(', ')}</p>
                    </div>
                  </div>
                  {
                    borders &&
                    <BorderCountries country={common} borders={borders} />
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </>
    )
  } else {
    return <div className="grid h-[75vh] place-content-center">
      <CountryNotFound />
    </div>
  }
}


export default CountryDetail