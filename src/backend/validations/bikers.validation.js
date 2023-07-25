
export const validateNewBiker = (biker) => {
    if (!biker.name) return false
    if (!biker.lastname) return false
    if (!biker.email) return false
    return true
}

export const validateBikerID = (id) => {
    if (!id) return false // 0 - false - null - undefined - ''
    return true
}