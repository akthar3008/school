import React from 'react';

// --- IMPORTANT ---
import gallery1 from '../assets/images/g1.webp';
import gallery2 from '../assets/images/g2.webp';
import gallery3 from '../assets/images/g3.webp';
import gallery4 from '../assets/images/g4.webp';
import gallery5 from '../assets/images/g5.webp';
import gallery6 from '../assets/images/g6.webp';
import gallery7 from '../assets/images/g7.webp';
import gallery8 from '../assets/images/g8.webp';
import gallery9 from '../assets/images/g9.webp';
import gallery10 from '../assets/images/g10.jpg';
import gallery11 from '../assets/images/g11.jpg';
import gallery12 from '../assets/images/g12.jpg';
import gallery13 from '../assets/images/g13.jpg';
import gallery14 from '../assets/images/g14.jpg';
import gallery15 from '../assets/images/g15.jpg';
import gallery16 from '../assets/images/g16.jpg';
import gallery17 from '../assets/images/g17.jpg';
import gallery18 from '../assets/images/g18.jpg';
// You will need to import your actual images here.
// For now, these are placeholders.
// Example: import electionPrelims from '../assets/images/gallery/election.jpg';

const galleryItems = [
  {
    src: gallery1,
    caption: "Election Prelims G VI-C"
  },
  {
    src: gallery2,
    caption: "Class Assembly G VI-C"
  },
  {
    src: gallery3,
    caption: "Yoga Day G VI-C"
  },
  {
    src: gallery4,
    caption: "Yoga Day G VI-C"
  },
  {
    src: gallery5,
    caption: "Environment Day G VI-C"
  },
  {
    src: gallery6,
    caption: "Independence Day G VI-C"
  },
  {
    src: gallery7,
    caption: "Environment Day Mont A"
  },
  {
    src: gallery8,
    caption: "Environment Day Mont B"
  },
  {
    src: gallery9,
    caption: "Environment Day Mont C"
  },
  {
    src: gallery10,
    caption: "Independence Day"
  },
  {
    src: gallery11,
    caption: "Sense Organ"
  },
  {
    src: gallery12,
    caption: "Rhyming Words"
  },
  {
    src: gallery13,
    caption: "Guru Purnima"
  },
  {
    src: gallery14,
    caption: "My Family Day"
  },
  {
    src: gallery15,
    caption: "Yoga Day"
  },
  {
    src: gallery16,
    caption: "Recall Activity"
  },
  {
    src: gallery17,
    caption: "Fathers Day"
  },
  {
    src: gallery18,
    caption: "Abstract Bird through Painting"
  }
]

const GalleryPage = () => {
  return (
    <div className="gallery-page-container">
      <header className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Gallery</p>
        </div>
      </header>
      <div className="gallery-content container">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <div className="gallery-image">
                <img src={item.src} alt={item.caption} />
              </div>
              <div className="gallery-caption">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;