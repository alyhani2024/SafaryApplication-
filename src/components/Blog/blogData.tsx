import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Unraveling the Mysteries of Pyramids: Ancient Marvels of Human Ingenuity",
    paragraph:
    "Pyramids, ancient marvels of human ingenuity, stand as iconic symbols across civilizations worldwide.",
    image: "/images/blog/Pyramids.jpg",
    author: {
      name: " Eslam Ayman  ",
      image: "/images/blog/Pyramids.jpg",
      designation: "Ancient egypt",
    },
    tags: ["Join In"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Exploring the Timeless Splendor of Luxor: Gateway to Ancient Egypt",
    paragraph:
      "Nestled along the banks of the majestic Nile River, Luxor stands as a living testament to the grandeur of ancient Egypt.",
    image: "/images/blog/Luxor.jpg",
    author: {
      name: "Aly Hani",
      image: "/images/blog/Luxor.jpg",
      designation: "Ancient egypt",
    },
    tags: ["Join In"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Aswan: Jewel of the Nile, Gateway to Nubia",
    paragraph:
      "Situated on the banks of the majestic Nile River, Aswan is a city steeped in history and surrounded by natural beauty.",
    image: "/images/blog/Aswan.jpg",
    author: {
      name: "Mustafa Btt",
      image: "/images/blog/Aswan.jpg",
      designation: "Ancient egypt",
    },
    tags: ["Join In"],
    publishDate: "2024",
  },
];
export default blogData;
