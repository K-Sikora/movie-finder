"use client";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 10;
        if (nextProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextProgress;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen -mt-20">
      <div className="loading-bar">
        <LoadingBar
          color="hsl(264, 56%, 45%)"
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />
      </div>
    </div>
  );
}
