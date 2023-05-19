import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] h-16 w-16 "
        src="https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg"
      />

      <div className=" flex-1 mx-4">
        <h2 className="font-bold">Manlikexavy</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
