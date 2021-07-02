import axios from "axios";
import config from "./config.js"

export async function obtenerNoticias() {
    var noticias = null
    await axios.get(config.URL+"noticias/obtener/").then((result) => {
        noticias = result.data;
    })
    console.log(noticias)
    return noticias
}

export async function buscarNoticias(query) {
    var noticias = null
    await axios.get(config.URL+"noticias/obtener/?query="+query).then((result) => {
        noticias = result.data;
    })
    return noticias
}

export async function login(username, password) {
    var userData = null
    await axios.post(config.URL+"api-token-auth/",{username: username, password: password}).then((result) => {
        userData = result.data;
    })
    return userData
}

export async function eliminarNoticia(id) {
    var noticias = null
    await axios.post(config.URL+"noticias/eliminar/",{noticia_id: id}).then((result) => {
        noticias = result.data;
    })
    return noticias
}

export async function publicarNoticia(noticiaDict) {
    var result = null
    await axios.post(config.URL+"noticias/publicar/",noticiaDict).then((res) => {
        result = res.data;
    })
    return result
}

export async function obtenerNoticia(id) {
    var noticia = null
    await axios.get(config.URL+"noticias/"+String(id)).then((result) => {
        noticia = result.data;
    })
    return noticia
}
