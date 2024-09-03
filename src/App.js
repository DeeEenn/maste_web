import Home from './pages/Home';
import About from './components/About';
import Services from "./components/Services";
import { Helmet } from "react-helmet";

const App = () => {
    return (
        <div>
            <Helmet>
                <title>Maste</title>
            </Helmet>
            <Home></Home>
            <About></About>
            <Services></Services>
        </div>


    )
}
export default App;