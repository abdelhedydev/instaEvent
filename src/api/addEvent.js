import axios from "axios";

async function addEvent(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/event`, JSON.stringify(data),
    );
    console.log("data", response);
    return response.data;
  } catch (error) {
    console.error("Error get Events", error);
  }
  return null;
}

export default addEvent;
