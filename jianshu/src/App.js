import Header from './common-component/header'
import {GlobalStyled} from "./style";
import {GlobalIconFontStyled} from "./statics/iconfont/iconfont";
function App() {
    return (
        <div>
            <Header/>
            <GlobalStyled/>
            <GlobalIconFontStyled/>
        </div>

    );
}

export default App;
