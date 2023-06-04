import { getByValue1 } from "../method/get";
import { post, uploadImage } from "../method/post";

export const getDanhgia_byIDKH = async (id) => {
    return await getByValue1('comment/user', 'feedback', id)
}

export const getDanhgia_byIDAnimal = async (id) => {
    return await getByValue1('comment/animal', 'feedback', id)
}

export const getDanhgia_byIDEvent = async (id) => {
    return await getByValue1('comment/event', 'feedback', id)
}

export const getDanhgia_byIDActivity = async (id) => {
    return await getByValue1('comment/activity', 'feedback', id)
}

export const create_DanhGia = async (rating, comment, userId, animalId, activateId, eventId) => {
    const bodyData = {
        rating,
        comment,
        userId,
        animalId,
        activateId,
        eventId
    }

    return await post(bodyData, 'comment', 'feedbackId')
}
 
export const uploadImageFeedback = async (uri, type, value) => {
    await uploadImage(uri, 'images', type, value)
}
