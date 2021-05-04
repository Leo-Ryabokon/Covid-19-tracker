export const fetchCovidData = async () => {
    const res = await fetch('https://api.covid19api.com/summary')
    const data = res.json()
    return data
}