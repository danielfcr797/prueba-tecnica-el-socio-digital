import axios from "axios";
import { toast } from "react-toastify";

const urlBase = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_URN + process.env.REACT_APP_KEY_PUBLIC;

async function getCategories() {
    try {
        let res = await axios.get(`${urlBase}categories.php`);
        return res?.data?.categories
    } catch (error) {
        toast('ha ocurrido un error consumiendo el servicio de categorias',{type:'error'})
        return error?.message
    }
}


async function getCountries() {

    try {
        let res = await axios.get(`${urlBase}list.php?a=list`)
        return res?.data?.meals
    } catch (error) {
        toast('ha ocurrido un error consumiendo el servicio de países',{type:'error'})
        return error?.message
        
    }
}

async function getMeals(param, value) {
    let key;
    switch (param) {
        case 'search':
            key = `search.php?s=${value}`
            break;
    
        case 'cat':
            key = `filter.php?c=${value}`
            break;
            
        case 'countrie':
            key = `filter.php?a=${value}`
            break;
        default:
            break;
    }

    try {
        let res = await axios.get(`${urlBase}${key}`)
        if (res?.data?.meals?.length <= 10) {
            return res?.data?.meals
        }else{
            return res?.data?.meals?.splice(0,10);
        }
    } catch (error) {
        toast('ha ocurrido un error consumiendo el servicio de recetas', {type:'error'})
        return error?.message
    }
    
}


async function getDetailMael(id) {

    try {
        let res = await axios.get(`${urlBase}lookup.php?i=${id}`)
        if(res?.data?.meals[0] ){
            return res?.data?.meals[0]
        }else{
            toast('No se ha encontrado informacion con ese id',{type:'error'});
            return {}
        }
    } catch (error) {
        toast('ha ocurrido un error consumiendo el servicio de detalle', {type:'error'})
        return error.message
    }
    
}


export { getCategories, getCountries, getMeals, getDetailMael };