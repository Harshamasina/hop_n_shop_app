import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GoToTopButton from './Components/GoToTopButton';
import MakeCallButton from './Components/MakeCallButton';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Footer />
                <GoToTopButton />
                <MakeCallButton />
            </BrowserRouter>
        </>
    )
};

export default App;