import { https } from "../http/http";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);
    return cartData.accessToken
}

export const handle_SignIn_SignUp_KH = async (email, password, name, option) => {
    const itemUser = []
    const url = []

    //1: SignIn  2:SignUp
    option == 1 ? url.push('account/login') : url.push('account/register')

    const response = await fetch(https + url[0],
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            }),
        })
    const resJson = await response.json();

    if (option == 1) {
        if (resJson.message === "Vui lòng nhập đủ thông tin!!!") {
            alert(resJson.message);
        }
        else if (resJson.message === "Email hoặc mật khẩu không đúng") {
            alert(resJson.message);
        }
        else {
            alert("Đăng nhập thành công");
            itemUser.push(resJson)
        }
    }
    else {
        if (resJson.message === "Vui lòng nhập đủ tt !!!!") {
            alert(resJson.message);
        }
        else if (resJson.message === "Email không hợp lệ") {
            alert(resJson.message);
        }
        else if (resJson.message === "Mật khẩu phải có ít nhất 8 ký tự") {
            alert(resJson.message);
        }
        else if (resJson.message === "Tên không hợp lệ") {
            alert(resJson.message);
        }
        else {
            alert(resJson.message);
            itemUser.push(resJson)
        }
    }

    return itemUser
}

export const post = async (bodyData, url, data) => {
    console.log(await getToken())
    const response = await fetch(https + url,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() },
            body: JSON.stringify(bodyData),
        })
    const resJson = await response.json();
    return resJson[data]
}

export const post1 = async (bodyData, url) => {
    const response = await fetch(https + url,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(bodyData),
        })
    const resJson = await response.json();
    return resJson
}

export const uploadImage = async (imageUris, url, type, value) => {
    try {
        const apiUrl = `${https}${url}/${type}/${value}`;

        const formData = new FormData();

        imageUris.forEach((imageUri, index) => {
            const extension = imageUri.split('.').pop();

            formData.append("images", {
                uri: imageUri,
                type: `image/${extension}`,
                name: `image_${index}.${extension}`
            });
        });

        console.log(formData["_parts"][0][1]);

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 'Authorization': await getToken()
            },
        });

        if (response.ok) {
            console.log('Upload success!');
        } else {
            console.log('Upload failed!');
        }
    } catch (error) {
        console.error(error);
    }
};
