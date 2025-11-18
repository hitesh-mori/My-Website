import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProjectDetails from "./components/ProjectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

// Animated background gradient
const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
    animation: gradientMove 20s ease-in-out infinite;
  }

  @keyframes gradientMove {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

// Custom Cursor
const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.5;

  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, .clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          {/* Custom Cursor */}
          <CursorDot
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: isHovering ? 2.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />
          <CursorRing
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.8 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              mass: 0.8,
            }}
          />
          <GradientBackground />
          <ContentWrapper>
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home openModal={openModal} setOpenModal={setOpenModal} />} />
                <Route path="/projects" element={<Projects openModal={openModal} setOpenModal={setOpenModal} />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </AnimatePresence>
          </ContentWrapper>
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
          <Analytics />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
