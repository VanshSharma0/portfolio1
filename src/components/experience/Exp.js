import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import styles from './Exp.module.scss';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: '#1d1836', 
      color: '#fff',
      padding: '1.5rem', // Reduced padding for mobile
      borderRadius: '0.5rem', // Slightly reduced border radius
    }}
    contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
    date={experience.date}
    iconStyle={{ 
      background: experience.iconBg,
      boxShadow: '0 0 0 4px #1d1836',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-3/5 h-3/5 object-contain"
        />
      </div>
    }
    className={styles.timelineElement}
  >
    <div className={styles.cardContent}>
      <h3 className={styles.title}>{experience.title}</h3>
      <p className={styles.company}>{experience.company_name}</p>
      <ul className={styles.pointsList}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={styles.point}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.sectionHeadText}>
        Work Experience
      </h2>
      <div className={styles.timelineContainer}>
        <VerticalTimeline animate={true} lineColor="#1d1836">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
