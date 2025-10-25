import { useState, useEffect } from "react";
import AnimatedGif from "./AnimatedGif";
import loading from "./assets/loading.gif"; // Imports relative filepath to image

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  // Fetches quote on first render
  useEffect(() => {
    // Fetches quotes on each re-render
    async function fetchQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      console.log(randomQuote);
      setQuote(randomQuote);
      setIsLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <div>
      {/* <img
        src={loading}
        alt="loading..."
        className="Loader"
        style={{ opacity: isLoading ? 1 : 0 }}
      /> */}

      <AnimatedGif
        // Can use direct links for images
        // src="https://media.tenor.com/hRBZHp-kE0MAAAAM/loading-circle-loading.gif"
        className="Loader"
        isLoading={isLoading}
        src={loading}
        alt="loading..."
      />

      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
