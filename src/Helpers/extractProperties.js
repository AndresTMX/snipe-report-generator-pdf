
export function extractTags(array){
    const listElements = []

    array.map((item) => listElements.push(item.tag))

    return listElements
}

export function extractDevices(array){
    const listDevices = []

    array.map((item) => listDevices.push(item.device))

    return listDevices
}
