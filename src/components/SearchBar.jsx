import '../components/SearchBar.scss'

export default function SearchBar({setSearchQuery}) {

    // const input = document.querySelector('.search-bar')

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
        console.log('hello')
    }
    
    return (
        <div id="search-bar">
            <input className="search-bar" type="text" placeholder="Search for a country..." onChange={handleInputChange}/>
        </div>
    )
}