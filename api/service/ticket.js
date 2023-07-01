import { getAllnottoken, getByValue1, getAll } from "../method/get";
import { post } from "../method/post";
import { putNotVale } from "../method/put";

export const getVehicle = async () => {
    return await getAllnottoken('ticket/service', 'vehicleTickets')
}

export const getBoating = async () => {
    return await getAllnottoken('ticket/service', 'boatingTickets')
}

export const getTentRentals = async () => {
    return await getAllnottoken('ticket/service', 'tentRentals')
}

export const getTicketCategory = async () => {
    return await getAllnottoken('ticket/ticket', 'ticketCategories')
}

export const getBillNew = async () => {
    return await getAll('ticket/bill', 'latestBill')
}

export const getListTicketNew = async () => {
    return await getAll('ticket/bill', 'tickets')
}

export const getListServiceNew = async () => {
    return await getAll('ticket/bill', 'services')
}

export const getBillById = async (id) => {
    return await getByValue1('ticket/billByID', 'bills', id)
}

///post////

export const createBill = async (totalQuantity, totalPrice, visitDate, userId, codeBill) => {
    const bodyData = {
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        visitDate: visitDate,
        userId: userId,
        codeBill: codeBill
    }

    return await post(bodyData, 'ticket/bill', 'ticketHistoryId')
}

export const createTicket = async (quantity, ticketCategoryId, ticketHistoryId) => {
    const bodyData = {
        quantity: quantity,
        ticketCategoryId: ticketCategoryId,
        ticketHistoryId: ticketHistoryId
    }

    return await post(bodyData, 'ticket/ticket', 'success')
}

export const createService = async (quantity, serviceCategoryId, ticketHistoryId) => {
    const bodyData = {
        ticketHistoryId: ticketHistoryId,
        serviceCategoryId: serviceCategoryId,
        quantity: quantity
    }

    return await post(bodyData, 'ticket/service', 'success')
}

export const updateQRcode = async (dataQRcode, userId) => {
    const bodyData = {
        userId: userId,
        paymentData: dataQRcode
    }

    return await post(bodyData, 'ticket/generate-qr-code', 'success')
}

export const reqCancel = async (ticketId, isCancelValue) => {
    const bodyData = {
        ticketId,
        isCancelValue
    }

    await putNotVale(bodyData, 'ticket/reqCancle')
}