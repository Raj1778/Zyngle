"use client";

import React from "react";
import Image from "next/image";
import { IconHeart, IconMessageCircle2, IconRepeat } from "@tabler/icons-react";

export type PostProps = {
  author: string;
  subtitle?: string; // song name or location
  imageUrl?: string;
  caption?: string;
  tags?: string[];
};

const Post: React.FC<PostProps> = ({
  author,
  subtitle,
  imageUrl,
  caption,
  tags,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-sm p-4 space-y-3">
      {/* Author and Subtitle */}
      <div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2">
            <Image
              src="/random.jpeg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full"
            ></Image>
            <p className="text-sm font-semibold text-gray-900 dark:text-white pt-1.5 ">
              {author}
            </p>
          </div>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-neutral-400 pt-2">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 my-4">
          {caption && (
            <p className="text-md text-gray-800 dark:text-gray-300">
              {caption}
            </p>
          )}
        </div>
      </div>

      {/* Shared Image (if any) */}
      {imageUrl && (
        <div className="w-full h-120 relative rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt="Post image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Caption and Tags */}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 my-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-neutral-800">
        <button className="flex items-center gap-1 text-sm text-red-600 dark:text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 p-1 rounded">
          <IconHeart className="w-4 h-4" /> Zing
        </button>

        <button className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 p-1 rounded">
          <IconMessageCircle2 className="w-4 h-4" /> Comment
        </button>

        <button className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 p-1 rounded">
          <IconRepeat className="w-4 h-4" /> Echo
        </button>
      </div>
    </div>
  );
};

export default Post;
