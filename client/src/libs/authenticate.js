export function checkIfAuthenticated(){
    //In this function, we will use local storage to maintain user information.
    return window.localStorage.getItem('user') ? true : false
 }

export function getUserData(){
    return checkIfAuthenticated() ? JSON.parse(window.localStorage.getItem('user')) : {}
}

export function deauthenticate(){
    return new Promise((resolve, reject)=>{
        window.localStorage.removeItem('user')
        fetch(`/auth/logout`)
        .then(response=>{
            if(response.ok){
                resolve(true)
            }
            else{
                reject('Invalid Credentials')
            }
        })
        .catch(err=>{
            reject('Network Issues')
        })
    })
}

export function authenticate(username, password){
    return new Promise((resolve, reject)=>{
        window.localStorage.removeItem('user')
        fetch(`/auth/login`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response=>{
            if(response.ok){                
                return response.json()
            }
            else{
                reject('Invalid credentials')
            }
        })
        .then(data=>{
            //console.log(data)
            window.localStorage.setItem('user', JSON.stringify(data))
            resolve(true)
        })
        .catch(err=>{
            reject('Network Issues')
        })
    })
}