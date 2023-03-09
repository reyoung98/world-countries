import '../components/SearchBar.scss'

export default function SearchBar({setSearchQuery, setRegion}) {

    // const input = document.querySelector('.search-bar')

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSelect = (event) => {
        console.log(event.target.value)
        setRegion(event.target.value)
    }
    
    return (
        <div id="search-bar">
            <input className="search-bar" type="text" placeholder="Search for a country..." onChange={handleInputChange}/>
            
            <select name="" id="" onChange={handleSelect}>
                <option value="">All regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}