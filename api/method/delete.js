import { https } from "../http/http";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);
    return cartData.accessToken
}

export const del = async (bodyData, url, data) => {
    const response = await fetch(https + url,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() },
            body: JSON.stringify(bodyData),
        })
    const resJson = await response.json();
    return resJson[data]
}

export const delOnly = async (url) => {
    const response = await fetch(https + url,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() }
        })
    await response;
}