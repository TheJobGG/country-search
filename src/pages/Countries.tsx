import useSWR from "swr";
import { useState } from "react";

import { Country, Region } from '../../types.d'
import { getCountries } from '../../services/countries-info'
import CountryCard from "../components/CountryCard";

import { IconSearch } from "../components/Icons";
import DropDown from "../components/DropDown";
import LoadingFallback from "../components/LoadingFallback";

function Countries() {
  const [searchInput, setSearchInput] = useState("")
  const [selectedRegion, setSelectedRegion] = useState(Region.Africa)

  const { data, error, isLoading } = useSWR<Country[]>(`countries_${selectedRegion}`, () => getCountries(selectedRegion))

  const filteredCountries = data?.filter((country: Country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <>
      {/* Search */}
      <div className="container mx-auto">
        <div className="mx-10 mt-10 flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex relative w-full md:w-[300px]">
            <div onClick={() => document.getElementById('search')?.focus()} >
              <IconSearch className="absolute left-7 top-1/2 -translate-y-1/2 fill-c-dark-gray-input cursor-text dark:fill-c-very-light-gray-bg " />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a country..."
              autoComplete="off"
              className="bg-c-white dark:bg-c-dark-blue-elements dark:text-c-very-light-gray-bg
              shadow-center w-full py-4 text-sm pl-20 rounded-md placeholder:text-c-dark-gray-input dark:placeholder:text-c-very-light-gray-bg "
              onChange={onChangeInput}
            />
          </div>

          <DropDown setSelectedRegion={setSelectedRegion} />
        </div>
      </div>

      {/* Countries */}
      <div className="mt-10 container mx-auto">
        <div className="mx-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            filteredCountries?.map((country: Country) => (
              <CountryCard key={country.name.common} country={country} />
            ))
          }
        </div>
      </div>
      {
        filteredCountries && filteredCountries.length <= 0 &&
        <p className="text-center text-lg font-bold mt-10">Country not found</p>
      }
      {
        error && <h2>Something went wrong...</h2>
      }
      {
        isLoading && (
          <div className="h-[20vh] flex items-center justify-center overflow-hidden">
            <LoadingFallback />
          </div>
        )
      }
    </>
  )
}

export default Countries;
