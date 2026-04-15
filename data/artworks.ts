export interface Artwork {
  id: string;
  title: string;
  category: 'Realism' | 'Fantasy' | 'Concept' | 'Challenge';
  image: string; // Path to your images in /public/gallery/
  processImages?: string[]; // Array of process image paths for Challenge category
  duration?: string; // Duration of artwork creation
}

export const artworks: Artwork[] = [
  // Concept Art
  { id: '1', title: 'Hello 2026', category: 'Concept', image: '/gallery/concept/hello 2026.jpeg' },
  { id: '2', title: 'King Dragon', category: 'Concept', image: '/gallery/concept/king dragon.jpeg' },
  { id: '3', title: 'King of Heaven', category: 'Concept', image: '/gallery/concept/king of heaven.jpeg' },
  { id: '4', title: 'Laughing Kid', category: 'Concept', image: '/gallery/concept/laughingKid.jpeg' },
  { id: '5', title: 'Marble Status', category: 'Concept', image: '/gallery/concept/marblestatus.jpeg' },
  
  // Fantasy Art
  { id: '6', title: 'WhatsApp Image', category: 'Fantasy', image: '/gallery/fantasy/WhatsApp Image 2026-04-12 at 20.31.10.jpeg' },
  { id: '7', title: 'Death and Life', category: 'Fantasy', image: '/gallery/fantasy/deathandlife.jpeg' },
  { id: '8', title: 'Moonlight Village', category: 'Fantasy', image: '/gallery/fantasy/moonlight village.jpeg' },
  { id: '9', title: 'Mother Nature', category: 'Fantasy', image: '/gallery/fantasy/motherNature.jpeg' },
  { id: '10', title: 'Pendulum', category: 'Fantasy', image: '/gallery/fantasy/pendulum.jpeg' },
  { id: '11', title: 'Sunset City', category: 'Fantasy', image: '/gallery/fantasy/sunsetCity.jpeg' },
  
  // Realism Art
  { id: '12', title: 'Blue Eyed', category: 'Realism', image: '/gallery/realism/blueeyed.jpeg' },
  { id: '13', title: 'Samurai', category: 'Realism', image: '/gallery/realism/samurai.jpeg' },
  
  // Challenge Art
  { 
    id: '14', 
    title: 'Blue Eyed Challenge', 
    category: 'Challenge', 
    image: '/gallery/challenge/blueeyed/blueeyed.jpeg',
    duration: '78 days',
    processImages: [
      '/gallery/challenge/blueeyed/process/process1.jpeg',
      '/gallery/challenge/blueeyed/process/process2.jpeg',
      '/gallery/challenge/blueeyed/process/process3.jpeg',
      '/gallery/challenge/blueeyed/process/process4.jpeg',
      '/gallery/challenge/blueeyed/process/process5.jpeg',
      '/gallery/challenge/blueeyed/process/process6.jpeg',
      '/gallery/challenge/blueeyed/process/process7.jpeg',
      '/gallery/challenge/blueeyed/process/process8.jpeg',
      '/gallery/challenge/blueeyed/process/process9.jpeg',
    ]
  },
  { 
    id: '15', 
    title: 'Radiant Girl Challenge', 
    category: 'Challenge', 
    image: '/gallery/challenge/radiantGirl/radiantGirl.jpeg',
    duration: '90 hours',
    processImages: [
      '/gallery/challenge/radiantGirl/process/process1.jpeg',
      '/gallery/challenge/radiantGirl/process/process2.jpeg',
      '/gallery/challenge/radiantGirl/process/process3.jpeg',
      '/gallery/challenge/radiantGirl/process/process4.jpeg',
      '/gallery/challenge/radiantGirl/process/process5.jpeg',
    ]
  },
];