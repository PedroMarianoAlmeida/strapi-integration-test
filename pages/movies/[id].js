import { Flex, Box } from 'reflexbox';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

const Movie = ({movie}) => {
    console.log(movie);
    
    return (
        <Box variant="container">
            <Box as="h2" my={40}>{movie.Title}</Box>
            <Box maxWidth={600}>
                <p dangerouslySetInnerHTML={{__html: movie.description}}></p>
            </Box>                  
        </Box>
      );
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    
    const { id } = context.query
    
    const res = await fetch(`${publicRuntimeConfig.API_URL}/movies/${id}`);
    const data = await res.json();
    
    return{
        props:{
            movie: data,
        }
    }
}
 
export default Movie;