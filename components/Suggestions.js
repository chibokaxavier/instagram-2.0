import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
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
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5 ">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button> See All</button>
      </div>

      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10  rounded-full border p-[2px]"
            src={suggestion.avatar}
          />
          <div className=" flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {suggestion.company}
            </h3>
          </div>

          <button className="text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
