const keyValueToString = ([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
        throw new Error('Please check your params')
    }
    return `${key}=${value}`
}

module.exports.queryString = (obj) => {
    return Object.entries(obj)
        .map(keyValueToString)
        .join('&')
}

module.exports.parse = string => {
    return Object.fromEntries(
        string.split('&').map(item => {
            const parts = item.split('=')
            if (parts[1].includes(',')) {
                parts[1] = parts[1].split(',')
            }
            return parts
        })
    )
}
