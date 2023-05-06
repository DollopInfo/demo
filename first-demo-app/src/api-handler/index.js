import axios from "axios";

export const serverUrl = "http://localhost:8000/api/";

const getRequest = async (endPoint) => {
  const response = await axios.get(`${serverUrl}${endPoint}`);
  if (response.statusText === "OK") {
    return response.data;
  }
  // const response = await fetch(`${serverUrl}${endPoint}`, {
  //   headers: {
  //     authorization: localStorage.getItem("token"),
  //   },
  // });
  // if (response.ok) {
  //   const json = await response.json();
  //   console.log(json);
  //   return json;
  // } else {
  // }
};

export const postRequest = async (endPoint, body) => {
  const response = await axios.post(`${serverUrl}${endPoint}`, body);
  if (response.statusText === "Created") {
    return true;
  } else {
    return false;
  }
};

export const putRequest = async (endPoint, body) => {
  const response = await axios.put(`${serverUrl}${endPoint}`, body);

  if (response.statusText === "OK") {
    return true;
  } else {
    return false;
  }
};

export const deteRequest = async (endPoint) => {
  const response = await axios.delete(`${serverUrl}${endPoint}`);
  if (response.statusText === "OK") {
    return true;
  } else {
    return false;
  }
};

export default getRequest;
