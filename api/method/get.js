import { https } from "../http/http";

export const getAll = async (url, data) => {
    const response = await fetch( https + url);
    const resJson = await response.json();
    return resJson[data]
}

export const getByValue = async (url, value) => {
    const response = await fetch( https + url + '/' + value );
    const resJson = await response.json();
    return resJson
}