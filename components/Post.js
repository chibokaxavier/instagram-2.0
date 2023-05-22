import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

const Post = ({ img, userImg, username, caption }) => {
  const { data: session } = useSession();
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full  border h-12 w-12  p-1 mr-3 "
          alt="img"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* image */}
      <img src={img} alt="img" className="object-cover w-full " />
      {/* buttons */}
      <div className="flex justify-between pt-4 px-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <div className="rotate-45">
            <PaperAirplaneIcon className="btn" />
          </div>
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <p className="truncate p-5">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 " />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
