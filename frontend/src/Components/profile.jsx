import React from "react";
import Saitama from "../assets/Saitama.jpg";

function UserProfile1() {
  return (
    <section className="container mx-auto px-8 py-10">
      <div className="border border-gray-300 rounded-2xl shadow-md">
        {/* Header Section */}
        <div className="h-60 rounded-lg overflow-hidden">
          <img
            src="https://www.material-tailwind.com/img/content2.jpg"
            alt="dark"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body Section */}
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <img
                src={Saitama}
                alt="avatar"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h6 className="text-blue-gray-800 text-lg font-semibold">
                  Rohit Dhawadkar
                </h6>
                <p className="text-gray-600 text-sm">
                  rohit.dhawadkar@gmail.com
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow">
                <i className="fa fa-github text-base" />
                Github
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow">
                <i className="fa-brands fa-twitter" />
                Twitter
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow">
                <i className="fa-brands fa-medium" />
                Medium
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-6">
            Passionate UI/UX designer focused on creating intuitive and engaging
            digital experiences. <br /> Driven by design thinking, creativity,
            and a love for problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserProfile1;
