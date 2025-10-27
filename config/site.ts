export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Plant Care",
      href: "/plantCare",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ],
  articleItems: [
    {
      label: "All Plants",
      href: "#",
    },
    {
      label: "New Arrivals",
      href: "#",
    },
    {
      label: "Sale",
      href: "#",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Plant Care",
      href: "/plantCare",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ],
  plants: [
    {
      id: 1,
      name: "Barberton Daisy",
      price: 119.0,
      oldPrice: 229.0,
      discount: "13% OFF",
      image: "/1.png",
    },
    {
      id: 2,
      name: "Angel Wing Begonia",
      price: 169.0,
      oldPrice: 200,
      image: "/2.png",
    },
    {
      id: 3,
      name: "African Violet",
      price: 199.0,
      originalPrice: 229.0,
      image: "/3.png",
      oldPrice: 229.0,
      discount: "13% OFF",
      sale: true,
    },
    {
      id: 4,
      name: "Beach Spider Lily",
      price: 129.0,
      discount: "13% OFF",
      oldPrice: 200,
      image: "/4.png",
    },
    {
      id: 5,
      name: "Blushing Bromeliad",
      price: 139.0,
      oldPrice: 200,
      image: "/5.png",
    },
    {
      id: 6,
      name: "Aluminum Plant",
      price: 179.0,
      oldPrice: 229.0,
      discount: "13% OFF",
      image: "/6.png",
    },
    {
      id: 7,
      name: "Aluminum Plant",
      price: 179.0,
      oldPrice: 200,
      image: "/7.png",
    },
    {
      id: 8,
      name: "Aluminum Plant",
      price: 179.0,
      oldPrice: 200,
      discount: "13% OFF",
      image: "/8.png",
    },
    {
      id: 9,
      name: "Aluminum Plant",
      price: 179.0,
      oldPrice: 200,
      image: "/9.png",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
   blogPosts : [
  {
    image: "/blog1.png",
    date: "September 12",
    readTime: "6 minutes",
    title: "Cactus & Succulent Care Tips",
    description: "Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    image: "/blog2.png",
    date: "September 13",
    readTime: "2 minutes",
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    image: "/blog3.png",
    date: "September 15",
    readTime: "3 minutes",
    title: "Cacti & Succulent Care Tips",
    description: "Cacti and succulents thrive in containers and because most are...",
  },
  {
    image: "/blog4.png",
    date: "September 15",
    readTime: "2 minutes",
    title: "Best Houseplants Room By Room",
    description: "The benefits of houseplants are endless. In addition to...",
  },
]
};
