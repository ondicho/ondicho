import web from '../assets/images/web-development.png'
import system from '../assets/images/system-architecture.png'
import database from '../assets/images/database.png'
import devops from '../assets/images/devops.png'

const ServicesData = [
    {
      title: 'Web Development',
      icon: web,
      description: 'Design, Develop, and Deploy beautiful, responsive, and user-friendly websites.',
      stack: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'System Design & Architecture',
      icon: system,
      description: 'Design and implement robust and scalable system architectures.',
      stack: ['Microservices', 'Docker', 'Kubernetes']
    },
    {
      title: 'Database Design & Management',
      icon: database,
      description: 'Design and manage databases for efficient data storage and retrieval.',
      stack: ['SQL', 'NoSQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'DevOps',
      icon: devops,
      description: 'Automate and streamline the software development lifecycle.',
      stack: ['CI/CD', 'Jenkins', 'Git', 'Docker']
    }
  ];
  

  export default ServicesData;