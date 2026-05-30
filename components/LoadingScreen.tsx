"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#f8f9ff] via-[#ede9fe] to-[#dbeafe] dark:from-[#0d0d1a] dark:via-[#1a1035] dark:to-[#0f172a]"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-violet-500 opacity-30 blur-sm"
              />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-purple-500/40">
                <span className="text-white text-3xl font-black">J</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-extrabold gradient-text mb-1">
              Joy Ria Sihombing
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Data Analyst · AI Engineer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                style={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-violet-600 rounded-full transition-all duration-100"
              />
            </div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-gray-400 dark:text-gray-500 text-center mt-3"
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
