import { useState } from 'react'

// Ordered candidates - the first that loads wins. Robust to the file
// being provided as .png, .jpg, .jpeg or .webp. Falls back to the placeholder.
const CANDIDATES = [
  '/herbert.png',
  '/herbert.jpg',
  '/herbert.jpeg',
  '/herbert.webp',
  '/herbert-placeholder.svg',
]

export function usePhoto() {
  const [i, setI] = useState(0)
  return {
    src: CANDIDATES[i],
    onError: () => setI((x) => Math.min(x + 1, CANDIDATES.length - 1)),
  }
}
