// import dish1 from "../assets/dish1.jpg";
// import dish2 from "../assets/dish2.jpg";
// import dish3 from "../assets/dish3.jpeg";
// import dish4 from "../assets/dish4.jpg";
// import dish5 from "../assets/dish5.jpg";
// import dish6 from "../assets/dish6.jpeg";
// import dish7 from "../assets/dish7.jpeg";
// import dish8 from "../assets/dish8.jpeg";
// import dish9 from "../assets/dish9.jpeg";
// import dish10 from "../assets/dish10.jpeg";

import dish1 from "../assets/dish1.webp"
import dish2 from "../assets/dish2.webp"
import dish3 from "../assets/dish3.webp"
import dish4 from "../assets/dish4.webp"
import dish5 from "../assets/dish5.webp"
import dish6 from "../assets/dish6.webp"
import dish7 from "../assets/dish7.webp"
import dish8 from "../assets/dish8.webp"
import dish9 from "../assets/dish9.webp"
import dish10 from "../assets/dish10.webp"


import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Desi Pakoda",
    description: "Crispy Indian fritters made with chickpea flour and veggies.",
  },
  {
    image: dish2,
    title: "White Sauce Pasta",
    description: "Creamy pasta in a cheesy white sauce.",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Chicken Lollipop",
    description: "Spicy, crispy chicken wings shaped like lollipops",
  },
  {
    image: dish5,
    title: "Dalcha Rice",
    description: "Lentil stew served with fragrant rice.",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: dish8,
    title: "Panner Tikka Masala",
    description: "Grilled paneer in spicy onion tomato gravy. ",
  },
  {
    image: dish9,
    title: "Chicken Ramen",
    description: "Noodles in savory chicken broth with toppings.",
  },
  {
    image: dish10,
    title: "Dazzling Noodles",
    description:
      "Stir-fried noodles with veggies and savory sauce.",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Desi Grill, we offer a unique fusion of authentic Indian, Italian, and Japanese cuisines, blending bold flavors and timeless traditions. Our menu features everything from aromatic Indian tandoori dishes, to comforting Italian pasta, to delicate and fresh Japanese sushi. Each dish is carefully crafted using the finest ingredients, ensuring a memorable dining experience with every bite. Whether you're a fan of spice, savory, or subtle flavors, Desi Grill promises a culinary journey like no other. Join us for a fusion of tastes, where tradition and innovation come together in perfect harmony.",
};

export const MISSION =
  "At Desi Grill, We thrive to create delicious and memorable dining experiences.";

export const CUISINE = [
  {
    number: "01.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
  {
    number: "02.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "03.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },

];

export const REVIEW = {
  name: "John D'Souza",
  profession: "Food Critic",
  content:
    "“Desi Grill, with its inviting atmosphere, offers a unique blend of authentic Indian, Italian, and Japanese dishes. Each bite is a perfect balance of flavors, from the rich spices of India to the delicate tastes of Italy and Japan. A truly memorable dining experience that exceeds expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Austin, Texas, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@desigrill.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/",
    icon: FaFacebook,  
  },

  {
    href: "https://instagram.com/",
    icon: FaInstagram,  
  },
  {
    href: "https://x.com/",
    icon: FaXTwitter,  // 
  },
];