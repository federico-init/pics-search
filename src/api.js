import axios from "axios";

const myUrl = "https://api.unsplash.com//search/photos";
const myKey = "PVfa6y3FjqHSd0Gr3EYc5s07Ky0Fak4ns3XDasumhe4";

const searchImages = async (searchInput) => {
  const response = await axios.get(myUrl, {
    headers: {
      Authorization: `Client-ID ${myKey}`,
    },
    params: {
      query: searchInput,
    },
  });

  return response.data.results;
};

export default searchImages;
