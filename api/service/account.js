import { getByValue } from "../method/get";

export const getAllAccountID = async (id, token) => {
    return await getByValue('account', id)
}