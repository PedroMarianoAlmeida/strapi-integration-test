import Header from '../components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import theme from './../theme/theme'
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

import SEO from './../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps, navigation }) {
  
  return <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
              <Header navigation={navigation} />
              <GlobalStyles />
              <Component {...pageProps} />
            </ThemeProvider>
          </>
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async() => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json();

  return { navigation }
}

export default MyApp
