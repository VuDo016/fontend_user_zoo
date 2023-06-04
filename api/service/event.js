import { getAll, getByValue1 } from "../method/get";

export const getAllEvent = async (token) => {
    return await getAll('event', 'events', token)
}

export const getEventByDate = async (date, token) => {
    return await getByValue1('event/getByDate', 'events', date, token)
}