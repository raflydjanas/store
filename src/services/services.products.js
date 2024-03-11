import axios from "axios";

export const getProducts = async () => {
    return await axios.get('https://fakestoreapi.com/products');
}


export const getDetailsProducts = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => {
        callback(res.data)
    })
    .catch(err => {
        console.log(err)
    })
};