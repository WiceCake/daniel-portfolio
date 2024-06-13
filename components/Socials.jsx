import Link from "next/link";

import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/WiceCake",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/emar.basa/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/xdiredoxfoxx/",
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>;
};

export default Socials;
