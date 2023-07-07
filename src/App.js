import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/home-component/home-component';
import HomepageBody from './components/home-component/homepage-body';
import HomepageHeader from './components/home-component/homepage-header';
import HomepageFooter from './components/home-component/homepage-footer';

function App() {
  return (
    <div>

     <HomeComponent />
     <HomepageBody />
     
     <HomepageFooter />
     <HomepageHeader />
     
    </div>
  );
}

export default App;
