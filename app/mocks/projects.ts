import { Project } from "../types/project";
import { FaAngular, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

export const projects: Project[] = [
    {
        name: "Real State",
        thumbnail: "https://res.cloudinary.com/devmexsoft/image/upload/v1693349512/Projects%20Thumbnails/Real_State_Thumbnail_pao95h.png",
        description: "Real estate website build with Angular 16, NestJS, MongoDB, Prisma, and Cloudinary. Seamlessly combining cutting-edge tools to create an immersive platform, delivering impactful solutions in real estate tech.",
        frameworkIcon: FaAngular,
        codeLink: "https://github.com/MexLegend/angular-real-state-app",
        demoLink: "https://angular-real-state-app.vercel.app"
    },
    {
        name: "Netflix Clone",
        thumbnail: "https://res.cloudinary.com/devmexsoft/image/upload/v1693349115/Projects%20Thumbnails/Messanger_Clone_Thumbnail_ce0et2.png",
        description: "Netflix clone build with the latest technologies including Next.js 13, Prisma, MongoDB, Cloudinary, Tailwind CSS, and Zustand. This project recreate the immersive Netflix experience.",
        frameworkIcon: TbBrandNextjs,
        codeLink: "https://github.com/MexLegend/netflix-clone",
        demoLink: "https://video-viewer-4a0b0hjww-mexlegend.vercel.app"
    },
    {
        name: "Sociopedia",
        thumbnail: "https://res.cloudinary.com/devmexsoft/image/upload/v1694534271/Projects%20Thumbnails/SocialPedia_Thumbnail_eiyojz.png",
        description: "Social networking site build with React, Redux, MongoDB, Cloudinary and MUI. This project boasts a dynamic interface for seamless content sharing and user connections.",
        frameworkIcon: FaReact,
        codeLink: "https://github.com/MexLegend/sociopedia",
        demoLink: "https://sociopedia-network.vercel.app"
    },
    {
        name: "Messanger Clone",
        thumbnail: "https://res.cloudinary.com/devmexsoft/image/upload/v1693348707/Projects%20Thumbnails/Messanger_Clone_Thumbnail_t2mv6y.png",
        description: "This project delivers real-time messaging capabilities and media sharing through Cloudinary. The polished UI, courtesy of Tailwind CSS, ensures an intuitive and visually appealing experience.",
        frameworkIcon: TbBrandNextjs,
        codeLink: "https://github.com/MexLegend/messanger-clone",
        demoLink: "https://messanger-clone-kohl.vercel.app"
    },
    {
        name: "GPT-3",
        thumbnail: "https://res.cloudinary.com/devmexsoft/image/upload/v1694537594/Projects%20Thumbnails/GTP-3_Thumbnail_ptmfab.png",
        description: "Built with React, this landing page offers an immersive introduction to OpenAI's cutting-edge technologies, blending interactive elements and sleek design for an impactful user experience.",
        frameworkIcon: FaReact,
        codeLink: "https://github.com/MexLegend/gpt-3",
        demoLink: "https://gpt-3-openai.vercel.app"
    },
    {
        name: "Gericht",
        thumbnail: "https://res.cloudinary.com/devmexsoft/image/upload/v1694546677/Projects%20Thumbnails/Gericht_Thumbnail_arkcoe.png",
        description: "This restaurant landing page offers an immersive dining experience with its interactive design and smooth navigation, reflecting the restaurant's ambiance. Built with the latest technology trends of React.",
        frameworkIcon: FaReact,
        codeLink: "https://github.com/MexLegend/gericht",
        demoLink: "https://gericht-landing.vercel.app"
    }
];