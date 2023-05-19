import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
    const [suggestions,setsuggestions]= useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      address: faker.location.streetAddress(),
      avatar: faker.image.avatar(),
      company: faker.company.name(),
      Dob: faker.date.birthdate(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      phone: faker.phone.number("+234 91 ### ## ##"),
      username: faker.internet.userName(),
      website: faker.internet.url(),
      id: i,
    }));
   setsuggestions(suggestions)
  }, []);
  return <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll   scrollbar-thumb-black scrollbar-track-gray-100 scrollbar-thin">

    {suggestions.map((profile)=>(
        <Story key={profile.id} img={profile.avatar} username={profile.username}/>
    ))}
  </div>;
};

export default Stories;
