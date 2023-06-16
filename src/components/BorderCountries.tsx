import useSWR from 'swr'
import { Link } from 'wouter'

import { Country } from '../../types.d'

import { getCountriesByCode } from "../../services/countries-info"

function BorderCountries(props: { country: any, borders: string[] }) {
  const { country, borders } = props

  if (!borders) return;


  const { data: borderInfo } = useSWR<Country[]>(`border_countries_${country}`, () => getCountriesByCode(borders))

  if (!borderInfo) return

  return (
    <>
      <h3 className="mt-10 text-xl font-semibold">Border Countries:</h3>
      <div className="flex items-center justify-center flex-wrap gap-2 my-3">
        {borderInfo.map(country => {
          const { name: {common}, cca3 } = country
          return (
            <Link href={`/country/${cca3}`} key={cca3}
              className="text-sm bg-c-white dark:bg-c-dark-blue-elements dark:border-0 py-1 px-10 shadow-center border rounded-md lowercase first-letter:uppercase">
              {common}
            </Link>
          )
        }
        )}
      </div>
    </>
  )
}

export default BorderCountries