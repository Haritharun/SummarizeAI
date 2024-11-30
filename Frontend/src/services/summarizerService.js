// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/summarize';

// export const summarizeText = async (text) => {
//   try {
//     const response = await axios.post(API_URL, { text });
//     return response.data.summary;
//   } catch (error) {
//     console.error("Error summarizing text:", error);
//     throw error;
//   }
// };
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api/summarize';

export const summarizeText = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/api/summarize`, { text });
    return response.data.summary;
  } catch (error) {
    console.error("Error summarizing text:", error);
    throw error;
  }
};
