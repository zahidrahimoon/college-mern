import contact1 from '../assets/pic-1.png';
import contact2 from '../assets/pic-2.png';
import contact3 from '../assets/pic-3.png';

const PeopleContainer = () => {
  return (
    <div className="people-container">
      <h1 className="text-3xl font-semibold text-center mb-6">Our Team</h1>
      <div className="flex flex-col space-y-6">
        <div className="people flex items-center space-x-4">
          <img src={contact3} alt="John Doe" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">John Doe</span><br /> Senior Marketing Manager <br /> Phone:+1 234 567 890 <br /> E-mail: JohnDoe@gmail.com
          </p>
        </div>
        <div className="people flex items-center space-x-4">
          <img src={contact2} alt="Anaa" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Anaa</span><br /> Junior Marketing Manager <br /> Phone:+1 243 509 867 <br /> E-mail: AnaaMasih@gmail.com
          </p>
        </div>
        <div className="people flex items-center space-x-4">
          <img src={contact1} alt="Ellie" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Ellie</span><br /> Advisor<br /> Phone:+1 324 765 909 <br /> E-mail: EllieJohn@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleContainer;
