import axios from 'axios'
import {DOMAIN} from "../config";

const namespace = ''

export const appAxios = axios.create({
    baseURL: DOMAIN + namespace,
})
