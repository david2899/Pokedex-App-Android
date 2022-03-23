import { API_HOST } from "../utils/constans"

export async function getPokemonsApi(next) {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch( next ? next : url)
        const result = await response.json()
        return result
    } catch (error) {
        throw new error
    }
}

export async function getPokemonsDetaisApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonsDetais(id) {
    try {
        const response = await fetch(`${API_HOST}/pokemon/${id}`)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}