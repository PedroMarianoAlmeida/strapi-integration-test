import styled from '@emotion/styled';
import Link from 'next/link';

const Card = (props) => {
    const { API_URL } = process.env;

    return (
        <CardStyled>
            <div className='poster'>
                <img src={API_URL + props.movie.poster.url} alt=''/>
            </div>

            <div className='body'>
                <h3>{props.movie.Title}</h3>
            </div>

            <p dangerouslySetInnerHTML={{__html: props.movie.description}}/>

            <Link href='/movies/[id]' as={`/movies/${props.movie.id}`}>
                <a>More about this movies</a>
            </Link>
        </CardStyled>
      );
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
    }
`
 
export default Card;