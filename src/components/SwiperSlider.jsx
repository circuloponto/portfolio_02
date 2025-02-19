import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// Import CSS module and components
import styles from './SwiperSlider.module.css';
import Breadcrumbs from './Breadcrumbs';

const projects = [
  {
    id: 1,
    title: 'Consultis',
    description: 'This was my firsy project, a simple html / css / javascript website for a local business.',
    category: 'HTML/CSS/JS'
  },
  {
    id: 2,
    title: 'Tonus',
    description: 'A pedagogical music app that lets you explore chord shapes in various ways.',
    category: 'ReactJS'
  },
  {
    id: 3,
    title: 'Lambda',
    description: 'A dynamic blog about functional programming in Javascript',
    category: 'Functional JS'
  }
];

const SwiperSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsTitleText}>
        <h2 className={styles.projectsTitle}>PROJECTS</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
        onSlideChange={handleSlideChange}
      >
        {projects.map((project,index) => (
          <SwiperSlide key={project.id} className={styles.slide}>
            <div className={`${styles.projectContent} ${styles[`projectContent${index}`]}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className={styles.visitWebsite} href="">Visit Website</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Breadcrumbs totalSlides={projects.length} activeIndex={activeIndex} />
    </section>
  );
};

export default SwiperSlider;
