import { useRef } from 'react';
import PhotoSection from './components/PhotoSection';
import Header from './components/Header';
import Career from './components/Career';
import Schedule from './components/Schedule'; 
import News from './components/News';
import Contact from './components/Contact';


function App() {
  const ForHeader = useRef();
  const ToCareer = useRef();
  const ToSchedule = useRef();
  const ToNews = useRef();
  const ToContact = useRef();

 




  return (
    <div className="App">
      <Header ref={{ForHeader, ToCareer, ToSchedule, ToNews, ToContact}}/>
      <PhotoSection ref={ForHeader}/>
      <Career ref={ToCareer}/>
      <Schedule ref={ToSchedule}/>
      {/* <News ref={ToNews}/> */}
      <Contact></Contact>
    </div>
  );
}

export default App;

/// 색 조합 https://colorhunt.co/palette/fdebf7fbcaffffadf0fc28fb

/// CID :V2GN2xAuS9M0GlYD_jIR
/// CPW : xOitg25izi