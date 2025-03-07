import React from 'react'
import Image from 'next/image';

import MotionDiv from "@/app/ui/motion-div";
import MotionList from "@/app/ui/motion-list";

import reactIcon from "@/assets/react.png";
import nextjsIcon from "@/assets/next.png";
import vueIcon from "@/assets/vue.png";
import typescriptIcon from "@/assets/typescript.png";
import javascriptIcon from "@/assets/javascript.png";
import pythonIcon from "@/assets/python.png";

import tailwindcssIcon from "@/assets/tailwind.png";
import viteIcon from "@/assets/vite.png";

import nodejsIcon from "@/assets/nodejs.png";
import expressjsIcon from "@/assets/express.png";

import { StaticImageData } from 'next/image';

export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "Vue.js",
          icon: vueIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },
        {
          name: "Vite",
          icon: viteIcon,
        }
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
      ],
    },
    {
        title: "Languages",
        skills: [
          {
            name: "JavaScript",
            icon: javascriptIcon,
          },
          {
            name: "TypeScript",
            icon: typescriptIcon,
          },
          {
            name: "Python",
            icon: pythonIcon
          }
        ],
      },
  ];
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
    return (
      <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center">
            <Image src={icon} alt={name} priority />
          </div>
          <p>{name}</p>
        </div>
      </div>
    );
  }