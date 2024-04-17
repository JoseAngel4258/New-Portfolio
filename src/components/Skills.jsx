import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-screen relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/assets/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/assets/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/assets/skills/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/assets/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/assets/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/assets/skills/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/assets/skills/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/assets/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/assets/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "/assets/skills/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe Payment",
    Image: "/assets/skills/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node js",
    Image: "/assets/skills/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/assets/skills/mongodb.png",
    width: 40,
    height: 40,
  },
];

const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];

const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Postger SQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    Image: "/prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    Image: "/graphql.png",
    width: 80,
    height: 80,
  },
];

const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    Image: "/tauri.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },
];

const Other_skill = [
  {
    skill_name: "Go",
    Image: "/go.png",
    width: 60,
    height: 60,
  },
];
