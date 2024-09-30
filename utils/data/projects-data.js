import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Healthtera',
        description: "We created a solid refinement plan from the ground up, including code refactoring, mobile app architecture redesign, and QA automation framework development. Next, we set up containerized infrastructure to empower the delivery of high-quality code faster and at scale. We addressed the latest mobile accessibility requirements, ensuring best-in-class UX and improving customer retention. Our engineers enhanced the geo-based search, which supported same-day drug delivery.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Fronted Developer',
    },
    {
        id: 5,
        name: 'Dialogue',
        description: "We developed a 'virtual clinic' solution that allows separating patients based upon different criteria while managing their data within a single physical infrastructure. Automated patient management through a custom Filedrop solution that allows for a seamless upload of eligible members' data to the Dialogue solution. Took an active part in the development of a virtual intake solution that simplifies the process of preliminary screening via a chatbot. Customized the platform to allow for deploying of white-label solutions for larger clients.",
        tools: ['Redux', 'Sun Editor', "Calendar", 'React', 'Bootstrap', 'NextJS', 'Material UI', 'SCSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Fronted Developer',
    },
    {
        id: 6,
        name: 'Voxy',
        description: "I contributed to the migration of their e-learning platform to the latest Python version by ensuring that the user interface remained seamless and responsive throughout the process. I collaborated with the team to update the platform’s dependencies and libraries, while also helping to eliminate legacy code that could hinder performance. My focus was on enhancing the user experience and ensuring compatibility with the new data layers and processing methods, ultimately supporting the launch of an updated platform that meets modern security and scalability standards.",
        tools: ['React', 'Redux', 'Selenium', 'Python', 'Python Flask', 'TailwindCSS', 'Docker', 'CI/CD'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Fronted Developer',
    },
    {
        id: 7,
        name: 'DAQ Electronics',
        description: "As a frontend developer for DAQ Electronics, I played a crucial role in enhancing user interfaces and experiences for their high-end access control solutions. I collaborated closely with the engineering team to support and implement new firmware features, ensuring seamless integration with the updated backend architecture. Additionally, I contributed to the development of a web server and mobile app, focusing on creating intuitive and user-friendly interfaces that streamline security management processes. My work has been instrumental in driving the success of several award-winning projects, transforming innovative concepts into engaging user experiences.",
        tools: ['PHP', 'Laravel', 'React', 'RestAPI', 'MySQL', 'SCSS', 'JWT', 'Jest', 'Docker'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Fronted Developer',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },