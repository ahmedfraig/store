import phone_01 from '../assets/img/products/phone-01.jpg';
import phone_02 from '../assets/img/products/phone-02.jpg';
import phone_03 from '../assets/img/products/phone-03.png';
import phone_04 from '../assets/img/products/phone-04.jpg';
import phone_05 from '../assets/img/products/phone-05.jpg';
import phone_06 from '../assets/img/products/phone-06.jpg';
import arm_chair_01 from '../assets/img/products/arm-chair-01.jpg';
import arm_chair_02 from '../assets/img/products/arm-chair-02.jpg';
import arm_chair_03 from '../assets/img/products/arm-chair-03.jpg';
import double_sofa_01 from '../assets/img/products/double-sofa-01.png';
import double_sofa_02 from '../assets/img/products/double-sofa-02.png';
import double_sofa_03 from '../assets/img/products/double-sofa-03.png';
import single_sofa_01 from '../assets/img/products/single-sofa-01.jpg';
import single_sofa_02 from '../assets/img/products/single-sofa-02.jpg';
import single_sofa_03 from '../assets/img/products/single-sofa-03.jpg';
import single_sofa_04 from '../assets/img/products/single-sofa-04.png';
import headphone from '../assets/img/products/headphone.png';
import wireless_02 from '../assets/img/products/wireless-02.png';
import wireless_03 from '../assets/img/products/wireless-03.png';
import wireless_04 from '../assets/img/products/wireless-04.png';
import watch_01 from '../assets/img/products/watch-01.jpg';
import watch_02 from '../assets/img/products/watch-02.jpg';
import watch_03 from '../assets/img/products/watch-03.jpg';
import watch_04 from '../assets/img/products/watch-04.jpg';
import slider1 from '../assets/img/hero-img.png';
import slider2 from '../assets/img/products/phone-04-removebg-preview.png';
import slider3 from '../assets/img/products/headphone.png';
import slider4 from '../assets/img/products/watch-07.png';
import { FaShippingFast, FaShieldAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: double_sofa_01,
    category: "sofa",
    price: 193,
    discount: 25,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
        text: "Great sofa, very comfortable and stylish!",
      },
    ],
    avgRating: 4.9,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: double_sofa_02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great sofa, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this sofa! It fits perfectly in my living room.",
      },
    ],
    avgRating: 5,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: double_sofa_03,
    category: "sofa",
    price: 173,
    discount: 0,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great sofa, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this sofa! It fits perfectly in my living room.",
      },
    ],
    avgRating: 4.8,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "04",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone_01,
    category: "mobile",
    price: 799,
    discount: 0,
    shortDesc: "A powerful smartphone with advanced features.",
    description: "The Apple iPhone 12 Pro offers a sleek design, powerful performance, and advanced camera capabilities. Perfect for capturing stunning photos and staying connected.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
        text: "Great phone, very powerful and stylish!",
      },
    ],
    avgRating: 4.3,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "05",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone_02,
    category: "mobile",
    price: 799,
    discount: 0,
    shortDesc: "A powerful smartphone with advanced features.",
    description: "The Apple iPhone 12 Max offers a sleek design, powerful performance, and advanced camera capabilities. Perfect for capturing stunning photos and staying connected.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great phone, very powerful and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this phone! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.4,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "06",
    productName: "Realme 8",
    imgUrl: phone_03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc: "A powerful smartphone with advanced features.",
    description: "The Realme 8 offers a sleek design, powerful performance, and advanced camera capabilities. Perfect for capturing stunning photos and staying connected.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great phone, very powerful and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this phone! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "07",
    productName: "One Plus Nord",
    imgUrl: phone_04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc: "A powerful smartphone with advanced features.",
    description: "The One Plus Nord offers a sleek design, powerful performance, and advanced camera capabilities. Perfect for capturing stunning photos and staying connected.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great phone, very powerful and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this phone! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.6,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "08",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone_05,
    category: "mobile",
    price: 899,
    discount: 0,
    shortDesc: "A powerful smartphone with advanced features.",
    description: "The Apple iPhone 13 Pro offers a sleek design, powerful performance, and advanced camera capabilities. Perfect for capturing stunning photos and staying connected.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great phone, very powerful and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this phone! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.9,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "09",
    productName: "Samsung Galaxy S22",
    imgUrl: phone_06,
    category: "mobile",
    price: 699,
    discount: 0,
    shortDesc: "A powerful smartphone with advanced features.",
    description: "The Samsung Galaxy S22 offers a sleek design, powerful performance, and advanced camera capabilities. Perfect for capturing stunning photos and staying connected.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great phone, very powerful and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this phone! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.9,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "10",
    productName: "Sakarias Armchair",
    imgUrl: arm_chair_01,
    category: "chair",
    price: 99,
    discount: 0,
    shortDesc: "A comfortable chair for your living room.",
    description: "This chair is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great chair, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this chair! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.5,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "11",
    productName: "Baltsar Chair",
    imgUrl: arm_chair_02,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc: "A comfortable chair for your living room.",
    description: "This chair is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great chair, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this chair! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.5,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "12",
    productName: "Helmar Chair",
    imgUrl: arm_chair_03,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc: "A comfortable chair for your living room.",
    description: "This chair is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great chair, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this chair! It fits perfectly in my hand.",
      },
    ],
    avgRating: 4.5,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "13",
    productName: "Fluffy Sheep Sofa",
    imgUrl: single_sofa_01,
    category: "sofa",
    price: 163,
    discount: 0,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great sofa, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this sofa! It fits perfectly in my living room.",
      },
    ],
    avgRating: 4.8,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "14",
    productName: "Faux Velvet Sofa",
    imgUrl: single_sofa_02,
    category: "sofa",
    price: 163,
    discount: 0,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great sofa, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this sofa! It fits perfectly in my living room.",
      },
    ],
    avgRating: 4.9,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "15",
    productName: "Fluffy Sheep Sofa",
    imgUrl: single_sofa_03,
    category: "sofa",
    price: 163,
    discount: 0,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great sofa, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this sofa! It fits perfectly in my living room.",
      },
    ],
    avgRating: 4.9 ,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "16",
    productName: "Modern Arm Sofa",
    imgUrl: single_sofa_04,
    category: "sofa",
    price: 173,
    discount: 0,
    shortDesc: "A comfortable sofa for your living room.",
    description: "This sofa is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any living space.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great sofa, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this sofa! It fits perfectly in my living room.",
      },
    ],
    avgRating: 4.9,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "17",
    productName: "Beat Studio Wireless",
    imgUrl: headphone,
    category: "wireless",
    price: 199,
    discount: 0,
    shortDesc: "High-quality wireless headphones for an immersive sound experience.",
    description: "These wireless headphones are crafted with high-quality materials to ensure durability and comfort. Their modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great headphones, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love these headphones! They fit perfectly on my ears.",
      },
    ],
    avgRating: 4.6,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "18",
    productName: "Beat EP Headphones",
    imgUrl: wireless_03,
    category: "wireless",
    price: 199,
    discount: 0,
    shortDesc: "High-quality wireless headphones for an immersive sound experience.",
    description: "These wireless headphones are crafted with high-quality materials to ensure durability and comfort. Their modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great headphones, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love these headphones! They fit perfectly on my ears.",
      },
    ],
    avgRating: 4.2,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "19",
    productName: "Black Headphones",
    imgUrl: wireless_02,
    category: "wireless",
    price: 193,
    discount: 0,
    shortDesc: "High-quality wireless headphones for an immersive sound experience.",
    description: "These wireless headphones are crafted with high-quality materials to ensure durability and comfort. Their modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great headphones, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love these headphones! They fit perfectly on my ears.",
      },
    ],
    avgRating: 4.4,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "20",
    productName: "Bluetooth Headphones",
    imgUrl: wireless_04,
    category: "wireless",
    price: 139,
    discount: 0,
    shortDesc: "High-quality wireless headphones for an immersive sound experience.",
    description: "These wireless headphones are crafted with high-quality materials to ensure durability and comfort. Their modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great headphones, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love these headphones! They fit perfectly on my ears.",
      },
    ],
    avgRating: 4.7,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "21",
    productName: "Rolex Watch",
    imgUrl: watch_01,
    category: "watch",
    price: 299,
    discount: 0,
    shortDesc: "A luxurious watch for your wrist.",
    description: "This watch is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great watch, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this watch! It fits perfectly on my wrist.",
      },
    ],
    avgRating: 4.5,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "22",
    productName: "Rolex Watch",
    imgUrl: watch_02,
    category: "watch",
    price: 299,
    discount: 0,
    shortDesc: "A luxurious watch for your wrist.",
    description: "This watch is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great watch, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this watch! It fits perfectly on my wrist.",
      },
    ],
    avgRating: 4.5,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "23",
    productName: "Rolex Watch",
    imgUrl: watch_03,
    category: "watch",
    price: 299,
    discount: 0,
    shortDesc: "A luxurious watch for your wrist.",
    description: "This watch is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great watch, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this watch! It fits perfectly on my wrist.",
      },
    ],
    avgRating: 4.7,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "24",
    productName: "Apple Watch",
    imgUrl: watch_04,
    category: "watch",
    price: 399,
    discount: 0,
    shortDesc: "A luxurious watch for your wrist.",
    description: "This watch is crafted with high-quality materials to ensure durability and comfort. Its modern design fits perfectly in any setting.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
        text: "Great watch, very comfortable and stylish!",
      },
      {
        name: "Jane Smith",
        rating: 4.8,
        text: "I love this watch! It fits perfectly on my wrist.",
      },
    ],
    avgRating: 4.5,
    newArrival: false,
    bestSeller: false,
  },
];


export const SliderData = [
  {
      id: 1, 
      title: "75% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slider1,
  },
  {
      id: 2, 
      title: "30% Off For Your First Shopping For Mobile Section",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slider2,
  },
  {
      id: 3, 
      title: "50% Off For Your First Shopping For Headphone Section",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slider3,
  },
  {
      id: 4, 
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slider4,
  },
];

export const serviceData = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Safe Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <BiSupport />,
    title: "Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];