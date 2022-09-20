import {IPeople, ISort} from "./types";

export const sortByField = (a: IPeople, b: IPeople, sort: ISort) => {
    if (a[sort.field] === 'unknown' || b[sort.field] === 'unknown') {
        return -1
    }

    const dateA = Date.parse(a[sort.field])
    const numberFieldA = parseInt(a[sort.field], 10)
    const isDate = isNaN(dateA)

    if (isNaN(numberFieldA) && isDate) {
        return sortByStrings(a[sort.field], b[sort.field], sort.direction)
    } else {
        if (!isDate) {
            return sort.direction ? dateA - Date.parse(b[sort.field]) : Date.parse(b[sort.field]) - dateA
        } else {
            return sort.direction ? numberFieldA - parseInt(b[sort.field], 10) : parseInt(b[sort.field], 10) - numberFieldA
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
