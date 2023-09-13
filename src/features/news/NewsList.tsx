import React, { useEffect, useState } from 'react'
import { ListaNoticias as List } from './styled'
import NewsCard from './NewsCard';
import { INoticiasNormalizadas } from './Noticias';
import { getNews } from './fetchNews';
import Modal from './Modal';

const NewsList = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

    const handleModal = (news:INoticiasNormalizadas|null)=>{
        setModal(news)
    }

    useEffect(() => {
        const obtenerInformacion = async () => {
          const data = await  getNews
          setNoticias(data);
        };
    
        obtenerInformacion();
      }, []);
    
    
  return (
    <List>
        {noticias.map((news) => (
          <NewsCard key={news.id} news= {news} setModal= {handleModal}></NewsCard>
          ))}

        {modal? <Modal modal={modal} setModal={handleModal}/>: null}
    </List>
  )
}

export default NewsList
