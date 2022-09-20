export interface IPeople {
    [key: string]: string
}

export interface IGetPeoplesResponse {
    "count": number,
    "next": string | null,
    "previous": string
    "results": IPeople[]
}
