import Footer from '../components/Footer';
import Events from '../components/Events';
import FullWidthImage from '../components/FullWidthImage';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';
import college from '../assets/college-hero.jfif'
import CollegeView from '../components/CollegeView';


const Galleries = () => {
  const headerData = {
    backgroundImage: college,
    title: 'Gallery',
    subtitle: 'Learn more about our mission and values',
    buttonText: ''
  };

  return (
    <>
    <PageHeader  {...headerData} />
      <Events />
       <Gallery />
       <CollegeView />
      <FullWidthImage />
      <Footer />
    </>
  );
};

export default Galleries;
