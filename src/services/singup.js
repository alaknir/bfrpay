import apiInstance from "./api";

export const postSaveEmploymentStatus = (payload) => {
  return apiInstance().post(`/save`, payload);
};
