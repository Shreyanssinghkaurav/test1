import React from 'react';
import { Book, Users, Heart, Feather } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">About Tales & Trail</h1>
        <p className="text-xl text-amber-700">Where Stories Come to Life</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Book className="h-8 w-8 text-amber-900 mb-4" />
          <h2 className="text-xl font-bold text-amber-900 mb-2">Our Story</h2>
          <p className="text-gray-600">
            Tales & Trail was born from a passion for storytelling and the belief that everyone has a unique story to share. We've created a space where writers can connect, inspire, and grow together.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-8 w-8 text-amber-900 mb-4" />
          <h2 className="text-xl font-bold text-amber-900 mb-2">Our Community</h2>
          <p className="text-gray-600">
            Join thousands of writers and readers who share your passion for storytelling. Our community spans across the globe, bringing diverse perspectives and unique tales.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">What Makes Us Different</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Heart className="h-8 w-8 text-amber-900 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Supportive Community</h3>
            <p className="text-gray-600">Get feedback and encouragement from fellow writers</p>
          </div>
          <div className="text-center">
            <Feather className="h-8 w-8 text-amber-900 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Creative Freedom</h3>
            <p className="text-gray-600">Write without boundaries or restrictions</p>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-amber-900 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Share your stories with readers worldwide</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Join Our Journey</h2>
        <p className="text-gray-700 mb-6">
          Whether you're a seasoned writer or just starting out, there's a place for you at Tales & Trail.
        </p>
        <button className="bg-amber-900 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition">
          Start Writing Today
        </button>
      </div>
    </div>
  );
}

export default About;