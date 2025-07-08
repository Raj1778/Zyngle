"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Lock,
  Bell,
  Eye,
  Palette,
  Shield,
  Download,
  Trash2,
  ChevronRight,
  Camera,
  Mail,
  Phone,
  MapPin,
  Globe,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Smartphone,
  Monitor,
} from "lucide-react";

const settingSections = [
  {
    id: "account",
    title: "Account",
    icon: User,
    items: [
      {
        id: "profile",
        label: "Edit Profile",
        description: "Update your profile information",
      },
      {
        id: "email",
        label: "Email Settings",
        description: "Change your email address",
      },
      {
        id: "phone",
        label: "Phone Number",
        description: "Update your phone number",
      },
      {
        id: "location",
        label: "Location",
        description: "Set your location preferences",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    icon: Shield,
    items: [
      {
        id: "password",
        label: "Change Password",
        description: "Update your password",
      },
      {
        id: "two-factor",
        label: "Two-Factor Authentication",
        description: "Add extra security to your account",
      },
      {
        id: "profile-privacy",
        label: "Profile Privacy",
        description: "Control who can see your profile",
      },
      {
        id: "activity",
        label: "Activity Status",
        description: "Show when you're active",
      },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    items: [
      {
        id: "push",
        label: "Push Notifications",
        description: "Receive notifications on your device",
      },
      {
        id: "email-notif",
        label: "Email Notifications",
        description: "Get updates via email",
      },
      {
        id: "sound",
        label: "Sound & Vibration",
        description: "Customize notification sounds",
      },
      {
        id: "frequency",
        label: "Notification Frequency",
        description: "How often you receive notifications",
      },
    ],
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: Palette,
    items: [
      {
        id: "theme",
        label: "Theme",
        description: "Choose between light and dark mode",
      },
      {
        id: "display",
        label: "Display Settings",
        description: "Adjust font size and display options",
      },
      {
        id: "language",
        label: "Language",
        description: "Select your preferred language",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Storage",
    icon: Download,
    items: [
      {
        id: "download",
        label: "Download Data",
        description: "Download a copy of your data",
      },
      {
        id: "storage",
        label: "Storage Usage",
        description: "See how much storage you're using",
      },
      {
        id: "auto-sync",
        label: "Auto-Sync",
        description: "Automatically sync your data",
      },
    ],
  },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account");
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    soundEnabled: true,
    autoSync: true,
    twoFactor: false,
    profilePrivacy: "public",
    activityStatus: true,
  });
  const [userInfo, setUserInfo] = useState({
    email: "raj@example.com",
    phone: "+91 98765 43210",
    location: "India",
    language: "English",
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const updateUserInfo = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
        <h3 className="text-xl font-semibold mb-6 text-white">
          Profile Information
        </h3>

        <div className="flex items-center gap-6 mb-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800">
              <Image
                src="/Drive.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
              <Camera size={14} />
            </button>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Raj</h4>
            <p className="text-zinc-400">Update your profile picture</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Email Address
            </label>
            <div className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-700">
              <Mail size={16} className="text-purple-400" />
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => updateUserInfo("email", e.target.value)}
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Phone Number
            </label>
            <div className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-700">
              <Phone size={16} className="text-purple-400" />
              <input
                type="tel"
                value={userInfo.phone}
                onChange={(e) => updateUserInfo("phone", e.target.value)}
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Location</label>
            <div className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-700">
              <MapPin size={16} className="text-purple-400" />
              <input
                type="text"
                value={userInfo.location}
                onChange={(e) => updateUserInfo("location", e.target.value)}
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
        <h3 className="text-xl font-semibold mb-6 text-white">
          Security Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Lock className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">
                  Two-Factor Authentication
                </p>
                <p className="text-sm text-zinc-400">
                  Add extra security to your account
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("twoFactor")}
              className={`w-12 h-6 rounded-full transition-all duration-200 ${
                settings.twoFactor
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  settings.twoFactor ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Eye className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">Activity Status</p>
                <p className="text-sm text-zinc-400">Show when you're active</p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("activityStatus")}
              className={`w-12 h-6 rounded-full transition-all duration-200 ${
                settings.activityStatus
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  settings.activityStatus ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">Profile Privacy</p>
                <p className="text-sm text-zinc-400">
                  Control who can see your profile
                </p>
              </div>
            </div>
            <select
              value={settings.profilePrivacy}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  profilePrivacy: e.target.value,
                }))
              }
              className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
        <h3 className="text-xl font-semibold mb-6 text-white">
          Notification Preferences
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Smartphone className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-sm text-zinc-400">
                  Receive notifications on your device
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("notifications")}
              className={`w-12 h-6 rounded-full transition-all duration-200 ${
                settings.notifications
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  settings.notifications ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3">
              {settings.soundEnabled ? (
                <Volume2 className="text-purple-400" size={20} />
              ) : (
                <VolumeX className="text-purple-400" size={20} />
              )}
              <div>
                <p className="text-white font-medium">Sound & Vibration</p>
                <p className="text-sm text-zinc-400">
                  Customize notification sounds
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("soundEnabled")}
              className={`w-12 h-6 rounded-full transition-all duration-200 ${
                settings.soundEnabled
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  settings.soundEnabled ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
        <h3 className="text-xl font-semibold mb-6 text-white">
          Appearance Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3">
              {settings.darkMode ? (
                <Moon className="text-purple-400" size={20} />
              ) : (
                <Sun className="text-purple-400" size={20} />
              )}
              <div>
                <p className="text-white font-medium">Dark Mode</p>
                <p className="text-sm text-zinc-400">
                  Switch between light and dark theme
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("darkMode")}
              className={`w-12 h-6 rounded-full transition-all duration-200 ${
                settings.darkMode
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  settings.darkMode ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">Language</p>
                <p className="text-sm text-zinc-400">
                  Select your preferred language
                </p>
              </div>
            </div>
            <select
              value={userInfo.language}
              onChange={(e) => updateUserInfo("language", e.target.value)}
              className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
        <h3 className="text-xl font-semibold mb-6 text-white">
          Data & Storage
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Download className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">Auto-Sync</p>
                <p className="text-sm text-zinc-400">
                  Automatically sync your data
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("autoSync")}
              className={`w-12 h-6 rounded-full transition-all duration-200 ${
                settings.autoSync
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  settings.autoSync ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <button className="w-full flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-900/70 transition-colors duration-200">
            <div className="flex items-center gap-3">
              <Download className="text-purple-400" size={20} />
              <div className="text-left">
                <p className="text-white font-medium">Download Your Data</p>
                <p className="text-sm text-zinc-400">Get a copy of your data</p>
              </div>
            </div>
            <ChevronRight className="text-zinc-400" size={20} />
          </button>

          <div className="p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">Storage Usage</p>
                <p className="text-sm text-zinc-400">2.4 GB of 5 GB used</p>
              </div>
            </div>
            <div className="w-full bg-zinc-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                style={{ width: "48%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case "account":
        return renderAccountSettings();
      case "privacy":
        return renderPrivacySettings();
      case "notifications":
        return renderNotificationSettings();
      case "appearance":
        return renderAppearanceSettings();
      case "data":
        return renderDataSettings();
      default:
        return renderAccountSettings();
    }
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-zinc-400">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 sticky top-8">
              <nav className="space-y-2">
                {settingSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">{renderSectionContent()}</div>
        </div>

        {/* Danger Zone */}
        <div className="mt-12 bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
          <h3 className="text-xl font-semibold mb-4 text-red-400">
            Danger Zone
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Delete Account</p>
              <p className="text-sm text-zinc-400">
                Permanently delete your account and all data
              </p>
            </div>
            <button className="flex  items-center gap-2 px-4 py-2 cursor-pointer  bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200">
              <Trash2 size={16} />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
