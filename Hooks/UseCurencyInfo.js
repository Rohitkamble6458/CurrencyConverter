import { useState, useEffect } from "react";



// Custom Hooks Created 



function useCurrencyInfo(currency) {

    const [data, setData] = useState({})
    useEffect(() => {

        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)

            .then((res) => res.json())

            .then((res) => {

                setData(res.rates); // Extracting rates from the response

            })

            .catch((error) => {

                console.error('Error fetching data:', error);

            });

    }, [currency])

    console.log(data);

    return data

}



export default useCurrencyInfo;