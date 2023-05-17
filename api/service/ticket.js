import { getAll } from "../method/get";

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