import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Saitama from "../assets/Saitama.jpg";
function UserProfile1() {
  return (
    <section className="container mx-auto px-8 py-10">
      <Card shadow={false} className="border border-gray-300 rounded-2xl">
        <CardHeader shadow={false} className="h-60 !rounded-lg">
          <img
            src="https://www.material-tailwind.com/img/content2.jpg"
            alt="dark"
            height={1024}
            width={1024}
            className="w-full h-full object-center"
          />
        </CardHeader>
        <CardBody>
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar src={Saitama} alt="avatar" variant="rounded" />
              <div>
                <Typography color="blue-gray" variant="h6">
                  Rohit Dhawadkar
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  rohit.dhawadkar@gmail.com
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa fa-github text-base" />
                Github
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-twitter" />
                Twitter
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-medium" />
                Medium
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal text-gray-600 mt-6"
          >
            Passionate UI/UX designer focused on creating intuitive and engaging
            digital experiences. <br /> Driven by design thinking, creativity,
            and a love for problem-solving.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}

export default UserProfile1;
