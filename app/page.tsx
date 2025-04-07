import Image from "next/image";
import { Yesteryear } from "next/font/google";
import * as motion from "motion/react-client";
import "./index.css";
import Description from "./components/description";
import ContactList from "./ui/contactList";
import Skills from "./components/skills";

const yesteryear = Yesteryear({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="container overflow-x-hidden lg:px-28">
        <section className="my-8 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true, amount: 'some' }}
            className="mb-4 text-[1.4rem] md:text-[2rem] relative"
          >
            Hi I'm Locke TENG!👋
          </motion.h1>

          <div className="overflow-hidden rounded-full p-3 md:p-4">
            <motion.div>
              <video
                className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
                muted
                autoPlay
                loop
                playsInline
              >
                <source src={"/animoji.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            viewport={{ once: true, amount: 'some' }}
            className="relative "
          >
            Developer 🧑🏻‍💻
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            viewport={{ once: true, amount: 'some' }}
            className="relative "
          >
            INTJ 📚
          </motion.h1>

          <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              viewport={{ once: true, amount: 'some' }}
              className="relative"
            >
              <p>Welcome to my personal page!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
              viewport={{ once: true, amount: 'some' }}
              className="relative"
            >
              <p>
                Just a <b>✨ Front-End developer</b> who loves to build something cool.
              </p>
            </motion.div>
          </div>

          
        <div className="my-8">
          <ContactList />
        </div>
        </section>

        <Description></Description>

        <Skills></Skills>
      </main>
    </>
  );
}
