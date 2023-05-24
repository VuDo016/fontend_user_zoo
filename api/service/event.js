import { getAll } from "../method/get";

export const getAllEvent = async () => {
    return await getAll('event', 'events')
}