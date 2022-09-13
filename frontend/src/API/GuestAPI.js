import axios from "axios";
import { config } from "../config";

export const GuestAPI = {
  save: async (data, token) => {
    var axosConfig = {
      method: "post",
      url: `${config.API_URL}/save`,
      headers: {
        // Authorization: `AuthToken ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    return await axios(axosConfig);
  },
  siteList: async () => {
    var axosConfig = {
      method: "get",
      url: `${config.API_URL}/sites`,
    };

    return await axios(axosConfig);
  },
  completedSites: async () => {
    var axosConfig = {
      method: "get",
      url: `${config.API_URL}/sites/complete`,
    };

    return await axios(axosConfig);
  },
  siteDetails: async (siteId) => {
    var axosConfig = {
      method: "get",
      url: `${config.API_URL}/site/${siteId}`,
    };

    return await axios(axosConfig);
  },
};
