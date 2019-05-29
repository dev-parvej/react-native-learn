export const SELECT_LIBRARY = 'SELECT_LIBRARY'

export const selectedLibrary = id => {
    return {
        type: SELECT_LIBRARY,
        val: id
    }
} 