import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      {/* Main Hero Section with Next.js Image */}
      <div className="bg-gray-200 h-[700px] pb-[100px] rounded-lg flex justify-center items-center relative z-0">
        <div className="w-full h-full rounded-lg items-center justify-center flex flex-col relative">
          {/* Use Next.js Image Component */}
          <div className="relative w-full h-full">
            <Image
              src="/assets/parking.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="text-center text-white bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-5xl font-bold mb-4">Reserve Your Parking, Anytime, Anywhere</h1>
            <p className="text-lg">Find a spot, book it in seconds, and park hassle-free.</p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-3 gap-6 mt-12 px-6">
        <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-4xl font-semibold text-left mb-6">Who We Are</h2>
          <p className="text-xl text-gray-700 text-left">
            We are a team of passionate innovators dedicated to solving parking problems. Our mission is to make parking easy, accessible, and stress-free for everyone. With our app, you can book parking in advance, find open spots near your destination, and save time on the road.
          </p>
        </div>
      </div>

      {/* Mission/Vision Section */}
      <div className="grid grid-cols-3 gap-6 mt-12 px-6">
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-4xl font-semibold text-left mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 text-left">
            Our mission is to revolutionize the parking experience by offering a seamless platform that allows drivers to easily find and reserve parking spots, ensuring peace of mind and efficiency for every journey.
          </p>
        </div>
        <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-4xl font-semibold text-left mb-6">Our Vision</h2>
          <p className="text-xl text-gray-700 text-left">
            Our vision is to become the world’s leading parking reservation app, helping millions of drivers save time and reduce the stress of finding parking. We aim to make urban areas more accessible and less congested by optimizing parking space usage.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section - Converted into Cards */}
      <div className="bg-white mt-12 px-6 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Why Choose Us?</h2>
        <div className="flex space-x-8 justify-center">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4">Instant Reservations</h3>
            <p className="text-lg text-gray-700 text-center">
              Reserve your parking spot in seconds, saving time and hassle. No more circling the block looking for an open space.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4">Find Spots Near You</h3>
            <p className="text-lg text-gray-700 text-center">
              Our app shows you available spots near your location or destination, ensuring you never waste time searching for parking again.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4">Guaranteed Parking</h3>
            <p className="text-lg text-gray-700 text-center">
              Enjoy peace of mind with guaranteed parking spots, so you never have to worry about availability again.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4">Affordable Pricing</h3>
            <p className="text-lg text-gray-700 text-center">
              We offer competitive pricing with clear options, so you always know what you're paying for when reserving a spot.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-white mt-12 px-6 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <div className="flex space-x-8 justify-center">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <p className="text-lg text-gray-700">
              "This app saved me so much time! I never have to worry about finding parking anymore." - Alex G.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <p className="text-lg text-gray-700">
              "So convenient and easy to use. I can book my parking ahead of time and focus on other things." - Maria P.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <p className="text-lg text-gray-700">
              "I love how easy it is to find parking spots near my work. The app is a lifesaver!" - John T.
            </p>
          </div>
        </div>
      </div>

      {/* Partners and Benefits Section */}
      <div className="bg-gray-100 mt-12 px-6 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Partners & Benefits</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-4">Café & Restaurant Discounts</h3>
            <p className="text-lg text-gray-700 text-center">
              Earn points every time you reserve parking! Use those points for discounts at participating cafes and restaurants.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-4">Exclusive Rewards</h3>
            <p className="text-lg text-gray-700 text-center">
              Redeem your points for free parking, meals, and other exclusive rewards from our partners.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-4">Partner Locations</h3>
            <p className="text-lg text-gray-700 text-center">
              Find a list of cafes and restaurants where you can enjoy discounts by using your parking points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;