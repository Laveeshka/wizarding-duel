//this is a custom hook to fetch data from APIs
//accepts a URL as a parameter
import { useEffect, useState } from "react";
import getRandom from "../utils/randomNumberGenerator";

function useQuery(url) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //oldURL = https://hp-api.herokuapp.com/api/characters

  const baseUrl = "https://fedeperin-harry-potter-api-en.herokuapp.com";

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (url === `${baseUrl}/characters`) {
          //filter characters who belong to a house and have an image
          const houseSortedData = data.filter(
            (character) => character.hogwartsHouse !== "" && character.image !== ""
          );
          setData(houseSortedData);
        } else if (url === `${baseUrl}/spells`) {
          const spellsArray = [];
          for (let spell of data) {
            const randomNum = getRandom(1, 10);
            const updatedSpell = { ...spell, points: randomNum };
            //console.log("Updated spell is ", updatedSpell);
            spellsArray.push(updatedSpell);
          }
          //console.log("spellsArray is ", spellsArray);
          setData(spellsArray);
        } else {
          setData(data);
        }
        setIsLoaded(true);
      })
      .catch((err) => console.warn(err));
  }, [url]); //we wish to use the side effect every time the url changes, so we assign the url as a dependency

  //return data
  return { data, isLoaded };
}

export default useQuery;
