
import React, { useState } from 'react';
import type { Video } from '../types';
import { VIDEOS_DATA } from '../constants';
import { PlayIcon, CloseIcon } from './icons';

interface VideoSectionProps {
  onVideoSelect: (videoId: string) => void;
}

const VideoCard: React.FC<{ video: Video, onSelect: () => void }> = ({ video, onSelect }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-indigo-900/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
      onClick={onSelect}
    >
      <img 
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
        alt={video.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform transition-all scale-0 group-hover:scale-100">
                <PlayIcon className="h-10 w-10 text-white" />
            </div>
        </div>
        <h3 className="text-white font-bold text-lg">{video.title}</h3>
        <p className="text-gray-300 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

const VideoSection: React.FC<VideoSectionProps> = ({ onVideoSelect }) => {
  return (
    <section id="videos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Videos Recientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS_DATA.map(video => (
            <VideoCard key={video.id} video={video} onSelect={() => onVideoSelect(video.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
