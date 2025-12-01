
import { Brain } from 'lucide-react';

const Logo = () => {

  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-cyan-400 to-blue-600 p-4 rounded-2xl">
          <Brain className="w-10 h-10 text-white rounded-full" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          FaceDetect AI
        </h1>
        <p className="text-sm text-gray-400">Powered by Clarifai</p>
      </div>
    </div>
  );
};
export default Logo;
