import Header from "./Components/header";
import HomeLayout from "./pages/homeLayout";
import Nav from "./Components/nav";
import '../src/assets/css/style.css'
import '../src/assets/css/all.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/lightcase.css'
import '../src/assets/css/swiper.min.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/rtl.css'
import '../src/assets/css/slick.css'
import '../src/assets/css/style.css.map'


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <HomeLayout/>
    </>
  );
}

export default App;
