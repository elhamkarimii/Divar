import { createGlobalStyle } from 'styled-components';
import Yekan from './Yekan.ttf'
import Far_Diplomat from './Far_Diplomat.ttf';
import roya from './Far_Roya.ttf'
export default createGlobalStyle`
    @font-face {
        font-family: 'diplomat';
        src: url(${Far_Diplomat}) ;
       
    }
    @font-face {
        font-family:'Yekan';
        src:url(${Yekan});

    }
    @font-face {
        font-family: "roya" ;
        src: url(${roya});
    }
`;