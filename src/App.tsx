import Header from './views/Header';
import Chat from './views/Chat';
import Footer from './views/Footer';
import './App.scss';
import { observer } from 'mobx-react-lite';


function App() {
  return (
    <div className="bg-sky-100 w-full h-screen flex flex-col items-center" style={{ overflow: 'visible' }}>
      <Header></Header>
      <Chat></Chat>
      <Footer></Footer>
    </div>
  );
}

export default observer(App)
