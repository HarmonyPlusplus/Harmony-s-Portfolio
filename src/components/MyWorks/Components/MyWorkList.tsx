import Ecommerce from '../../../assets/EcommercePlatform.jpg'
import TaskManagement from '../../../assets/TaskManagementApp.jpg'
import FitnessTracking from '../../../assets/FitnessTracking.jpg'
import BrandIdentity from '../../../assets/BrandIdentity.jpg'
import RealEstate from '../../../assets/RealEstatePortal.jpg'
import WeatherDashboard from '../../../assets/WeatherDashboard.jpg'
import RestaurantMenu from '../../../assets/ResturantMenuApp.jpg'
import PortfolioDesign from '../../../assets/PortfolioDesign.jpg'
import SocialMediaDashboard from '../../../assets/SocialMediaDashboard.jpg'

type Project = {
    id: number;
    name: string;
    description: string;
    images: string;
    projectUrl: string;
    stack: string[];
    category: string;
}


export const Projects: Project[] = [
    {
        id: 1,
        name: "E-Commerce Platform",
        description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory...",
        images: Ecommerce,
        projectUrl: "",
        stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: "Web",
    },

    {
        id: 2,
        name: "Task Management App",
        description: "Collaborative task management application with drag-and-drop functionality, real-time updates...",
        images: TaskManagement,
        projectUrl: "",
        stack: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
        category: "App"
    },

    {
        id: 3,
        name: "Fitness Tracking Mobile App",
        description: "Mobile fitness application with workout tracking, nutrition planning, and progress visualization with...",
        images: FitnessTracking,
        projectUrl: "",
        stack: ['React Native', 'Redux', 'Chart.js'],
        category: "App"
    },

    {
        id: 4,
        name: "Brand Identity Design",
        description: "Complete brand identity package including logo design, color palette, typography, and brand...",
        images: BrandIdentity,
        projectUrl: "",
        stack: ['Figma', 'Illustrator', 'Branding'],
        category: "Others"
    },

    {
        id: 5,
        name: "Real Estate Portal",
        description: "Comprehensive real estate platform with advanced search filters, virtual tours, and...",
        images: RealEstate,
        projectUrl: "",
        stack: ['Next.js', 'PostgreSQL', 'Google Maps API'],
        category: "Web"
    },

    {
        id: 6,
        name: "Weather Dashboard",
        description: "Beautiful weather dashboard with detailed forecasts, interactive maps, and personalized...",
        images: WeatherDashboard,
        projectUrl: "",
        stack: ['React', 'Weather API', 'D3.js'],
        category: "Web"
    },

    {
        id: 7,
        name: "Restaurant Menu App",
        description: "Digital menu application for restaurants with QR code ordering, payment integration, and kitchen...",
        images: RestaurantMenu,
        projectUrl: "",
        stack: ['React', 'Native', 'Stripe', 'Firebase'],
        category: "App"
    },

    {
        id: 8,
        name: "Portfolio Website",
        description: "Creative portfolio website design with unique animations, smooth transitions, and engaging user...",
        images: PortfolioDesign,
        projectUrl: "",
        stack: ['Figma', 'UI/UX', 'Prototyping'],
        category: "Web"
    },

    {
        id: 9,
        name: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with post scheduling, engagement metrics, and...",
        images: SocialMediaDashboard,
        projectUrl: "",
        stack: ['Vue.js', 'Chart.js', 'REST API'],
        category: "Web"
    }

]