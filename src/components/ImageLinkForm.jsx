import { Scan, Link2, Sparkles } from 'lucide-react';

//https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_.jpg
// https://samples.clarifai.com/face-det.jpg
//https://clarifai.com/clarifai/main/models/face-detection?tab=overview

const ImageLinkForm = ({ onDetect, onInputChanget, loading}) => {
    return (
       <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Scan className="w-6 h-6 text-cyan-400" />
          Detect Faces in Images
        </h2>
        <p className="text-gray-400 mb-6">
          Paste an image URL below and let our AI detect faces instantly
        </p>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              onChange={onInputChanget}
              placeholder="https://example.com/image.jpg"
              className="w-full pl-12 pr-4 py-4 bg-slate-400/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>
          <button
            onClick={onDetect}
            disabled={loading}
            className="px-8 py-4 bg-gradient-to-r from-slate-500 to-blue-900 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            {loading ? 'Detecting...' : 'Detect'}
          </button>
        </div>
      </div>
    </div>
    )
}

export default ImageLinkForm;