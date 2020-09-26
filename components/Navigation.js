import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({navigation}) => {
    const router = useRouter();
    
    return (
        <NavigationStyled>
            <ul>
                {navigation.map((item) => (
                    <li key={item.id}>
                        <Link href={item.slug}>
                            <a className={router.pathname === item.slug ? 'active' : ''}>
                                {item.title}
                            </a>
                        </Link>
                    </li>
                ))}

            </ul>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.div`
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    li{
        margin-left: 10px;
    }

    a{
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }

        &.active{
            color: #EF6800;
        }
    }


`

export default Navigation;