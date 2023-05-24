import { getAll } from "../method/get";
import { post } from "../method/post";

export const getVehicle = async () => {
    return await getAll('ticket/service', 'vehicleTickets')
}

export const getBoating = async () => {
    return await getAll('ticket/service', 'boatingTickets')
}

export const getTentRentals = async () => {
    return await getAll('ticket/service', 'tentRentals')
}

export const getTicketCategory = async () => {
    return await getAll('ticket/ticket', 'ticketCategories')
}

///post////

export const createBill = async (totalQuantity, totalPrice, visitDate, userId) => {
    const bodyData = {
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        visitDate: visitDate,
        userId: userId
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