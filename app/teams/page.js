"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const expertise = [
  "Front-end Developer",
  "Back-end Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Network Engineer",
  "Cybersecurity Analyst",
  "Machine Learning Engineer",
];

const Services = ({ altText, caption, quality, imagePath, description }) => {
  return (
    <div className="mb-12 p-4 text-center">
      <h3 className="font-semibold text-sm text-black mt-4 mb-3 lg:text-lg">
        {caption}
      </h3>
      <p className="text-sm text-gray-600 mb-3 lg:text-base">{description}</p>

      <div className="flex justify-center items-center rounded-md shadow-md overflow-hidden mx-auto">
        <Image
          loading="eager"
          quality={quality}
          alt={altText}
          src={imagePath}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

const ContentTeam = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=7"
        );
        console.log(response.data.results);

        // Menambahkan expertise setiap user
        const usersWithExpertise = response.data.results.map((user, index) => ({
          ...user,
          expertise: expertise[index],
        }));

        setUsers(usersWithExpertise);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around p-4">
        {users.map((user, index) => (
          <div key={index} className="text-center m-4 p-4 border rounded-md">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-20 h-20 mx-auto mb-2 rounded-full"
            />
            <p className="text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</p>
            <p className="text-black">{user.expertise}</p>
            <p className="text-blue-700 underline">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <>
      <section id="services" className="pt-28 text-center md:pt-28 sm:pt-30">
        <div className="max-w-6xl px-5 mx-auto mt-0 text-center">
          <div className="px-4 mb-10">
            <h2 className="font-bold text-blue-950 text-4xl mb-5 text-center lg:text-5xl lg:mb-5">
              Meet our lovely teams
            </h2>
            <p className="text-xs mt-1 lg:text-base">
              Our team is the heartbeat of our success. Together, we are united
              by a passion for excellence and a shared vision to deliver
              cutting-edge solutions for our clients.
            </p>
          </div>
        </div>
      </section>

      <ContentTeam />
    </>
  );
};

export default TeamSection;
