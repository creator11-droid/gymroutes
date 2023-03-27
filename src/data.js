import {SiOpenaigym} from 'react-icons/si'
import {TbYoga} from 'react-icons/tb'
import {FaHeartbeat} from 'react-icons/fa'
import {RiRunLine, RiCommunityLine} from 'react-icons/ri'
import {BiHealth} from 'react-icons/bi'
import {CgGym} from 'react-icons/cg'

export const links = [

    {
        name: 'Home',
        path: '/',
    },
      {
        name: 'About',
        path: '/about' ,
    },
      
      {
        name: 'Gallery',
        path: '/gallery',
    },
      {
        name: 'Plans' ,
        path:  '/plans',
    },
      {
        name: 'Trainers',
        path: '/trainers',
    },
       {
        name: 'Contact',
        path: '/contact',
    },
   
]

export const programs =[
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: 'Full body workout',
    info: 'Attain your dream physique.' ,
    path: 'programs/111' ,
  },
    {
    id: 2,
    icon:<FaHeartbeat/>,
    title: 'Cardio',
    info: 'Build conditioning and endurance. ' ,
    path: 'programs/222' ,
  },
    {
    id: 3,
    icon : <TbYoga/>,
    title: 'Yoga',
    info: 'No lifts just peace and spiritual gbas gbos.' ,
    path: 'programs/333' ,
  },
    {
    id: 4,
    icon: <RiRunLine/>,
    title: 'Mobility',
    info: 'Trust us with your career.' ,
    path: 'programs/444' ,
  }

]

export const values= [
  {
    id:1,
    icon:<BiHealth/>,
    title: 'Health',
    description: 'We believe ourselves to be a platform that helps you achieve goals',
  },
   {
    id:2,
    icon:<RiCommunityLine/>,
    title: 'Community',
    description: 'We are a community dedicated to helping to get the best out of you',
  },
 
   {
    id:3,
    icon:<SiOpenaigym/>,
    title: 'Inclusive',
    description: 'Your comfort is our Number one priority',
  },
   {
    id:4,
    icon:<CgGym/>,
    title: 'Health',
    description: 'Our facilities are tailored to meet your special needs',
  },
]

export const faqs= [
  {
    id: 1,
    question:'What are the benefits of going to the gym?',
    answer:'Going to the gym can offer numerous benefits, such as weight loss, improved cardiovascular health, increased strength, and better mental health.',
  },
    {
    id: 2,
    question:'How often should i go to the gym ?',
    answer:'It is recommended to go to the gym at least three to four times per week, with each session lasting between 30 minutes to an hour.',
  },
    {
    id: 3,
    question:'Should i do cardio or strenthening training first?',
    answer:'It depends on your fitness goals. If your primary goal is weight loss, then you should do cardio first. If your goal is to build muscle, then you should do strength training first.',
  },
    {
    id: 4,
    question:'Is it okay to work out on an empty stomach?',
    answer:'It is generally safe to workout on an empty stomach, but it may be best to have a small snack or meal beforehand to provide your body with the energy it needs to exercise effectively.',
  },
    {
    id: 5,
    question:'How long should i rest betwwen sets? ',
    answer:'It is recommended to rest for 30 seconds to 1 minute between sets for light to moderate intensity exercises and 2 to 3 minutes for heavy lifting.',
  },
    {
    id: 6,
    question:'What should i eat after a workout?',
    answer:'It is important to consume a combination of protein and carbohydrates after a workout to help your muscles recover and rebuild. Some examples include a protein shake with fruit, chicken with brown rice, or a turkey sandwich on whole grain bread.',
  },
   {
    id: 7,
    question:'Should i use free weights or machine?',
    answer:'Both free weights and machines have their advantages and disadvantages. Free weights require more stability and control, which can help improve overall strength and coordination, while machines provide more stability, making it easier to isolate and target specific muscle groups.',
  },
   {
    id: 8,
    question:'How can i stay motivated to go the gym?',
    answer:'Setting specific and achievable goals, finding a workout partner, trying new exercises, and rewarding yourself for reaching milestones can all help to keep you motivated and committed to your fitness routine.',
  },
  {
    id:9,
    question:'How long does it takes to see results from going to the gym?',
    answer:'Results can vary depending on your fitness level, diet, and workout routine. However, with consistent effort and dedication, you can start to see results within a few weeks to a few months.',
  },
    {
    id:10,
    question:'How can i prevent injury in the gym?',
    answer:'To prevent injury, it is important to start with light weights and gradually increase the weight and intensity of your workouts over time. It is also important to use proper form and technique, stay hydrated, and listen to your body if you experience pain or discomfort.',
  },
]

export const testimonials =[
  {
    id:1,
    name:'Ben riddles',
    quotes: 'I love this gym! The staff is always friendly and welcoming, and the equipment is top-notch. I have been able to achieve my fitness goals thanks to the guidance of the personal trainers.',
    job: 'Clown',
    image: require('./images/ben.jpg'),
  },
  {
    id:2,
    name:'Atikh fiddles',
    quotes: 'This gym has been a lifesaver for me. I struggle with anxiety, and working out helps me manage it. The environment here is so positive and supportive, which makes it a safe space for me to exercise.',
    job: 'Writer',
    image: require('./images/atikh.jpg'),
  },
  {
    id:3,
    name:'Jack sparrow',
    quotes: 'I appreciate the attention to cleanliness and safety measures in this gym. It is important to me that the equipment is regularly sanitized, and that social distancing is enforced. I feel comfortable working out here.',
    job: 'Actor',
    image: require('./images/jack.jpg'),
  },
  {
    id:4,
    name:'Prince meelay',
    quotes: 'This gym has exceeded my expectations. The facilities are top-notch, and the staff is incredibly friendly and supportive. I have made significant progress towards my fitness goals since joining this gym.',
    job: 'Playboy',
    image: require('./images/prince.jpg'),
  },
  {
    id:5,
    name:'Stephanie holmes',
    quotes: 'I have been a member of this gym for years, and I have never had a bad experience. The trainers are knowledgeable and always willing to answer my questions. The group fitness classes are my favorite, and the instructors are fantastic.',
    job: 'Film-maker',
    image: require('./images/stephanie.jpg'),
  },
]

export const price =[
  {
    id:1,
    name: 'Silver Package',
    description: 'This package is recomended for beginners who know thier way in the gym enviroment',
    price: 19.99,
    features:[
      {feature: 'first feature', available: true},
      {feature: 'second feature', available: true},
      {feature: 'third feature', available: true},
      {feature: 'fourth feature', available: true},
      {feature: 'fifth feature', available: true},
      {feature: 'sixth feature', available: false},
      {feature: 'seventh feature', available: false},
      {feature: 'eight feature', available: false},
      {feature: 'ninth feature', available: false},
      {feature: 'tenth feature', available: false},
      {feature: 'eleventh feature', available: false},
      {feature: 'twelveth feature', available: false},
      {feature: 'thirteenth feature', available: false},

    ]
  },
  {
    id:2,
    name: 'Gold Package',
    description: 'This package is recomended for beginners who are new to the gym enviroment',
    price: 29.99,
    features:[
      {feature: 'first feature', available: true},
      {feature: 'second feature', available: true},
      {feature: 'third feature', available: true},
      {feature: 'fourth feature', available: true},
      {feature: 'fifth feature', available: true},
      {feature: 'sixth feature', available: true},
      {feature: 'seventh feature', available: true},
      {feature: 'eight feature', available: false},
      {feature: 'ninth feature', available: true},
      {feature: 'tenth feature', available: false},
      {feature: 'eleventh feature', available: false},
      {feature: 'twelveth feature', available: false},
      {feature: 'thirteenth feature', available: true},

    ]
  },
  {
    id:3,
    name: 'Platinum Package',
    description: 'This package is recomended for people with busy schedule and require a more personal touch',
    price: 49.99,
    features:[
      {feature: 'first feature', available: true},
      {feature: 'second feature', available: true},
      {feature: 'third feature', available: true},
      {feature: 'fourth feature', available: true},
      {feature: 'fifth feature', available: true},
      {feature: 'sixth feature', available: true},
      {feature: 'seventh feature', available: true},
      {feature: 'eight feature', available: true},
      {feature: 'ninth feature', available: true},
      {feature: 'tenth feature', available: true},
      {feature: 'eleventh feature', available: true},
      {feature: 'twelveth feature', available: true},
      {feature: 'thirteenth feature', available: true},

    ]
  }
] 

const Trainer1 = require('./images/trainer1.jpg');
const Trainer2 = require('./images/trainer8.jpg');
const Trainer3 = require('./images/tall.jpg');
const Trainer4 = require('./images/trainer9.jpg');
const Trainer5 = require('./images/trainer5.jpg');
const Trainer6 = require('./images/trainer6.jpg');

export const trainers =[
  {
    id:1,
    image:Trainer1,
    name: 'Brishard Cox',
    job: 'Cut trainer',
    socials: ['https://linkedin.com', 'https://facebook.com', 'https://whatsapp.com', 'https://instagram.com', 'https://twitter.com']
  },
    {
    id:2,
    image:Trainer2,
    name: 'Steve Irving',
    job: 'Bulk',
    socials: ['https://linkedin.com', 'https://facebook.com', 'https://whatsapp.com', 'https://instagram.com', 'https://twitter.com']
  },
    {
    id:3,
    image:Trainer3,
    name: 'Carly Pucket',
    job: 'Fitness',
    socials: ['https://linkedin.com', 'https://facebook.com', 'https://whatsapp.com', 'https://instagram.com', 'https://twitter.com']
  },
    {
    id:4,
    image:Trainer4,
    name: 'Bob Rafael',
    job: 'Fitness',
    socials: ['https://linkedin.com', 'https://facebook.com', 'https://whatsapp.com', 'https://instagram.com', 'https://twitter.com']
  },
    {
    id:5,
    image:Trainer5,
    name: 'Emily Reynolds',
    job: 'Yoga',
    socials: ['https://linkedin.com', 'https://facebook.com', 'https://whatsapp.com', 'https://instagram.com', 'https://twitter.com']
  },
    {
    id:6,
    image:Trainer6,
    name: 'Aisha Cred',
    job: 'Cardio',
    socials: ['https://linkedin.com', 'https://facebook.com', 'https://whatsapp.com', 'https://instagram.com', 'https://twitter.com']
  },
]