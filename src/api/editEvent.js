import axios from "axios";

async function editEvent(data, id) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/event/${id}`,
      JSON.stringify(data),
    );
    console.log("data", response);
    return response.data;
  } catch (error) {
    console.error("Error get Events", error);
  }
  return null;
}

export default editEvent;
