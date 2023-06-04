import { getAll, getByValue1 } from "../method/get";

export const getAllAnimal = async () => {
    return await getAll('animal', 'animal')
}

export const getAnimalBySpecies = async (species) => {
    return await getByValue1('animal/getBySpecies', 'animal', species)
}