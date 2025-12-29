import Ecom from '../../../../../assets/E-Commerce Platform.jpg';
import PortfolioCMS from '../../../../../assets/Portfolio CMS.jpg';
import TaskManagement from '../../../../../assets/E-Commerce Platform.jpg';

interface Project {
    title: string;
    description: string;
    projectUrl: string;
    stack?: string[];
    images?: string;
}



export const projectList: Project[] = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        images: PortfolioCMS,
        projectUrl: "https://your-portfolio-url.com" ,
        stack: ["React", "TypeScript", "Stripe"]   
    },
    {
        title: "E-commerce Store",
        description: "An online store built with React and Tailwind CSS.",
        images: Ecom,
        projectUrl: "https://your-ecommerce-url.com",
        stack: ["Next.js", "Firebase", "Tailwind"] 
    },
    {
        title: "Blog Platform",
        description: "A platform for creating and sharing blog posts.",
        images: TaskManagement,
        projectUrl: "https://your-blog-url.com",
        stack: ["React", "Node.js", "MongoDB"] 
    }
]