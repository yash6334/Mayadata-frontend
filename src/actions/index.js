export const addData = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}

export const clearData = (data) => {
    return {
        type: "CLEAR",
        payload: data
    }
}

export const addSelected = (data) => {
    return {
        type: "ADDSELECTED",
        payload: data
    }
}

export const remSelected = (data) => {
    return {
        type: "REMSELECTED",
        payload: data
    }
}

export const incPage = (data) => {
    return {
        type: "INC"
    }
}

export const resetPage = (data) => {
    return {
        type: "RESET"
    }
}

export const setSearchText = (data) => {
    return {
        type: "GET",
        payload : data
    }
}

