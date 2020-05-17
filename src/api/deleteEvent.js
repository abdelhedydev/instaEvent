import axios from "axios";

async function deleteEvent(id) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/event/${id}`,
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods":
      //       "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      //     "Access-Control-Allow-Headers": "Content-Type",
      //     "Access-Control-Max-Age": 86400,
      //   },
      // },
    );
    console.log("delte", response);
  } catch (error) {
    console.error("Error get Events", error);
  }
  return null;
}

export default deleteEvent;
