import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncGetProduct = () => async (dispatch,getState) =>{
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // here is synchronous response 
        dispatch(getProducts(response.data));
    } catch (error) {
        console.error(error);
    }
}