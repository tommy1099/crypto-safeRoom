export const cryptoPrice = async (crypto: string, orderPrice: number): Promise<number> => {
    try {
      // Validate crypto parameter
      const validCryptos = ["btc", "eth", "usdt"];
      if (!validCryptos.includes(crypto)) {
        throw new Error(`Invalid cryptocurrency: ${crypto}`);
      }
  
      const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${crypto}.json`, { method: "GET" });
  
      if (response.ok) {
        const data = await response.json();
        return data[crypto] * orderPrice; // Use dynamic property access
      } else {
        throw new Error(`Failed to fetch data for ${crypto}`);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error to propagate it to the calling code
    }
  };
  