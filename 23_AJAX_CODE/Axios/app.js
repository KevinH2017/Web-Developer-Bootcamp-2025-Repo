// https://github.com/axios/axios

// // Parses API JSON by itself
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// async function to use axios using arguments to get API JSON
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

// Uses argument to run API GET, one function can be used to get many JSON from one API
getStarWarsPerson(5);               
getStarWarsPerson(10);
