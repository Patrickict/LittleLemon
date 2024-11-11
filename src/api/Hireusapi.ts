import axios from 'axios';
import ReserveTableObject from '../interfaces/ReserveTableObject';

const POST_URL = "https://6rk0v.wiremockapi.cloud/json/form";

export const PostForm  = async (ReserveTable : ReserveTableObject) => {
  console.log("Posting :" + ReserveTable);
  try {
    const response = await axios.post(POST_URL, JSON.stringify({ ReserveTable }), {
      withCredentials: false
    });

    return response.data.response;
  } catch (err) {
    return err;
  }
}