import React, { useState, useEffect } from 'react';

function Currency() {
  const [dat, setDat] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [baseUnit, setBaseUnit] = useState('');
  const [quoteUnit, setQuoteUnit] = useState('');
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/fetch');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const extractedData = Object.keys(data).map(symbol => ({
          symbol: symbol,
          base_unit: data[symbol].base_unit,
          quote_unit: data[symbol].quote_unit,
          low: data[symbol].low,
          high: data[symbol].high,
          last: data[symbol].last,
          type: data[symbol].type,
          open: data[symbol].open,
          volume: data[symbol].volume,
          sell: data[symbol].sell,
          buy: data[symbol].buy,
          at: data[symbol].at,
          name: data[symbol].name,
        }));
        setDat(extractedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Data not fetched successfully", error);
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleConvert = () => {
    const selectedCurrency = dat.find(currency => currency.base_unit === baseUnit && currency.quote_unit === quoteUnit);
    if (selectedCurrency) {
      const result = amount * selectedCurrency.last;
      setConversionResult(`${amount} ${baseUnit} = ${result} ${quoteUnit}`);
    } else {
      setConversionResult('Conversion not available');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="baseUnit">Base Unit:</label>
        <select id="baseUnit" value={baseUnit} onChange={(e) => setBaseUnit(e.target.value)}>
          <option value="">Select Base Unit</option>
          {dat.map((item, index) => (
            <option key={index} value={item.base_unit}>{item.base_unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quoteUnit">Quote Unit:</label>
        <select id="quoteUnit" value={quoteUnit} onChange={(e) => setQuoteUnit(e.target.value)}>
          <option value="">Select Quote Unit</option>
          {dat.map((item, index) => (
            <option key={index} value={item.quote_unit}>{item.quote_unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {conversionResult && <div>{conversionResult}</div>}
      <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {dat.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.last}</td>
              <td>{item.buy}</td>
              <td>{item.sell}</td>
              <td>{item.volume}</td>
              <td>{item.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Currency;
