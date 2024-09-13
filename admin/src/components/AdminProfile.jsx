import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';// Use Heroicons for the camera icon
import defaultProfileImage from '../assets/pic-1.png';
import defaultBackgroundImage from '../assets/college-hero.jfif';

const AdminProfile = () => {
  // States for holding the profile and banner image
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [backgroundImage, setBackgroundImage] = useState(defaultBackgroundImage);

  // States for holding the editable data
  const [name, setName] = useState('Dr. John Smith');
  const [designation, setDesignation] = useState('Principal, XYZ College');
  const [yearsInLeadership, setYearsInLeadership] = useState('15+');
  const [studentsMentored, setStudentsMentored] = useState('5,000+');
  const [researchPapers, setResearchPapers] = useState('30+');
  const [about, setAbout] = useState(
    'Dr. John Smith has been leading XYZ College for over 15 years with a focus on academic excellence and fostering a collaborative learning environment. He is dedicated to guiding students and staff to achieve their full potential through innovative education practices and a strong commitment to inclusivity.'
  );
  const [email, setEmail] = useState('john.smith@xyzcollege.edu');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [office, setOffice] = useState('Room 203, Main Building');

  // Handle Profile Image Upload
  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Banner Image Upload
  const handleBannerImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Header Section with Background Image */}
        <div className="relative">
          <img
            src={backgroundImage}
            alt="Admin Background"
            className="h-48 w-full object-cover"
          />
          <div className="absolute right-4 top-4 bg-blue-600 p-2 rounded-full cursor-pointer">
            <label htmlFor="bannerUpload" title="Upload Banner">
              <FaCamera className="w-6 h-6 text-white" />
            </label>
            <input
              id="bannerUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleBannerImageUpload}
            />
          </div>

          {/* Profile Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <img
              src={profileImage}
              alt="Admin Profile"
              className="rounded-full border-4 border-gray-900 h-32 w-32 object-cover"
            />
            {/* Image Upload Icon */}
            <div className="absolute right-0 bottom-0 bg-blue-600 p-2 rounded-full cursor-pointer">
              <label htmlFor="profileUpload" title="Upload Profile Picture">
                <FaCamera className="w-6 h-6 text-white" />
              </label>
              <input
                id="profileUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageUpload}
              />
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="text-center mt-20 px-6 py-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-3xl font-semibold bg-transparent text-center border-none outline-none text-white"
          />
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="text-gray-400 mt-2 bg-transparent text-center border-none outline-none"
          />

          {/* Admin Stats */}
          <div className="mt-6 flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <input
                type="text"
                value={yearsInLeadership}
                onChange={(e) => setYearsInLeadership(e.target.value)}
                className="text-2xl font-bold bg-transparent text-center border-none outline-none text-white"
              />
              <p className="text-gray-400">Years in Leadership</p>
            </div>
            <div className="text-center">
              <input
                type="text"
                value={studentsMentored}
                onChange={(e) => setStudentsMentored(e.target.value)}
                className="text-2xl font-bold bg-transparent text-center border-none outline-none text-white"
              />
              <p className="text-gray-400">Students Mentored</p>
            </div>
            <div className="text-center">
              <input
                type="text"
                value={researchPapers}
                onChange={(e) => setResearchPapers(e.target.value)}
                className="text-2xl font-bold bg-transparent text-center border-none outline-none text-white"
              />
              <p className="text-gray-400">Research Papers</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8 text-left px-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="text-gray-300 mt-4 bg-transparent leading-relaxed w-full border-none outline-none"
              rows="4"
            />
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-left px-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-4 space-y-2">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-400 bg-transparent border-none outline-none w-full"
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-gray-400 bg-transparent border-none outline-none w-full"
              />
              <input
                type="text"
                value={office}
                onChange={(e) => setOffice(e.target.value)}
                className="text-gray-400 bg-transparent border-none outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
