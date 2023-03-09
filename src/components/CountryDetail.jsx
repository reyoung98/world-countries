import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../components/CountryDetail.scss'


export default function CountryDetail() {

    const { id } = useParams();     // get country id from route parameters

    const [country, setCountry] = useState({
        name: { common: '' },
        flags: { png: '', alt: '' },
        population: '',
        region: '',
        capital: '',
        languages: {}
    });

    const loadCountry = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        const data = await response.json()

        setCountry(data[0])
        console.log(data[0])

    }

    useEffect(() => {
        loadCountry()
    }, [])


    return (
        <>
            <div className="link-container">
                <Link to="/">Back</Link>
            </div>
            <div className="country-detail">

                <img src={country.flags.png} alt={country.flags.alt} />
                <div className="country-info">
                    <div className="country-name">{country.name.common}</div>
                    <div className="country-population">Population: {country.population.toLocaleString()}</div>

                    <div className="country-region">Region: {country.region}</div>
                    <div className="country-capital">Capital: {country.capital}</div>
                    <div className="country-capital">Languages: {Object.values(country.languages).join(', ')}</div>

                </div>
            </div>
        </>

    )
}


