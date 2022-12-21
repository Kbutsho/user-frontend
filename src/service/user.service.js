import axios from "axios";

export const CreateUserService = async (data) => {
    const response = await axios.post(`/api/user`, data)
    return response;
}
export const getAllUserService = async () => {
    const response = await axios.get(`/api/user`)
    return response;
}