import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenTool, Image as ImageIcon, FileText } from 'lucide-react';

function WriteStory() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showDrafts, setShowDrafts] = useState(false);
  const [drafts, setDrafts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem('drafts') || '[]');
    setDrafts(savedDrafts);
  }, []);

  const handlePublish = (e) => {
    e.preventDefault();
    const newStory = {
      id: Date.now(),
      title,
      content,
      author: 'Current User',
      likes: 0,
      comments: [],
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba'
    };
    
    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    localStorage.setItem('stories', JSON.stringify([newStory, ...stories]));
    
    // Clear draft if it was saved
    const updatedDrafts = drafts.filter(draft => draft.title !== title);
    localStorage.setItem('drafts', JSON.stringify(updatedDrafts));
    
    navigate('/stories');
  };

  const handleSaveDraft = () => {
    if (!title && !content) return;
    
    const draft = {
      id: Date.now(),
      title: title || 'Untitled Draft',
      content,
      updatedAt: new Date().toISOString()
    };
    
    const updatedDrafts = [draft, ...drafts.filter(d => d.title !== draft.title)];
    setDrafts(updatedDrafts);
    localStorage.setItem('drafts', JSON.stringify(updatedDrafts));
    
    alert('Draft saved successfully!');
  };

  const loadDraft = (draft) => {
    setTitle(draft.title);
    setContent(draft.content || '');
    setShowDrafts(false);
  };

  const deleteDraft = (draftId) => {
    const updatedDrafts = drafts.filter(draft => draft.id !== draftId);
    setDrafts(updatedDrafts);
    localStorage.setItem('drafts', JSON.stringify(updatedDrafts));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <PenTool className="h-6 w-6 text-amber-900" />
          <h1 className="text-3xl font-bold text-amber-900">Write Your Story</h1>
        </div>
        <button
          onClick={() => setShowDrafts(!showDrafts)}
          className="flex items-center space-x-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-md hover:bg-amber-200"
        >
          <FileText className="h-5 w-5" />
          <span>My Drafts ({drafts.length})</span>
        </button>
      </div>

      {showDrafts ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Your Drafts</h2>
          {drafts.length === 0 ? (
            <p className="text-gray-600 text-center">No drafts saved yet</p>
          ) : (
            <div className="space-y-4">
              {drafts.map(draft => (
                <div
                  key={draft.id}
                  className="flex items-center justify-between p-4 border rounded-md hover:bg-amber-50"
                >
                  <div>
                    <h3 className="font-semibold">{draft.title}</h3>
                    <p className="text-sm text-gray-500">
                      Last updated: {new Date(draft.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => loadDraft(draft)}
                      className="text-amber-900 hover:text-amber-700 px-3 py-1 rounded-md border border-amber-900"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => deleteDraft(draft.id)}
                      className="text-red-600 hover:text-red-800 px-3 py-1 rounded-md border border-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handlePublish} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                placeholder="Enter your story title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-amber-900 hover:text-amber-700">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                placeholder="Start writing your story..."
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="px-4 py-2 border border-amber-900 text-amber-900 rounded-md hover:bg-amber-50"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-amber-900 text-white rounded-md hover:bg-amber-800"
              >
                Publish Story
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default WriteStory;