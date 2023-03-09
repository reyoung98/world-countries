import '../components/Country.scss'

export default function Country({ countries }) {

    return (
        // <div className="container">
        <div className="country-list">
            { countries.map(country => {
                return (
                    <div className="country-card" key={country.fifa}>
                        <img src={country.flags.png} alt={country.flags.alt} />
                        <div className="country-info">
                            <div className="country-name">{country.name.common}</div>
                            <div className="country-population">Population: {country.population}</div>
                            <div className="country-region">Region: {country.region}</div>
                            <div className="country-capital">Capital: {country.capital}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        // </div>
    )

}