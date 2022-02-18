import Layout from "../../components/Layout"
import Link from 'next/link';

export default function index({data}) {
  return (
    <Layout title="Blogs" description="Esta es la página de blogs">
      <h1>Esta es la página principal de blogs</h1>
      {data.map(({id,title,body}) =>
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>{id} - {title}</a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      )}
    </Layout>
  )
}

//Esta función se ejecuta en el lado del cliente para páginas estáticas
export async function getStaticProps(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: {
        data: data
      }
    }
  }catch(error){
    console.log(error);
  }
}