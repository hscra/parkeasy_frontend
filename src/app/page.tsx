import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      {/* Main Hero Section with Next.js Image */}
      <div className="relative bg-gray-200 h-[700px] pb-[100px] flex justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/parking.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Parking Lot"
          />
        </div>

        {/* Text Section */}
        <div className="absolute bottom-12 left-12 z-10 text-left">
          <h1
            className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 text-transparent bg-clip-text"
            style={{ fontFamily: 'Galgo-Bold' }}
          >
            Reserve Your Parking, Anytime, Anywhere
          </h1>
          <p className="text-3xl text-white">
            Find a spot, book it in seconds, and park hassle-free.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-3 gap-6 mt-12 px-6">
        <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-5xl font-semibold text-left mb-6 text-blue-600">Who Are We?</h2>
          <p className="text-xl text-gray-700 text-left">
            We are a team of passionate innovators dedicated to solving parking problems. Our mission is to make parking easy, accessible, and stress-free for everyone. 
          </p>
          <p className="text-xl text-gray-700 text-left mt-4">
            With our app, you can book parking in advance, find open spots near your destination, and save time on the road. Whether you're heading to work, a social event, or just running errands, our goal is to simplify your parking experience and help you focus on what truly matters – your day ahead.
          </p>
          <p className="text-xl text-gray-700 text-left mt-4">
            At our core, we believe in the power of technology to ease everyday challenges, and we're committed to delivering a solution that benefits both drivers and businesses by optimizing parking availability in urban areas.
          </p>
        </div>
      </div>

      {/* Mission/Vision Section */}
      <div className="grid grid-cols-3 gap-6 mt-12 px-6">
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-5xl font-semibold text-left mb-6 text-blue-600">Our Mission</h2>
          <p className="text-xl text-gray-700 text-left">
            Our mission is to revolutionize the parking experience by offering a seamless platform that allows drivers to easily find and reserve parking spots, ensuring peace of mind and efficiency for every journey. We strive to create a frictionless experience that is both user-friendly and reliable.
          </p>
          <p className="text-xl text-gray-700 text-left mt-4">
            We are focused on using cutting-edge technology to tackle the global parking shortage problem. Our mission is not only to offer solutions for individual drivers but also to assist businesses and urban planners in making parking more efficient and accessible.
          </p>
        </div>
        <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-5xl font-semibold text-left mb-6 text-blue-600">Our Vision</h2>
          <p className="text-xl text-gray-700 text-left">
            Our vision is to become the world’s leading parking reservation app, helping millions of drivers save time and reduce the stress of finding parking. We aim to make urban areas more accessible and less congested by optimizing parking space usage, especially in busy cities where parking can often be a significant barrier.
          </p>
          <p className="text-xl text-gray-700 text-left mt-4">
            We envision a future where parking is no longer a challenge, where drivers can easily book their spot, know exactly where they're going, and focus on their destination. We want to be at the forefront of shaping the future of parking, improving not only the way people park but also the way cities operate.
          </p>
        </div>
      </div>

      {/* See How Easy It Is Section */}
      <div className="bg-white mt-12 px-6 py-12">
        <h2
          className="text-4xl font-semibold text-center mb-8 text-blue-600"
        >
          See How Easy It Is
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              1. Choose Your Location
            </h3>
            <p className="text-lg text-gray-700">
              Explore over 2000 parking spots available in real-time.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              2. Complete Payment
            </h3>
            <p className="text-lg text-gray-700">
              Use our secure payment gateway for a quick checkout process.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              3. Park Away
            </h3>
            <p className="text-lg text-gray-700">
              Arrive and enjoy hassle-free parking. Your spot is ready for you!
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Converted into Cards */}
      <div className="bg-white mt-12 px-6 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8 text-blue-600">Why Choose Us?</h2>
        <div className="flex space-x-8 justify-center">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-600">Instant Reservations</h3>
            <p className="text-lg text-gray-700 text-center">
              Reserve your parking spot in seconds, saving time and hassle. No more circling the block looking for an open space.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-700">Find Spots Near You</h3>
            <p className="text-lg text-gray-700 text-center">
              Our app shows you available spots near your location or destination, ensuring you never waste time searching for parking again.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-800">Guaranteed Parking</h3>
            <p className="text-lg text-gray-700 text-center">
              Enjoy peace of mind with guaranteed parking spots, so you never have to worry about availability again.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-900">Affordable Pricing</h3>
            <p className="text-lg text-gray-700 text-center">
              We offer competitive pricing with clear options, so you always know what you're paying for when reserving a spot.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-white mt-12 px-6 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8 text-blue-700">What Our Customers Say</h2>
        <div className="flex space-x-8 justify-center">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <p className="text-lg text-gray-700">
              "This app saved me so much time! I never have to worry about finding parking anymore."
            </p>
            <p className="text-lg text-blue-700"> - Alex G. </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <p className="text-lg text-grey-700">
              "So convenient and easy to use. I can book my parking ahead of time and focus on other things." 
            </p>
            <p className="text-lg text-blue-700"> - Maria P. </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[300px]">
            <p className="text-lg text-grey-700">
              "I love how easy it is to find parking spots near my work. The app is a lifesaver!"
            </p>
            <p className="text-lg text-blue-700"> - John T. </p>
          </div>
        </div>
      </div>

      {/* Partners and Benefits Section */}
      <div className="bg-gray-100 mt-12 px-6 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8 text-blue-800">Our Partners & Benefits</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-600">Café & Restaurant Discounts</h3>
            <p className="text-lg text-gray-700 text-center">
              Earn points every time you reserve parking! Use those points for discounts at participating cafes and restaurants.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-700">Exclusive Rewards</h3>
            <p className="text-lg text-gray-700 text-center">
              Redeem your points for free parking, meals, and other exclusive rewards from our partners.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-800">Partner Locations</h3>
            <p className="text-lg text-gray-700 text-center">
              Find a list of cafes and restaurants where you can enjoy discounts by using your parking points.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <div className="container mx-auto px-6">
          <p className="text-lg">Contact Us: <a href="mailto:contact@yourcompany.com" className="text-blue-400">contact@yourcompany.com</a></p>
          <p className="text-sm mt-2">© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;