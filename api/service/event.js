import { getAll, getByValue1 } from "../method/get";

export const getAllEvent = async () => {
    return await getAll('event', 'events')
}

export const getEventByDate = async (date) => {
    return await getByValue1('event/getByDate', 'events', date)
}