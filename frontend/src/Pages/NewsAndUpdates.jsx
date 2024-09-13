import News from "../components/News"
import Footer from '../components/Footer'
import Events from "../components/Events"
import PageHeader from '../components/PageHeader'
import college from '../assets/college-hero.jfif'
import Image from '../components/FullWidthImage'
import GetStarted from "../components/GetStarted"


const NewsAndUpdates = () => {
  const headerData = {
    backgroundImage: college,
    title: 'News & Updates',
    subtitle: 'Learn more about our mission and values',
  };
  return (
    <>
    <PageHeader {...headerData} />
    <News />
    <GetStarted />
    <Events />
    <Image />
    <Footer />
    </>
  )
}

export default NewsAndUpdates