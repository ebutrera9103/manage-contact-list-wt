import Axios from 'axios';
import { getHeader, Url } from '../config';

//CRUD
export const get = async function (endpoint: string) {
    try {
        return await Axios.get(`${Url + endpoint}?timestamp=${new Date().getTime()}`, { headers: getHeader() });
    } catch (error) {
        console.log("ERROR axios", error)
    }
};

export const post = async function (add: any, endpoint: string) {
    try {
        return await Axios.post(`${Url + endpoint}`, add, { headers: getHeader() });
    } catch (error) {
        console.log("ERROR axios", error)
    }
}


export const put = async function (id: number, edit: any, endpoint: string) {
    try {
        return await Axios.put(`${Url + endpoint}/${id}`, edit, { headers: getHeader() });
    } catch (error) {
        console.log("ERROR axios", error)
    }
}

export const del = async function (id: number, endpoint: string) {
    try {
        return await Axios.delete(`${Url + endpoint}/${id}`, { headers: getHeader() });
    } catch (error) {
        console.log("ERROR axios", error)
    }
};

export const getSearch = async function (searchString: any, endpoint: string) {
    try {
        return await Axios.get(`${Url + endpoint}/${searchString}`, { headers: getHeader() });
    } catch (error) {
        console.log("ERROR axios", error)
    }
};

