import {appAxios} from "../../services";
import {IGetPeoplesResponse} from "./types";
import {AxiosResponse} from "axios";

export const getPeopleRequest = async (page: number): Promise<AxiosResponse<IGetPeoplesResponse>> => {
    return await appAxios.get(`people/?page=${page}`)
}
