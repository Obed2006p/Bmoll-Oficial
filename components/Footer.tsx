import React from 'react';
import { YouTubeIcon, InstagramIcon, SpotifyIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src="https://yt3.googleusercontent.com/mEOl30uM8e5c7Za7rQNkrjrlTnCUjIvGeVXzt5epyBlbaFBqZEht0vqJS7ZZwWrkjDcqEOxqqA=s160-c-k-c0x00ffffff-no-rj" alt="B-MOLL Logo" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-xl text-red-500 tracking-wider">B-MOLL</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} B-MOLL. Todos los derechos reservados.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <YouTubeIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Spotify" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <SpotifyIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;