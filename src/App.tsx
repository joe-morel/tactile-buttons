import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 p-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Tactile Buttons
      </h1>
      <p className="text-slate-600">Tailwind is working.</p>
      <button
        type="button"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
      >
        Primary token test
      </button>
    </main>
  );
}

export default App;
