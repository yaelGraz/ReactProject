import { useEffect, useState } from "react";
import Data from "./CountriesData.json"
import DisplayCountry from "./DisplayCountry";

function App() {
  const [currentCountry, setCurrentCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    setFilteredCountries(Data.filter(d => d.name.common.toLowerCase().includes(currentCountry.toLowerCase())))
  }, [currentCountry])

  useEffect(() => {
    console.log(filteredCountries)
  }, [filteredCountries])

  return (
    <>
      <h1>Countries</h1>
      <input onChange={(e) => setCurrentCountry(e.target.value)} />
      {currentCountry}
      <table>
        <th style={{width:'200px'}}>Name</th>
        <th>Currency</th>
        <th>Flag</th>
        <tbody>
          {filteredCountries.map((c, index) => {
            // console.log(c)
            return <DisplayCountry key={index} name={c.name.common} currency={c.currencies?.[Object.keys(c.currencies)?.[0]].symbol} flag={c.flags.png} />
          }
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
