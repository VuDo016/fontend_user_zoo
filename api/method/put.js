import { https } from "../http/http";

export const update_Khachhang = async (body, idKH, token) => {
    console.log(body, idKH)
    const response = await fetch(https + 'account',
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({
                id: idKH,
                first_name: body.first_name,
                name: body.name,
                gender: body.gender,
                birth_date: body.birth_date,
                address: body.address,
                phone: body.phone,
                email: body.email,
                avatar_url: body.avatar_url
            }),
        })
    const resJson = await response.json();

    if (resJson.message === "Update the user succeeds!")
        alert('Cập nhật thành công !!!')   
    else 
        alert('Cập nhật thất bại !!!')   
}

export const update_PasswordKH = async (pass, newPass, token, idKH) => {
    const response = await fetch(https + 'account/updatePass',
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({
                idKH: idKH,
                newPass: newPass,
                pass: pass
            }),
        })
    const resJson = await response.json();

    return resJson.message
}