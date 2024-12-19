import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from '../Hooks/UseCurencyInfo';

function App() {
    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const CurrencyInfo = useCurrencyInfo(from);
    const options = Object.keys(CurrencyInfo || {});

    useEffect(() => {
        if (amount && from !== to) {
            convert();
        }
    }, [from, to]); // Automatically update on currency change

    const convert = () => {
        const rate = CurrencyInfo?.[to];
        if (rate && amount > 0) {
            setConvertedAmount((amount * rate).toFixed(2)); // Format to 2 decimal places
        } else {
            setConvertedAmount(0);
        }
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
    };

    return (
        <>
        <div className="justify-center mx-auto w-full max-w-3xl px-4 py-5 my-8 shadow-md rounded-lg bg-gray-600 text-orange-500">
          <h1 className="text-2xl md:text-3xl text-center font-bold underline py-5">
            Password Generator
          </h1>
          <div className="flex flex-col md:flex-row rounded-lg shadow-md text-center overflow-hidden gap-y-3 md:gap-y-0">
            <input
              type="text"
              value={password}
              placeholder="password"
              className="outline-none px-3 py-1 w-full text-lg md:text-2xl rounded-lg"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyClipboard}
              className="outline-none px-3 py-1 ml-0 md:ml-1 text-lg md:text-2xl rounded-lg bg-blue-600 font-bold"
            >
              Copy
            </button>
          </div>
  
          <div className="flex flex-col md:flex-row text-lg md:text-2xl gap-y-3 md:gap-y-0 gap-x-6 mt-5">
            <div className="flex flex-col md:flex-row items-center gap-x-2">
              <input
                type="range"
                className="py-3 px-2 flex-grow max-w-full md:max-w-xl accent-blue-600 range-slider cursor-pointer"
                min={8}
                max={100}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label className="text-sm md:text-lg mt-2 md:mt-0 whitespace-nowrap">Length: {length}</label>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-2">
              <input
                type="checkbox"
                className="w-6 h-6 py-3 px-2 cursor-pointer accent-blue-600"
                defaultChecked={number}
                id="Number"
                onChange={() => setNumber((prev) => !prev)}
              />
              <label htmlFor="Number" className="text-sm md:text-lg mt-2 md:mt-0 whitespace-nowrap">
                Number
              </label>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-2">
              <input
                type="checkbox"
                className="w-6 h-6 py-3 px-2 accent-blue-600 cursor-pointer"
                id="charcter"
                defaultChecked={charcter}
                onChange={() => setCharacter((prev) => !prev)}
              />
              <label htmlFor="charcter" className="text-sm md:text-lg mt-2 md:mt-0 whitespace-nowrap">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </>
    );
}

export default App;
