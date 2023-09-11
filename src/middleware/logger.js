export const logger = (store) => (next) => (action) => {
    console.log('dispatching', action)
    console.log('before', store.getState())

    let res = next(action)
    console.log('after', store.getState())
    return res
}