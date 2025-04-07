import React from 'react'
import MotionDiv from '../ui/motion-div'

export default function description() {
  return (
    <section
    id="about"
    className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
  >
    <div className="order-2 lg:order-1 lg:w-2/3">
      <MotionDiv delayOffset={0.2}>
        <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
      </MotionDiv>
      <article className="flex flex-col gap-4">
        <MotionDiv delayOffset={0.4}>
          <p>
            Hello, I'm Locke TENG and my Chinese is
            <span className="whitespace-nowrap"> 滕子涵</span>
            . I'm a <b>Front—End</b> developer based
            in Nanjing, China.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={0.5}>
          <p>
            As a technologies enthusiast, I am highly passionate about
            building full-stack web applications. And I love learning new
            technologies, especially elegant code architectures and design
            patterns. I hope to leverage my technical skills to build valuable
            apps that can make a difference in people's lives.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={0.6}>
          <p>
            Outside of programming, I am also a photographer and filmmaker, I
            enjoy doing photography and filmmaking and all things visual. I
            hope my works can aspires people to see the beauty of the world
            around us. So welcome to subscribe to my social media channels
            above to see my works!
          </p>
        </MotionDiv>
      </article>
    </div>
    <div className="lg:order-2 lg:w-1/3">
      {/* <div delayOffset={0.4}>
        <CoolPortraitCard className="hidden lg:block">
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all"
          />
        </CoolPortraitCard>
      </div> */}
      <div>
        <img
          src="/photo.jpeg"
          alt="photo"
          className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
        />
      </div>
    </div>
  </section>
  )
}
