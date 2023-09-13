import { INoticias, obtenerNoticias } from "./fakeRest";


const getTime = (news: INoticias)=>{
    const ahora = new Date();
    const minutosTranscurridos = Math.floor(
      (ahora.getTime() - news.fecha.getTime()) / 60000
    );

    return minutosTranscurridos
}

const normalizeTitle = (news: INoticias)=>{
    return news.titulo
    .split(" ")
    .map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
}

const normalizeNewsData= async() => {

    const getNews = await obtenerNoticias();
    
    const normalizedData = getNews.map((news)=>{
        const minElapsed = getTime(news)
        const titulo = normalizeTitle(news)
        return {
          id: news.id,
          titulo,
          descripcion: news.descripcion,
          fecha: `Hace ${minElapsed} minutos`,
          esPremium: news.esPremium,
          imagen: news.imagen,
          descripcionCorta: news.descripcion.substring(0, 100),
        };

        })

      return  normalizedData  
    }

export const getNews =  normalizeNewsData()  