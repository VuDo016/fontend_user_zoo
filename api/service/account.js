import { getByValue } from "../method/get";
import { post1 } from "../method/post";
import { updateByValue } from "../method/put";

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