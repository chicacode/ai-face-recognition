import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-4 my-2.5 pb-4 align-middle justify-center">
      <div className="relative bg-gradient-to-br from-slate-400 to-blue-900 p-4 rounded-2xl">
        <Brain className="w-10 h-10 text-white rounded-full" />
      </div>

      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-400 to-blue-900 bg-clip-text text-transparent">
          FaceDetect AI
        </h1>
        <p className="text-sm text-gray-400">Powered by Clarifai</p>
      </div>
    </div>
  );
};
export default Logo;
