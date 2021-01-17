import prototype from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore'

function NodeBird({ Component }) {
    return (
        <>
        <Head>
            <meta charSet = "utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component/>
        </>
    )
}

NodeBird.prototype = {
    Component : prototype.elementType.isRequired,
}


export default wrapper.withRedux(NodeBird)