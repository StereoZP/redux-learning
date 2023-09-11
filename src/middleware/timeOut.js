export const timeOut = (store) => (next) => (action) => {
    const delayMs = action?.meta?.delayMs
    if(!delayMs){
        return next(action)
    }

    const timeOut = setTimeout(()=> next(action), delayMs)

    return () =>{
        console.log('===> Canceled')
        clearTimeout(timeOut)
    }
}