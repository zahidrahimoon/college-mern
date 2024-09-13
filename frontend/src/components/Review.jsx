import { Swiper, SwiperSlide } from 'swiper/react';
import review1 from '../assets/pic-1.png';
import review2 from '../assets/pic-2.png';
import review3 from '../assets/pic-3.png';
import review4 from '../assets/pic-1.png'; // Reused image for example

const Review = () => {
  const reviews = [
    {
      reviewer: 'Reviewer 1',
      occupation: 'Occupation 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
      image: review1
    },
    {
      reviewer: 'Reviewer 2',
      occupation: 'Occupation 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
      image: review2
    },
    {
      reviewer: 'Reviewer 3',
      occupation: 'Occupation 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
      image: review3
    },
    {
      reviewer: 'Reviewer 4',
      occupation: 'Occupation 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
      image: review4
    },
  ];

  return (
    <div className=" max-w-5xl mx-auto p-6 bg-purple-300 shadow-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 font-serif">Reviews</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-start">
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={review.image}
                  alt={review.reviewer}
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                />
              </div>
              <div className="relative pl-6 flex-1">
                    <span className="absolute left-8 top-4 text-8xl text-gray-400">“</span>
                <p className="text-lg font-medium text-gray-800 mb-4 relative mt-[3.7rem] font-sans"> 
                  {review.content}  
                </p>
                <h3 className="text-xl font-semibold font-serif">{review.reviewer}</h3>
                <p className="text-sm text-gray-600 font-serif">{review.occupation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
