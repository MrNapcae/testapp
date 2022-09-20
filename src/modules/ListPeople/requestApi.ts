import {appAxios} from "../../services";

export const getPeopleRequest = async (page: number): Promise<any> => {
    try {
        return await appAxios.get( `people/?page=${page}`)
    } catch(err: any) {
        console.log({err})
    }
}
