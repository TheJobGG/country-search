import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'wouter'

import LoadingFallback from './LoadingFallback'
import { Country } from '../../types'

function CountryCard(props: { country: Country }) {
  const { country: { flags: { png, alt }, name: { official, common }, population, region, capital } } = props

  const handleClick = () => {

  }


  return (
    <Link href={`/country/${common}`} className='bg-c-white dark:bg-c-dark-blue-elements dark:text-c-white rounded-xl shadow-sm overflow-hidden mx-auto w-full max-w-[350px] cursor-pointer' onClick={handleClick}>
      <LazyLoadImage src={png} alt={alt} placeholder={<LoadingFallback />} className='w-full h-48 object-cover' />

      <div className='py-7 px-5'>
        <h3 className='font-bold text-xl mb-3 max-w-full'>{official}</h3>
        <p className='font-bold'>Population: <span className='font-normal'>{population}</span></p>
        <p className='font-bold'>Region: <span className='font-normal'>{region}</span></p>
        {capital && <p className='font-bold'>Capital: <span className='font-normal'>{capital}</span></p>}
      </div>

    </Link>
  )
}

export default CountryCard