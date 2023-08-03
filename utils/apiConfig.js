import { getAccessToken } from "./getAccessToken";

export const configWithAccessToken = {
  headers: {
    Accept: "*/*",
    Authorization: `Bearer ${getAccessToken()}`,
  },
};

export const configWithoutAccessToken = {
  headers: {
    Accept: "*/*",
  },
};
