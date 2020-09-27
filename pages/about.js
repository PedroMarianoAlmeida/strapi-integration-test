import { NextSeo } from "next-seo";

const About = () => {

    const SEO = {
        title: 'About page',
        description: 'Just your normal about page'
    }

    return (
        <>
            <NextSeo {...SEO} />
            <h1>I am an About page</h1>
        </>
    );
}

export default About;