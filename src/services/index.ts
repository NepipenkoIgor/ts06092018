import { axiosInstance } from '../config';

export const getUsers = () => axiosInstance.get('/participants?key=repch8');