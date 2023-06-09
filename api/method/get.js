import { https } from "../http/http";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);
    return cartData.accessToken
}

export const getAll = async (url, data) => {
    
    const response = await fetch(https + url,
        {
            method: "GET",
            headers: { 'Authorization': await getToken() }
        });
    const resJson = await response.json();
    return resJson[data]
}

export const getByValue1 = async (url, data, value) => {
    const response = await fetch(https + url + '/' + value,
    {
        method: "GET",
        headers: { 'Authorization': await getToken() }
    });
    const resJson = await response.json();
    return resJson[data]
}

export const getByValue = async (url, value) => {
    const response = await fetch(https + url + '/' + value,
    {
        method: "GET",
        headers: { 'Authorization': await getToken() }
    });
    const resJson = await response.json();
    return resJson
}