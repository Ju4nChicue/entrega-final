const isAuthenticatedGuard = async(to, from, next) => {
    return new Promise( () => {
        if( localStorage.getItem('user')){
            next()
        }else{
            console.log('user is not logged in')
            next({name: '/'})
        }
    })
}

export default isAuthenticatedGuard;