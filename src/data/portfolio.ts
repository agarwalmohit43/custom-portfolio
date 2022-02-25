import { HeaderType, AboutTypes, ProjectType, ContactType} from "./portfolioTypes"

const header: HeaderType = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/agarwalmohit43',
    title: 'Github',
  }
  
  const about: AboutTypes = {
    // all the properties are optional - can be left empty or deleted
    name: 'Mohit Kumar',
    role: 'Front-End Web Developer',
    description:
      'React Developer at HP || Ex- Dassault Systemes || Ex- Capgemini || JavaScript || React || Readux || NodeJS || Sass || HTML || CSS || Java',
    resume: 'https://drive.google.com/file/d/1PYyyKReLYGe8bMDG702oYirwFr712cVy/view?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/mohit-kumar-82607221/',
      github: 'https://github.com/agarwalmohit43',
      whatsapp:'https://wa.me/918981871984'
    },
  }
  
  const projects : ProjectType[] = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'HP',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['Sass', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Issue Management web app',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['Sass', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Coffee shop',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['Sass', 'TypeScript', 'React'],
      sourceCode: 'https://github.com/agarwalmohit43/coffee_shop',
      livePreview: 'https://coffee-shop-rouge.vercel.app/',
    },
  ]
  
  const skills : string[] = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]
  
  const contact : ContactType = {
    // email is optional - if left empty Contact section won't show up
    email: 'agarwalmohit43@gmail.com',
  }
  
  export { header, about, projects, skills, contact }