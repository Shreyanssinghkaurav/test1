import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

function Social() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Connect With Us</h1>
        <p className="text-xl text-amber-700">Join our community across social media</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="#instagram"
          className="bg-white rounded-lg shadow-md p-8 flex items-center space-x-4 hover:shadow-lg transition"
        >
          <Instagram className="h-12 w-12 text-pink-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Instagram</h2>
            <p className="text-gray-600">Follow our daily story highlights</p>
          </div>
        </a>

        <a
          href="#facebook"
          className="bg-white rounded-lg shadow-md p-8 flex items-center space-x-4 hover:shadow-lg transition"
        >
          <Facebook className="h-12 w-12 text-blue-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Facebook</h2>
            <p className="text-gray-600">Join our writing community</p>
          </div>
        </a>

        <a
          href="#twitter"
          className="bg-white rounded-lg shadow-md p-8 flex items-center space-x-4 hover:shadow-lg transition"
        >
          <Twitter className="h-12 w-12 text-blue-400" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Twitter</h2>
            <p className="text-gray-600">Get the latest updates</p>
          </div>
        </a>

        <a
          href="#youtube"
          className="bg-white rounded-lg shadow-md p-8 flex items-center space-x-4 hover:shadow-lg transition"
        >
          <Youtube className="h-12 w-12 text-red-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">YouTube</h2>
            <p className="text-gray-600">Watch writing tips and stories</p>
          </div>
        </a>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Newsletter</h2>
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-amber-900 text-white rounded-md hover:bg-amber-800 transition"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Get weekly writing prompts and community updates
          </p>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>Contact us at: contact@talesandtrail.com</p>
      </div>
    </div>
  );
}

export default Social;