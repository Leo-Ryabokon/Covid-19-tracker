import React from 'react';

const CountrySelect = ({countries, title, handleChangeCountry}) => {

    return (
        <div>
            <select onChange={handleChangeCountry} className="form-select block w-full border p-3 rounded mt-10">
                {title === 'Global' && <option value='0'>Select country</option>}
                {countries.map(country =>
                    <option key={country.ID} value={country.ID}>{country.Country}</option>
                )}
            </select>
        </div>
    );
};

export default CountrySelect;