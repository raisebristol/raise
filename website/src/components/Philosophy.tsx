import * as React from "react"
import {
  StarIcon, CakeIcon, AcademicCapIcon, CurrencyPoundIcon, UserIcon,
} from "@heroicons/react/outline"
import classNames from "classnames"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { SectionTitle } from "./Section"

gsap.registerPlugin(ScrollTrigger)

const Philosophy: React.FC = () => {
  const sectionRef = React.useRef(null)
  const sentence1Ref = React.useRef(null)
  const sentence2Ref = React.useRef(null)
  const sentence3Ref = React.useRef(null)
  const sentence4Ref = React.useRef(null)
  const sentence5Ref = React.useRef(null)

  // wait until DOM has been rendered
  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        // markers: true,
      },
      defaults: { ease: "none" },
    })

    tl.fromTo(sentence1Ref.current, { opacity: 0 }, { opacity: 1 }, 0)
      .to({}, {}, "+=2")
      .fromTo(sentence1Ref.current, { opacity: 1 }, { opacity: 0 }, "+=1")

      .fromTo(sentence2Ref.current, { opacity: 0 }, { opacity: 1 })
      .to({}, {}, "+=2")
      .fromTo(sentence2Ref.current, { opacity: 1 }, { opacity: 0 }, "+=1")

      .fromTo(sentence3Ref.current, { opacity: 0 }, { opacity: 1 })
      .to({}, {}, "+=2")
      .fromTo(sentence3Ref.current, { opacity: 1 }, { opacity: 0 }, "+=1")

      .fromTo(sentence4Ref.current, { opacity: 0 }, { opacity: 1 })
      .to({}, {}, "+=2")
      .fromTo(sentence4Ref.current, { opacity: 1 }, { opacity: 0 }, "+=1")

      .fromTo(sentence5Ref.current, { opacity: 0 }, { opacity: 1 })
      .to({}, {}, "+=4")
      .fromTo(sentence5Ref.current, { opacity: 1 }, { opacity: 0 }, "+=1")
  })

  return (
    <div className="max-w-2xl mx-auto text-left">
      <div ref={sectionRef} className="h-[400vh]">
        <div className="flex flex-col content-center items-center relative">
          <div ref={sentence1Ref} className="absolute text-center">
            <CurrencyPoundIcon height={100} />
            <p>Can you remember the last time you gave to charity?</p>
          </div>

          <div ref={sentence2Ref} className="absolute text-center">
            <CakeIcon height={100} />
            <p>Perhaps you bought something at a bake sale?</p>
          </div>

          <div ref={sentence3Ref} className="absolute text-center">
            <UserIcon height={100} />
            <p>Or sponsored a friend who ran a marathon?</p>
          </div>

          <p ref={sentence4Ref} className="absolute">
            These days, opportunities for us to do good through donations are everywhere.
          </p>

          <div ref={sentence5Ref} className="absolute">
            <p>But it's rare that we stop and think about our donation.</p>
            <p>Most of these opportunities either hide the act of giving from view - so we don't even notice it's happening - or push us to give only when we're directly asked.</p>
            <p>At Raise, we think that's a <span className="font-bold">real missed opportunity</span>.</p>
          </div>
        </div>
      </div>

      <br className="mb-4" />

      <Point className="bg-raise-purple" icon={StarIcon}>
        At Raise, we believe in the power of giving positively and deliberately, rather than engaging with charity passively or out of obligation. In our view, giving in this way is more meaningful, more sustainable, and ultimately more impactful.
      </Point>
      <Point className="bg-raise-red" icon={CurrencyPoundIcon}>
        That’s why, once a year, we invite students to make a donation that feels personally significant - an amount that makes you think about the reasons for your donation. Ultimately, we want giving to become a considered and meaningful action.
      </Point>
      <Point className="bg-raise-orange" icon={CakeIcon}>
        Our Summer Party embodies this attitude towards our giving. It’s a time when we come together to celebrate our collective impact, while enjoying the end of the year with a wonderful community.
      </Point>
      <Point className="bg-raise-yellow text-black" icon={AcademicCapIcon}>
        We want to create a culture where deliberate, positive giving is normalised at university and beyond. And so, we encourage students to take this philosophy forward into their future lives, for example by pursuing an impactful career or taking a long-term giving pledge.
      </Point>

      <iframe className="w-full mt-12 rounded shadow-raise" title="YouTube: Rethinking Celebration: The Positive Case for Giving" width="560" height="315" src="https://www.youtube-nocookie.com/embed/fvjeG7xE-wE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <p className="text-center text-xl mt-2">Check out our founder's TEDx Talk, 'Rethinking Celebration: The Positive Case for Giving', which talks all about our feel-good philosophy!</p>
    </div>
  )
}

const Point: React.FC<{ className?: string, icon: React.FC<{ width?: number, height?: number }> }> = ({ className, icon: Icon, children }) => (
  <div className={classNames("flex mt-4 p-4 rounded shadow-raise", className)}>
    <div><Icon width={60} height={60} /></div>
    <p className="ml-8">
      {children}
    </p>
  </div>
)

export default Philosophy
