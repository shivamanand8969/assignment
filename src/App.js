import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import JobReason from './components/JobReason';
import JobDepartMent from './components/JobDepartMent';
import Crawsel from './components/Crawsel';
import JobsOfweak from './components/JobsOfweak';


function App() {
  return (
    <>
     <Navbar/>
     <Header/>
      <div className='w-[100%] bg-[#f7f8fa]'>
        <JobReason/>
        <JobDepartMent/>
         <JobsOfweak/>
      </div>
    </>
  )
}

export default App;
