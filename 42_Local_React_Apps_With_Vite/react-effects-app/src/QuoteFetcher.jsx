import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Fetches quote on first render
  useEffect(() => {
    fetchQuote(); // Uses fetch api in fetchQuote() function
  }, []);

  // Fetches quotes on each re-render
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    console.log(randomQuote);
    setQuote(randomQuote);
  }
  return (
    <div>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
      <button onClick={fetchQuote}>Get Random Quote</button>
    </div>
  );
}
