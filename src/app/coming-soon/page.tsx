"use client";

import { Rocket, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function ComingSoonPage() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 45);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 shadow-sm p-8 text-center">
        {/* ICON */}
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
          <Rocket className="text-green-500" size={28} />
        </div>

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Something Amazing is Coming
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          We're working hard to bring you something extraordinary.
          Stay tuned for the launch of our exciting new feature!
        </p>

        {/* COUNTDOWN */}
        <div className="grid grid-cols-4 gap-4 my-8">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>

        {/* NOTIFY */}
        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
          Get Notified When We Launch
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Be the first to know when we go live.
        </p>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Enter your email"
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm outline-none"
            />
          </div>
          <button className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:opacity-90">
            Notify Me
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-6 pt-4 border-t text-xs text-gray-500 dark:border-gray-800">
          Want to learn more?{" "}
          <a
            href="#"
            className="text-green-500 hover:underline"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl py-4">
      <div className="text-2xl font-semibold text-green-500">
        {value}
      </div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  return {
    days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(
      Math.floor((diff / (1000 * 60 * 60)) % 24),
      0
    ),
    minutes: Math.max(
      Math.floor((diff / (1000 * 60)) % 60),
      0
    ),
    seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
  };
}
