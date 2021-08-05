import planetaryEmpiresGif from './images/example.gif'
import song from './images/song.gif'
import tour from './images/tour.gif'

const ProjectsArray = [{
    name: 'Planetary Empires',
    link1: 'https://github.com/NCHitsman/Planetary-Empires',
    link2: 'https://planetary-empires.herokuapp.com/',
    about: 'Planetary Empires is an expansion game for Warhammer 40,000 released by Games Workshop. The game rules and accompanying map board and pieces allow you to wage a campaign across a planetary-size landscape. It is designed to assist you in running evocative, narrative-driven campaigns.',
    about2: 'This site helps you organize players, systems, and maps, allowing you to run a Planetary Empires game all in one place!',
    tech: ['Javascript', 'React', 'Redux', 'Sequelize', 'Express', 'ThreeJS'],
    gif: planetaryEmpiresGif,
},{
    name: 'SoundLoud',
    link1: 'https://github.com/NCHitsman/SoundLoud',
    link2: 'https://soundloud-hitsman.herokuapp.com/',
    about: "SoundLoud in an app made for uploading and sharing music. This was my first Project, and I learned so much while implementing all of it's funcationality.",
    about2: "Provided fully integrated User Authentication, Login, and Sign Up, hashing passwords with bcrypt and storing user data in JSON Web Tokens. I leveraged React-Redux to utilize asynchronous data storage and retrieval, as well as the Fetch API and CSURF library.",
    tech: ['Javascript', 'React', 'Redux', 'Sequelize', 'Express', 'Cloudinary'],
    gif: song,
},{
    name: 'Portfolio Site',
    link1: 'https://github.com/NCHitsman/portfolio-site',
    link2: 'https://nchitsman.github.io/portfolio-site/',
    about: 'A Person Portfolio site I made for my Job Search. I created a ThreeJS background and used a "Accordion Div" system to create the sectioning you see here!',
    about2: 'I enjoyed making the use of React-Three/Fiber and Typescript to make a very cool ThreeJS scene I am super proud of. The Project pages you are viewing now, is completly scalable, making it very easy to add a new Project!',
    tech: [ 'Typescript', 'React', 'ThreeJS', 'CSS', 'Github Pages'],
    gif: tour,
}]

export default ProjectsArray
