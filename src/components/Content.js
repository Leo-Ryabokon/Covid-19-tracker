import React, {useEffect, useState} from 'react';
import {fetchCovidData} from "../api/api";
import loader from '../images/loader.gif'
import DataTitle from "./DataTitle";
import DataBoxes from "./DataBoxes";
import CountrySelect from "./CountrySelect";

const Content = () => {
    const [loading, setLoading] = useState(true)
    const [dataDate, setDataDate] = useState('')
    const [stats, setStats] = useState({})
    const [countries, setCountries] = useState([])
    const [title, setTitle] = useState('Global')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [countryName, setCountryName] = useState(title)
    const [countryStats, setCountryStats] =useState(null)

    const handleChangeCountry = (e) => {
        setSelectedCountry(e.target.value)
        setCountryName(countries.find(item => item.ID === e.target.value).Country)
        setCountryStats(countries.find(item => item.ID === e.target.value))
        e.preventDefault()
    }
    const clearCountryData = () => {
        setCountryStats(null)
        setCountryName('Global')
        setSelectedCountry('')

    }

    useEffect(() => {
        fetchCovidData().then(data => {
            setCountries(data.Countries)
            setStats(data.Global)
            setDataDate(data.Date)
            setLoading(false)
            setTitle(countryName)
        })
    }, [selectedCountry, countryName, countryStats, title])

    return (
        <div>
            {loading ? <div className="flex flex-col items-center justify-center text-center">
                <div className="text-gray-500 text-3xl mt-10 mb-6">LOADING...</div>
                <img className="w-40 m-auto" src={loader} alt="loader"/>
                </div> : <div>
                <DataTitle text={title} dataDate={dataDate}/>
                <DataBoxes stats={stats} countryStats={countryStats}/>
                <CountrySelect countries={countries} title={title} handleChangeCountry={handleChangeCountry}/>
                {countryStats && <button onClick={clearCountryData}
                                          className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600">Clear Country</button>}
            </div>}
        </div>
    )
}
export default Content;