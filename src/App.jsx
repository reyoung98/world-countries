import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Country from './components/Country'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'

function App() {

  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [region, setRegion] = useState('')

  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    setCountries(data)
    console.log(data)
  }

  const searchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
      const data = await response.json();

      setCountries(data);
  }

  const filterRegion = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const data = await response.json();

      setCountries(data)
  }

  useEffect(()=> {
    getCountries()
  }, [])

  useEffect(() => {
    if(searchQuery !== '') {
      searchCountries()
    }
  }, [searchQuery])

  useEffect(() => {
    if(region !== '') {
      filterRegion()
    } else {
      getCountries()
    }
  }, [region])

  return (
    <div className="App">
      <Nav />
      <SearchBar setSearchQuery={setSearchQuery} setRegion = {setRegion} />
      <Country countries={countries}/>
    </div>
  )
}

export default App
