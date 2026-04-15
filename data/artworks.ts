export interface Artwork {
  id: string;
  title: string;
  category: 'Realism' | 'Fantasy' | 'Concept';
  image: string; // Path to your images in /public/gallery/
}

export const artworks: Artwork[] = [
  { id: '1', title: 'Golden Knight', category: 'Fantasy', image: '/gallery/knight.jpg' },
  { id: '2', title: 'Azure Eyes', category: 'Realism', image: '/gallery/portrait.jpg' },
  { id: '3', title: 'New Era', category: 'Concept', image: '/gallery/hourglass.jpg' },
  // Add all your files here
];