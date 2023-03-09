import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Country from './components/Country'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'

function App() {

  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countryData = await response.json();

    setCountries(countryData)
    console.log(countryData)
  }

  const searchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
      const data = await response.json();

      setCountries(data);
  }

  useEffect(()=> {
    getCountries()
  }, [])

  useEffect(() => {
    if(searchQuery !== '') {
      searchCountries()
    }
  }, [searchQuery])

  return (
    <div className="App">
      <Nav />
      <SearchBar setSearchQuery={setSearchQuery}/>
      <Country countries={countries}/>
    </div>
  )
}

export default App
