import axios from 'axios';

async function getEvents() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/events`,
    );
    console.log('get Events Response', response);
    return response;
  } catch (error) {
    console.error('Error get Events', error);
  }
  return null;
}

export default getEvents;
