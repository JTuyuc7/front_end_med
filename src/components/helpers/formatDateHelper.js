

export const formatDateHelper = (arrDate) => {
    let formated_year = arrDate[3]
    let formated_month = arrDate[2]
    let formatd_day = arrDate[1]
    return `${formated_year}-${formated_month}-${formatd_day}`.toUpperCase()
}