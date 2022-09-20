import {IPeople} from "./types";

export const sortByField = (a: IPeople, b: IPeople, field: string) => {
    const dateA = Date.parse(a[field])
    const numberFieldA = parseInt(a[field], 10)
    const isDate = isNaN(dateA)

    if (isNaN(numberFieldA) && isDate) {
        const valueA = a[field].toLowerCase(), valueB = b[field].toLowerCase()
        if (valueA < valueB)
            return -1
        if (valueA > valueB)
            return 1
        return 0
    } else {
        if (!isDate) {
            return dateA - Date.parse(b[field])
        } else {
            return numberFieldA - parseInt(b[field], 10)
        }
    }
}
