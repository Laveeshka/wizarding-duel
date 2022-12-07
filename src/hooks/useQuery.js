//this is a custom hook to fetch data from APIs
//accepts a URL as a parameter
import { useEffect, useState } from "react";
import getRandom from "../utils/randomNumberGenerator";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../firebase/firebase";

function useQuery(collectionName) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    const getFirestoreData = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      if (collectionName === "characters") {
        const charactersArray = [];
        querySnapshot.forEach((doc) => {
          charactersArray.push(doc.data())
        });
        setData(charactersArray);
        setIsLoaded(true);
      } else if (collectionName === "spells") {
        const spellsArray = [];
        const beforeArray = [];
        querySnapshot.forEach((doc) => {
          beforeArray.push(doc.data())
        });
        for (let spell of beforeArray) {
          const randomNum = getRandom(1, 10);
          const updatedSpell = { ...spell, points: randomNum };
          spellsArray.push(updatedSpell);
        }
        setData(spellsArray);
        setIsLoaded(true);
      }
    };

    getFirestoreData().catch(console.error);
  }, [collectionName]);

  //return data
  return { data, isLoaded };
}

// function useQuery(url) {
//   const [data, setData] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   //oldURL = https://hp-api.herokuapp.com/api/characters

//   const baseUrl = "https://fedeperin-harry-potter-api-en.herokuapp.com";

//   useEffect(() => {
//     setIsLoaded(false);

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (url === `${baseUrl}/characters`) {
//           //filter characters who belong to a house and have an image
//           const houseSortedData = data.filter(
//             (character) =>
//               character.hogwartsHouse !== "" && character.image !== ""
//           );
//           setData(houseSortedData);
//         } else if (url === `${baseUrl}/spells`) {
//           const spellsArray = [];
//           for (let spell of data) {
//             const randomNum = getRandom(1, 10);
//             const updatedSpell = { ...spell, points: randomNum };
//             //console.log("Updated spell is ", updatedSpell);
//             spellsArray.push(updatedSpell);
//           }
//           //console.log("spellsArray is ", spellsArray);
//           setData(spellsArray);
//         } else {
//           setData(data);
//         }
//         setIsLoaded(true);
//       })
//       .catch((err) => console.warn(err));
//   }, [url]); //we wish to use the side effect every time the url changes, so we assign the url as a dependency

//   //return data
//   return { data, isLoaded };
// }

export default useQuery;
