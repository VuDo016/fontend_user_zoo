import { getByValue } from "../method/get";
import { post, uploadImage, post1, postnotData } from "../method/post";
import { updateByValue } from "../method/put";
import { delOnly } from "../method/delete";
export const getAllAccountID = async (id) => {
    return await getByValue('account', id)
}

export const getAccessTokenNew = async (refreshToken) => {
    const bodyData = {
        refreshToken
    }
    return await post1(bodyData, 'account/token')
}

export const updateRank = async (value) => {
    return await updateByValue('account/updateRank', value)
}

export const logOut = async () => {
    await delOnly('account/logout')
}

export const uploadImageUser = async (uri, type, value) => {
    await uploadImage(uri, 'images', type, value)
}

export const delImageFire = async (type, url, id) => {
    const body = {
        type,
        url,
        id
    }
    await postnotData(body, 'images/delImgByURL')
}