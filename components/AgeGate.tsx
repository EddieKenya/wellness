"use client";
import { useState, useEffect } from "react";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // New state to track if we've checked

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified) {
      setIsVerified(true);
    }
    setIsLoaded(true); // Now we know the check is done
  }, []);

  // While we are checking local storage, show nothing (or a blank screen)
  // instead of the Age Gate
  if (!isLoaded) {
    return null; 
  }

  if (!isVerified) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 text-white">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Age Verification Required</h2>
          <p className="mb-8 text-slate-300">
            This platform contains content intended for adults. 
            Please confirm you are 18 years of age or older.
          </p>
          <button
            onClick={() => {
              localStorage.setItem("ageVerified", "true");
              setIsVerified(true);
            }}
            className="w-full bg-teal-600 py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
          >
            I am 18+
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}