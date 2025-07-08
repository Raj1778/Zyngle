"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Edit2,
  Camera,
  MapPin,
  CalendarDays,
  Heart,
  MessageCircle,
  Share,
} from "lucide-react";

const dummyPosts = [
  {
    id: 1,
    image: "/mountain.jpg",
    title: "Mountain Adventure",
    description:
      "Incredible sunrise from the peak! The journey was challenging but totally worth it. Nature never fails to amaze me.",
    likes: 234,
    comments: 18,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    image: "/momo.jpg",
    title: "Homemade Momos",
    description:
      "Sunday cooking session! Made these delicious momos from scratch. The filling turned out perfect 😋",
    likes: 156,
    comments: 24,
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    image: "/citynight.jpg",
    title: "City Lights",
    description:
      "Late night walk through the city. The neon reflections on wet streets create such a moody atmosphere.",
    likes: 189,
    comments: 12,
    timestamp: "1 day ago",
  },
];

export default function ProfilePage() {
  const [bio, setBio] = useState("Just a coder trying to make it ✨");
  const [editingBio, setEditingBio] = useState(false);
  const [profilePic, setProfilePic] = useState("/Drive.jpg");

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-12">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800">
              <Image
                src={profilePic}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg">
              <Camera size={16} />
            </button>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Raj
              </h1>
              <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg">
                <Edit2 size={16} />
                Edit Profile
              </button>
            </div>

            <div className="flex gap-8 text-sm mb-6">
              <span className="flex items-center gap-2">
                <span className="text-2xl">📸</span>
                <span>
                  <strong className="text-white text-lg">26</strong> Posts
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>
                  <strong className="text-white text-lg">1.2K</strong> Followers
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">🔁</span>
                <span>
                  <strong className="text-white text-lg">180</strong> Following
                </span>
              </span>
            </div>

            <div className="mb-4">
              {editingBio ? (
                <div className="space-y-3">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="bg-zinc-800/50 backdrop-blur-sm w-full p-3 rounded-lg text-white border border-zinc-700 focus:border-purple-500 focus:outline-none transition-colors duration-200"
                    rows={3}
                  />

                  <button
                    onClick={() => setEditingBio(false)}
                    className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    Save Bio
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-zinc-300 text-lg leading-relaxed">{bio}</p>
                  <button
                    onClick={() => setEditingBio(true)}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    Edit Bio
                  </button>
                </div>
              )}
            </div>

            <div className="flex gap-6 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-purple-400" />
                <span>India</span>
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-purple-400" />
                <span>Joined Jan 2024</span>
              </span>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Recent Posts
            </h2>
            <span className="text-sm text-zinc-500">
              {dummyPosts.length} posts
            </span>
          </div>

          <div className="grid gap-8">
            {dummyPosts.map((post) => (
              <div
                key={post.id}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/30">
                      <Image
                        src={profilePic}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{post.title}</h3>
                      <p className="text-sm text-zinc-400">{post.timestamp}</p>
                    </div>
                  </div>

                  <p className="text-zinc-300 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors duration-200">
                        <Heart size={20} />
                        <span className="text-sm font-medium">
                          {post.likes}
                        </span>
                      </button>
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors duration-200">
                        <MessageCircle size={20} />
                        <span className="text-sm font-medium">
                          {post.comments}
                        </span>
                      </button>
                    </div>
                    <button className="text-zinc-400 hover:text-purple-400 transition-colors duration-200">
                      <Share size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
