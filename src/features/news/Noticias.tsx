import {ContenedorNoticias,TituloNoticias,} from "./styled";
import NewsList from "./NewsList";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <NewsList/>
    </ContenedorNoticias>
  );
};

export default Noticias;
