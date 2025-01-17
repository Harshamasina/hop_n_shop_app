import { Helmet } from 'react-helmet';

const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>Error 404 | Hop'n Shop #32 & Sinclair</title>
            </Helmet>

            <div className='error_container'>
                <img src='https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/error_3.jpg' alt='error 404'/>
            </div>
        </>
    )
};

export default Error404;