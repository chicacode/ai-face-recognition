 import { Scan } from 'lucide-react';


 const FaceRecognition = ({imageUrl, box }) => (
    <div className="w-full max-w-4xl mx-auto">
      {imageUrl ? (
        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 shadow-2xl">
          <img
           id="inputimage"
            src={imageUrl}
            alt="Face Detection"
            className="w-full rounded-xl"
            onError={(e) => {
              e.currentTarget.src = 'https://samples.clarifai.com/face-det.jpg';
            }}
          />
          { box && (
            <div
              className="absolute border-4 border-cyan-400 rounded-lg shadow-lg"
              style={{
                top: '30%',
                left: '35%',
                width: '30%',
                height: '35%',
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
              }}
            >
              <div className="absolute -top-8 left-0 bg-slate-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Face Detected
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-slate-400/30 backdrop-blur-sm border-2 border-dashed border-slate-700 rounded-2xl p-20 text-center">
          <Scan className="w-16 h-16 text-black-600 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Enter an image URL to get started</p>
        </div>
      )}
    </div>
  );    

export default FaceRecognition;