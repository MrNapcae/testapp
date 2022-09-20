import {IPeople, ISort} from "./types";

const reDate = new RegExp('(\\d{4})-(\\d{2})-(\\d{2})');

export const sortByField = (a: IPeople, b: IPeople, sort: ISort) => {
    const parsedA = parseInt(a[sort.field], 10)
    const isNumber = !isNaN(parsedA)
    const isDate = reDate.test(a[sort.field])

    if (!isNumber && !isDate) {
        return sortByStrings(a[sort.field], b[sort.field], sort.direction)
    } else {
        if (isDate) {
            const parsedDateA = Date.parse(a[sort.field])
            const parsedDateB = Date.parse(b[sort.field])
            return sort.direction ? parsedDateA - parsedDateB : parsedDateB - parsedDateA
        } else {
            const parsedB = parseInt(b[sort.field], 10)
            return sort.direction ? parsedA - parsedB :parsedB - parsedA
        }
    }
}


const sortByStrings = (a: string, b: string, direction: boolean): number => {
    const valueA = a.toLowerCase(), valueB = b.toLowerCase()
    if (direction) {
        if (valueA < valueB)
            return -1
        if (valueA > valueB)
            return 1
        return 0
    } else {
        if (valueA > valueB)
            return -1
        if (valueA < valueB)
            return 1
        return 0
    }
}
