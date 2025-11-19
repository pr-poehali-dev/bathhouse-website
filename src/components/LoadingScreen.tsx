import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center transition-opacity duration-500"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/5876be04-fd64-4c1b-af84-bda0b571aae6.jpg')`,
        opacity: isLoading ? 1 : 0,
      }}
    >
      <div className="flex flex-col items-center justify-center animate-fade-in">
        <img
          src="https://cdn.poehali.dev/files/6f8c8272-6fdd-47af-9923-1141312fd6dc.jpg"
          alt="Королёвские бани"
          className="w-64 md:w-96 animate-scale-in drop-shadow-2xl"
        />
        <div className="mt-8 flex space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
