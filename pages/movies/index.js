import fetch from 'isomorphic-unfetch';
import Router from 'next/dist/next-server/lib/router/router';
import { Flex, Box } from 'reflexbox';
import { useRouter } from 'next/router';

const MoviesPage = ({ movies, page }) => {

    const router = useRouter();

    return (
        <Box variant='container' pt={40}>
            <ul>
                {movies.map((movie => (
                    <li key={movie.id}>
                        <h3>{movie.Title}</h3>
                    </li>
                )))}
            </ul>
            <button 
                onClick={() => router.push(`/movies?page=${page - 1}`)}
                disabled={page <= 1}
            >
                Previous</button>
            <button 
                onClick={() => router.push(`/movies?page=${page + 1}`)}
            >
                Next
            </button>
        </Box>
      );
}

export async function getServerSideProps(context){
    const { API_URL } = process.env;
    console.log(context);
    //const start = +page === 1 ? 0 : (page - 1) * 2

    const res = await fetch(`${API_URL}/movies?_limit=2`)
    const data = await res.json()

    return {
        props: {
            movies: data,
            //page: Number(page)
        }
    }
}
 
export default MoviesPage;