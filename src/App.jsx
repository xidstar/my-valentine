import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = {
  intro: "intro",
  praise: "praise",
  admiration: "admiration",
  ask: "ask",
  no: "no",
  yes: "yes",
};

export default function App() {
  const [page, setPage] = useState(pages.intro);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff5f7] flex items-center justify-center p-4 font-normal leading-relaxed">
      <FloatingDecor />

      <AnimatePresence mode="wait">
        {page === pages.intro && (
          <Page key="intro">
            <span className="text-[4.5rem] animate-pulse">💖</span>
            <h1 className="text-4xl text-pink-500 text-center">
              Bonjour Ms. Onyera
            </h1>
            <p className="text-2xl text-gray-700 text-center">Ça va?</p>
            <Button onClick={() => setPage(pages.praise)}>Next</Button>
          </Page>
        )}

        {page === pages.praise && (
          <Page key="praise">
            <span className="text-[4.5rem] animate-wiggle">💘</span>
            <h2 className="text-3xl text-pink-500 text-center">
              In Case You Forgot...
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Just a reminder that you are kind, beautiful, endlessly inspiring, and the kind of person who makes the world feel warmer just by existing.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={() => setPage(pages.intro)}>Back</Button>
              <Button onClick={() => setPage(pages.admiration)}>Next</Button>
            </div>
          </Page>
        )}

        {page === pages.admiration && (
          <Page key="admiration">
            <span className="text-[4.5rem] animate-pulse">💕</span>
            <h2 className="text-3xl text-pink-500 text-center">
              Why You’re Amazing
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Every moment with you feels like a dream I never want to wake up from, mon amour. Your smile lights up my entire world, and your laugh is my favorite sound.
              <br />
              You make ordinary days feel extraordinary, and I’m so grateful to have you in my life. You’re not just amazing - you’re my kind of amazing.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={() => setPage(pages.praise)}>Back</Button>
              <Button onClick={() => setPage(pages.ask)}>Next</Button>
            </div>
          </Page>
        )}

        {page === pages.ask && (
          <Page key="ask">
            <span className="text-[4.5rem] animate-pulse">💗</span>
            <h2 className="text-4xl text-pink-500 text-center">
              One Important Question, piso
            </h2>
            <p className="text-lg text-gray-700 text-center">
            Even though I won’t get to spend this Valentine’s Day with you right beside me, you’re still the reason it feels special. You have a way of making everything brighter just by being you.
            <br />
            So… will you be my Valentine? 🥺
            </p>
            <div className="flex gap-4">
              <Button onClick={() => setPage(pages.yes)}>Yes 😍</Button>
              <Button variant="secondary" onClick={() => setPage(pages.no)}>No 🖕</Button>
            </div>
          </Page>
        )}

        {page === pages.no && (
          <Page key="no">
            <span className="text-[4.5rem]">😤</span>
            <h2 className="text-4xl text-pink-500 text-center">
              Stop Playing!
            </h2>
            <p className="text-lg text-gray-700 text-center">
            You really thought "No" was an option, crazy? 😄
            </p>
            <img
              src="https://media.giphy.com/media/3o7TKwmnDgQb5jemjK/giphy.gif"
              alt="Funny gif"
              className="rounded-xl shadow-lg"
            />
            <Button onClick={() => setPage(pages.yes)}>Okay fine, Yes! 🌻</Button>
          </Page>
        )}

        {page === pages.yes && (
          <Page key="yes">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-4xl text-pink-500 text-center"
            >
              Yay!!!
            </motion.h1>
            <p className="text-xl text-gray-700 text-center">Happy Valentine’s Day Baby!!! <br /> Je t'aime tellement 😘</p>
            <img
              src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif"
              alt="Celebration gif"
              className="rounded-xl shadow-xl"
            />
            <Button onClick={() => setPage(pages.intro)}>Go Back</Button>
          </Page>
        )}
      </AnimatePresence>
    </div>
  );
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.45 }}
      className="relative z-10 bg-white/90 rounded-3xl shadow-xl max-w-md w-full p-8 pt-2 flex flex-col items-center gap-4"
    >
      {children}
    </motion.div>
  );
}

function Button({ children, onClick, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-pink-500 hover:bg-pink-600 text-white"
      : "bg-white border border-pink-400 text-pink-500 hover:bg-pink-100";

  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 ${styles}`}
    >
      {children}
    </button>
  );
}

function FloatingDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "-120%", opacity: 1 }}
          transition={{
            duration: 14 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear",
          }}
          className="absolute bottom-0 text-3xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {i % 3 === 0 ? "🎈" : i % 3 === 1 ? "💖" : "🎉"}
        </motion.div>
      ))}
    </div>
  );
}
