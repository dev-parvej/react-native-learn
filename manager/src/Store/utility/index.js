export const setReduxState = (oldObject, updatedObject) => {
    return {
        ...oldObject,
        ...updatedObject
    }
}