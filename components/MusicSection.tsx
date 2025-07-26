
import React, { useState } from 'react';
import { MUSIC_DATA } from '../constants';
import { PlayIcon } from './icons';

const MusicSection: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(MUSIC_DATA[0]);

  return (
    <section id="musica" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Escucha lo Nuevo
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl shadow-indigo-900/30 overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img 
              className="h-64 w-full object-cover md:h-full transition-transform duration-500" 
              src={currentTrack.artwork} 
              alt={`Artwork for ${currentTrack.title}`}
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col">
            <div className="flex-grow">
              <div className="text-sm text-indigo-400 font-bold tracking-wider">
                {currentTrack.artist}
              </div>
              <h3 className="text-2xl text-white font-bold mt-1 mb-4">
                {currentTrack.title}
              </h3>
              <ul className="space-y-2">
                {MUSIC_DATA.map(track => (
                  <li 
                    key={track.id} 
                    className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-200 ${currentTrack.id === track.id ? 'bg-indigo-600/50' : 'hover:bg-gray-700/70'}`}
                    onClick={() => setCurrentTrack(track)}
                  >
                    <div className="flex items-center">
                      <PlayIcon className={`h-5 w-5 mr-3 ${currentTrack.id === track.id ? 'text-indigo-300' : 'text-gray-400'}`} />
                      <div>
                        <p className={`font-medium ${currentTrack.id === track.id ? 'text-white' : 'text-gray-200'}`}>{track.title}</p>
                        <p className="text-sm text-gray-400">{track.artist}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
