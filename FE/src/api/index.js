/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const URL = "https://etjude.r-e.kr/api/v1";

// application/json 타입
function apiInstance() {
  const AxiosInst = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return AxiosInst;
}

async function testMakeFilm(studioId, success, fail) {
  await axios({
    method: "GET",
    url: "https://etjude.r-e.kr/api/v2/concateVideo",
    params: {
      studio_id: `studio${studioId}`,
      film_id: `film_${Date.now()}`,
    },
  })
    .then(success)
    .catch(fail);
}

// multipart/form-data 형식
function apiFormInstance() {
  return axios.create({
    baseURL: URL,
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
}

export { apiInstance, apiFormInstance, testMakeFilm };
