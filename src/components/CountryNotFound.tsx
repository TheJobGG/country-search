function CountryNotFound() {
  return (
    <div className="h-screen absolute -z-50 inset-0 flex flex-col gap-10 items-center justify-center overflow-hidden mx-5" >
      <h1 className="text-3xl text-center font-bold dark:text-c-white" >
        This country was not found
      </h1>
      < p className="max-w-[500px] text-center dark:text-c-white" >
        Maybe it's in a parallel dimension or it has turned into a secret country only accessible to the boldest adventurers.
      </ p>
      < img src="/hidden-country.webp" alt="County not found"
        className=" relative w-[300px] h-[140px] object-cover -scale-100 dark:invert" />
    </div>
  )
}

export default CountryNotFound