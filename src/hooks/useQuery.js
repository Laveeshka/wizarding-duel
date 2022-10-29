//this is a custom hook to fetch data from APIs
//accepts a URL as a parameter
import { useEffect, useState } from "react";

function useQuery(url) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (url === "https://hp-api.herokuapp.com/api/characters") {
          //filter characters who belong to a house
          const houseSortedData = data.filter(
            (character) => character.house !== "" && character.image !== ""
          );
          setData(houseSortedData);
        } else {
          setData(data);
        }
        setIsLoaded(true);
      });
  }, [url]); //we wish to use the side effect every time the url changes, so we assign the url as a dependency

  //return data
  return { data, isLoaded };
}

export default useQuery;
