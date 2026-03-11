import { api } from "./axios";

export const addDevotional = (data: any) => api.post("/devotional/add", data);
export const addMultipleDevotionals = (data: any[]) => api.post("/devotional/add-multiple", data);
