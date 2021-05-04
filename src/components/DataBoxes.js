import React from 'react';

const DataBoxes = ({stats, countryStats}) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {/*Box - 1*/}
            <div className="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 className="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
                {countryStats ?
                    <div className="text-2xl mb-4">
                        <span className="font-bold">New: </span>
                        {numberWithCommas(countryStats.NewConfirmed)}
                    </div> : <div className="text-2xl mb-4">
                        <span className="font-bold">New: </span>
                        {numberWithCommas(stats.NewConfirmed)}
                    </div>}
                {countryStats ?
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Total: </span>
                        {numberWithCommas(countryStats.TotalConfirmed)}
                    </div> :
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Total: </span>
                        {numberWithCommas(stats.TotalConfirmed)}
                    </div>}
            </div>
            {/*Box - 2*/}
            <div className="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 className="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
                {countryStats ?
                    <div className="text-2xl mb-4">
                        <span className="font-bold">New: </span>
                        {numberWithCommas(countryStats.NewDeaths)}
                    </div> :
                    <div className="text-2xl mb-4">
                        <span className="font-bold">New: </span>
                        {numberWithCommas(stats.NewDeaths)}
                    </div>}
                {countryStats ?
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Total: </span>
                        {numberWithCommas(countryStats.TotalDeaths)}
                    </div> :
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Total: </span>
                        {numberWithCommas(stats.TotalDeaths)}
                    </div>}
            </div>
        </div>
    );
};

export default DataBoxes;