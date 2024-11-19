import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const LEADERBOARD_DATA = [
  {
    rank: 1,
    username: "StoryMaster",
    stories: 45,
    likes: 1234,
    followers: 890
  },
  {
    rank: 2,
    username: "WordWeaver",
    stories: 38,
    likes: 987,
    followers: 654
  },
  {
    rank: 3,
    username: "TaleSpinner",
    stories: 32,
    likes: 876,
    followers: 543
  }
];

function Leaderboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Writer's Leaderboard</h1>
        <p className="text-xl text-amber-700">Celebrating Our Top Storytellers</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {LEADERBOARD_DATA.slice(0, 3).map((writer, index) => (
          <div key={writer.rank} className="bg-white rounded-lg shadow-md p-6 text-center">
            {index === 0 && <Trophy className="h-12 w-12 text-amber-500 mx-auto mb-4" />}
            {index === 1 && <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />}
            {index === 2 && <Medal className="h-12 w-12 text-amber-700 mx-auto mb-4" />}
            
            <h2 className="text-2xl font-bold text-amber-900 mb-2">{writer.username}</h2>
            <div className="space-y-2 text-gray-600">
              <p>{writer.stories} Stories</p>
              <p>{writer.likes} Likes</p>
              <p>{writer.followers} Followers</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-amber-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Rank</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Writer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Stories</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Likes</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Followers</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {LEADERBOARD_DATA.map((writer) => (
              <tr key={writer.rank} className="hover:bg-amber-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{writer.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {writer.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {writer.stories}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {writer.likes}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {writer.followers}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;