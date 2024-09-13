import PageHeader from '../components/PageHeader';
import college from '../assets/college-hero.jfif'
import FacultyList from '../components/FacultyList';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import FullWidthImage from '../components/FullWidthImage';


const FacultyAndStaff = () => {
  const headerData = {
    backgroundImage: college,
    title: 'Faculty & Staff',
    subtitle: 'Learn more about our mission and values',
    buttonText: ''
  };
  return (
   <>
   <PageHeader {...headerData} />
   <div className="min-h-scree">
    <FacultyList />
    <GetStarted />
    <FullWidthImage />
    <Footer />
  </div>
   </>
  )
}

export default FacultyAndStaff