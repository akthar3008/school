import axios from 'axios';

// Configure a base URL for all API requests
const apiClient = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// You can define specific API functions here
export const submitInquiry = (inquiryData) => {
  return apiClient.post('/inquiries', inquiryData);
};

// Example for fetching notices if you add that feature
// export const getNotices = () => {
//   return apiClient.get('/notices');
// };