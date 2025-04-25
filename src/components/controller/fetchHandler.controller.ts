import type { FetchObject } from "../model/fetchHandler.model";

export const fetchHandler = (fetchObject: FetchObject): any => {
  if (fetchObject.method === "GET") {
    return fetch(fetchObject.url, {
      method: fetchObject.method,
      headers: fetchObject.headers,
    })
      .then((data) => data.json())
      .then((res) => res)
      .catch((error) => console.log(error));
  }

  return fetch(fetchObject.url, {
    method: fetchObject.method,
    headers: fetchObject.headers,
    body: JSON.stringify(fetchObject.body),
  })
    .then((data) => data.json())
    .then((res) => res)
    .catch((error) => console.log(error));
};
