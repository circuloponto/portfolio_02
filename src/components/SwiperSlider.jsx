import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// import required modules
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import CSS module
import styles from './SwiperSlider.module.css';

const projects = [
  {
    id: 1,
    title: 'Consultis',
    description: 'This was my firsy project, a simple html / css / javascript website for a local business.',
    category: 'React'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2',
    category: 'Node.js'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of project 3',
    category: 'UI/UX'
  }
];

const SwiperSlider = () => {
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
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className={styles.mySwiper}
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
    </section>
  );
};

export default SwiperSlider;
