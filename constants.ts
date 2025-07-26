import type { Video, Product, Track } from './types';

export const VIDEOS_DATA: Video[] = [
  {
    id: 'X7HmWrbk8bo',
    title: 'Nuevo Sencillo Oficial',
    description: 'El video oficial de nuestro más reciente lanzamiento.',
  },
  {
    id: 'b_0pX-MLNx4',
    title: 'Live Session Acústica',
    description: 'Una versión íntima de nuestras canciones favoritas.',
  },
  {
    id: 'LncQmAuL2F4',
    title: 'Detrás de Cámaras',
    description: 'Un vistazo a la producción de nuestro último video.',
  },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: 'Gorra Clásica Negra',
    price: '$25.00',
    imageUrl: 'https://picsum.photos/id/1025/400/400', // A dog, but we pretend it's a hat
  },
  {
    id: 2,
    name: 'Playera Logo Blanco',
    price: '$30.00',
    imageUrl: 'https://picsum.photos/id/1080/400/400', // coffee beans, but let's imagine a t-shirt
  },
  {
    id: 3,
    name: 'Gorra Edición Limitada',
    price: '$35.00',
    imageUrl: 'https://picsum.photos/id/20/400/400',
  },
  {
    id: 4,
    name: 'Playera Gira 2024',
    price: '$30.00',
    imageUrl: 'https://picsum.photos/id/40/400/400',
  },
];

export const MUSIC_DATA: Track[] = [
  {
    id: 1,
    title: 'Ritmos de la Noche',
    artist: 'Artista Principal',
    duration: '3:45',
    artwork: 'https://picsum.photos/id/1011/500/500'
  },
  {
    id: 2,
    title: 'Ecos del Silencio',
    artist: 'Artista Principal',
    duration: '4:12',
    artwork: 'https://picsum.photos/id/1012/500/500'
  },
  {
    id: 3,
    title: 'Luces de Neón',
    artist: 'Artista Principal',
    duration: '3:58',
    artwork: 'https://picsum.photos/id/1013/500/500'
  },
  {
    id: 4,
    title: 'Avenida del Sol',
    artist: 'Artista Principal',
    duration: '4:30',
    artwork: 'https://picsum.photos/id/1014/500/500'
  },
  {
    id: 5,
    title: 'Corazón Digital',
    artist: 'Artista Principal ft. Colaborador',
    duration: '3:21',
    artwork: 'https://picsum.photos/id/1015/500/500'
  },
];