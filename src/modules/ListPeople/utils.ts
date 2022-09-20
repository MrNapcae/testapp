import {IPeople} from "./types";

export const sortByField = (a: IPeople, b: IPeople, field: string, direction: boolean) => {
    if (a[field] === 'unknown' || b[field] === 'unknown') {
        return -1
    }
    const dateA = Date.parse(a[field])
    const numberFieldA = parseInt(a[field], 10)
    const isDate = isNaN(dateA)

    if (isNaN(numberFieldA) && isDate) {
        const valueA = a[field].toLowerCase(), valueB = b[field].toLowerCase()
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
    } else {
        if (!isDate) {
            return direction ? dateA - Date.parse(b[field]) : Date.parse(b[field]) - dateA
        } else {
            return direction ? numberFieldA - parseInt(b[field], 10) : parseInt(b[field], 10) - numberFieldA
        }
    }
}
