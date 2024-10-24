import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: '#1d1836', 
      color: '#fff',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
    date={experience.date}
    dateClassName="!text-4xl !font-bold text-gray-300 sm:pr-8 !important"
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
  >
    <div className="w-full">
      <h3 className="!text-6xl !font-black text-white mb-4">
        {experience.title}
      </h3>
      <p className="!text-4xl !font-semibold text-gray-300 mb-6">
        {experience.company_name}
      </p>
      
      <ul className="space-y-6 mt-8">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="!text-3xl text-gray-300 tracking-wide pl-6 relative before:content-[''] before:absolute before:left-0 before:top-4 before:w-3 before:h-3 before:bg-gray-300 before:rounded-full"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="relative z-0 min-h-screen text-center items-center align-center">
      <motion.div variants={textVariant()} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="!text-4xl sm:!text-5xl uppercase tracking-wider text-secondary mb-4 !important">
            What I have done so far
          </p>
          <h2 className="!text-7xl sm:!text-8xl !font-black text-white mb-20 !important">
            Work Experience
          </h2>
        </div>
      </motion.div>

      <div className="mt-12 md:mt-20">
        <VerticalTimeline
          animate={true}
          lineColor="#1d1836"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');