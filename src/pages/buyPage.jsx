import React,{useEffect} from 'react';
import BuySecundarioCont from '../components/container/buySecundarioCont';
import BuyPrimario from '../components/pure/buyPrimario';


const BuyPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
       
    }, []);


    return (
        <div>
            <BuyPrimario></BuyPrimario>
            <BuySecundarioCont></BuySecundarioCont>
        </div>
    );
}

export default BuyPage;
