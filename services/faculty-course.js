import axios from "axios";

export const FacultyCourseService = {
  facultiesList: async () => {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faculty/list`);
  },
  educationLevelList: async () => {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/eduLevel/list`);
  },
  createDepartment: async (payload) => {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/department/create`,
      payload,
      { withCredentials: true }
    );
  },
};
