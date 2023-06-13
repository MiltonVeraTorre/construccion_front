//Game/GetData
// {
//   "iIdGameStats": 0,
//   "iIdUser": 1,
//   "iMaxPuntaje": 0,
//   "iVidas": 0
// }

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/Tetris.loader.js",
    dataUrl: "assets/Tetris.data",
    frameworkUrl: "assets/Tetris.framework.js",
    codeUrl: "assets/Tetris.wasm",
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Unity unityProvider={unityProvider} className="w-full h-full" />
    </div>
  );
}

