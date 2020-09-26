import styled from '@emotion/styled';
import { rem } from 'polished';
import { Flex, Box } from 'reflexbox';
import Navigation from './Navigation';
import Link from 'next/link';

const Header = ({navigation}) => {
    return (
        <HeaderStyled>
            <Flex justifyContent="space-between" alignItems="center">
                <Box variant='container'>
                    <div className='logo'>
                        <Link href='/'>
                            <a>
                                <img src='/images/logo.svg' alt='Sites logo' />
                                <span className='logo-text'>Next Movies</span>
                            </a>
                        </Link>
                    </div>
                    <Navigation navigation={navigation}/>
                </Box>
            </Flex>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background: #efefef;
    padding: 20px;

    .logo{
        display: flex;
        align-items: center;
    }

    .logo-text{
        color: #333333;
        font-weight: bold;
        font-size: ${rem(20)};
        margin-left: 20px;
    }
`

export default Header;