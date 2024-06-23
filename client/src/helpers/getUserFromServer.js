
const host="https://shopcart-backend-ekq6.onrender.com";
const getUserFromServer = async() =>{
    const res = await fetch(`${host}/api/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}

export default getUserFromServer