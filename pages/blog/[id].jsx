import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';

export default function primerPost({data}) {
  return (
    <Layout title="Mi primer post" description="Esta es la página de mi primer post">
      <h3>{data.id} - {data.title}</h3>
      <p>{data.body}</p>

      {/* Para enlaces Next ofrece Link, que es mucho más rápido y optimizado que las etiquetas "a" */}
      <Link href="/blog">
        <a>volver a blogs</a>
      </Link>

      {/* Para imágenes Next ofrece Image, que es mucho más óptimo que la etiqueta "img" */}
      <Image src="/img/lago.jpg" width={600} height={600} alt="Imagen de un lago"></Image>
    </Layout>
  )
}


//Esta función se ejecuta en el lado del cliente para páginas estáticas
export async function getStaticPaths(){
  try {
    const res  = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(({id}) => ({params: {id:`${id}`}}));
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error);
  }
}


//Esta función se ejecuta en el lado del cliente para páginas estáticas (se ejeccuta después de getStaticPaths)
export async function getStaticProps({params}){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id);
    const data = await res.json()

    return {
      props: {
        data: data
      }
    }
  }catch(error){
    console.log(error);
  }
}