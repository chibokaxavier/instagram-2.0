import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";

const Stories = () => {
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
    console.log(suggestions);
  }, []);
  return <div>stories</div>;
};

export default Stories;
