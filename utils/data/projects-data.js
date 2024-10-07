import proj_1_image from '/public/image/proj-1.png';
import proj_2_image from '/public/image/proj-2.png';
import proj_3_image from '/public/image/proj-3.png';
import proj_4_image from '/public/image/proj-4.png';
import proj_5_image from '/public/image/proj-5.png';
import proj_6_image from '/public/image/proj-6.png';
import proj_7_image from '/public/image/proj-7.png';


export const projectsData = [
    {
        id: 1,
        name: 'Healthtera',
        description: "We created a solid refinement plan from the ground up, including code refactoring, mobile app architecture redesign, and QA automation framework development. Next, we set up containerized infrastructure to empower the delivery of high-quality code faster and at scale. We addressed the latest mobile accessibility requirements, ensuring best-in-class UX and improving customer retention. Our engineers enhanced the geo-based search, which supported same-day drug delivery.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://healthera.co.uk/',
        image: proj_1_image,
    },
    {
        id: 2,
        name: 'StarkFuture',
        description: 'As a Frontend Developer on this ambitious project, I designed and implemented a custom motorcycle builder, enhancing user experience through intuitive interfaces. I collaborated closely with the team to develop a complex pricing formula that dynamically adjusts based on product modifications and regional factors. Additionally, I integrated multilingual support for over 20 languages and enabled transactions in multiple currencies, improving accessibility for users across Europe and beyond. ',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://starkfuture.com/',
        image: proj_2_image,
    },
    {
        id: 3,
        name: 'Invezz',
        description: "I meticulously implemented design suggestions through multiple iterations, achieving a seamless transition with no loss of traffic. My focus on optimizing conversion rates for CPC model pages contributed to improved revenue performance, while the advanced color palette revitalized the site's aesthetic. Ultimately, our efforts helped maintain monthly traffic levels between 500,000 and 750,000 users, solidifying the site's position in the market.",
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://invezz.com/',
        image: proj_3_image,
    },
    {
        id: 4,
        name: 'GS Diamond',
        description: "I was instrumental in creating an innovative ring and stone customization designer interface that ensured real-time validation of selected diamonds. I effectively managed a large dataset of 150,000 items from multiple suppliers, optimizing the site to update every 15 minutes for accurate inventory representation. My contributions included building a custom ring builder and integrating payment systems such as Alipay, PayPal, and Adyen, enhancing the shopping experience for users. ",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: 'https://www.gsdiamonds.com.au/',
        image: proj_4_image,
        role: 'Fronted Developer',
    },
    {
        id: 5,
        name: 'Dialogue',
        description: "We developed a 'virtual clinic' solution that allows separating patients based upon different criteria while managing their data within a single physical infrastructure. Automated patient management through a custom Filedrop solution that allows for a seamless upload of eligible members' data to the Dialogue solution. Took an active part in the development of a virtual intake solution that simplifies the process of preliminary screening via a chatbot. Customized the platform to allow for deploying of white-label solutions for larger clients.",
        tools: ['Redux', 'Sun Editor', "Calendar", 'React', 'Bootstrap', 'NextJS', 'Material UI', 'SCSS'],
        code: '',
        demo: 'https://www.dialogue.co/en/',
        image: proj_5_image,
        role: 'Fronted Developer',
    },
    {
        id: 6,
        name: 'Voxy',
        description: "I contributed to the migration of their e-learning platform to the latest Python version by ensuring that the user interface remained seamless and responsive throughout the process. I collaborated with the team to update the platform’s dependencies and libraries, while also helping to eliminate legacy code that could hinder performance. My focus was on enhancing the user experience and ensuring compatibility with the new data layers and processing methods, ultimately supporting the launch of an updated platform that meets modern security and scalability standards.",
        tools: ['React', 'Redux', 'Selenium', 'Python', 'Python Flask', 'TailwindCSS', 'Docker', 'CI/CD'],
        code: '',
        demo: 'https://voxy.com/',
        image: proj_6_image,
        role: 'Fronted Developer',
    },
    {
        id: 7,
        name: 'DAQ Electronics',
        description: "As a frontend developer for DAQ Electronics, I played a crucial role in enhancing user interfaces and experiences for their high-end access control solutions. I collaborated closely with the engineering team to support and implement new firmware features, ensuring seamless integration with the updated backend architecture. Additionally, I contributed to the development of a web server and mobile app, focusing on creating intuitive and user-friendly interfaces that streamline security management processes. My work has been instrumental in driving the success of several award-winning projects, transforming innovative concepts into engaging user experiences.",
        tools: ['PHP', 'Laravel', 'React', 'RestAPI', 'MySQL', 'SCSS', 'JWT', 'Jest', 'Docker'],
        code: '',
        demo: 'https://www.daq.net/',
        image: proj_7_image,
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