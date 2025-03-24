import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] =
  "Client-ID vlId46jqskFNdj8isLITBR0stayoi3WFqb3-VfWugms";

const fetchImages = async (query, page) => {
  const params = {
    page: page,
    query: query,
    orientation: "squarish",
    per_page: 12,
  };
  const res = await axios.get("/search/photos", { params });
  return res.data;
};
export default fetchImages;
