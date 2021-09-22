import * as React from "react"
import Helmet from "react-helmet"

import Page from "../../components/Page"
import Section, { SectionNoPadding, SectionTitle } from "../../components/Section"
import Navigation from "../../components/Navigation"
import Cover, { CTADown } from "../../components/Cover"
import IntroStats from "../../components/IntroStats"
import FAQs, { FAQ } from "../../components/FAQs"
import Philosophy from "../../components/Philosophy"
import ContactForm from "../../components/ContactForm"
import SocialIcon from "../../components/SocialIcon"
import Panel from "../../components/Panel"

import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.svg"
import email from "../../images/email.svg"
import moneyBox from "../../images/moneyBox.svg"
import doubled from "../../images/doubled.png"
import party from "../../images/party.svg"

const IndexPage = () => (
  <Page>
    <Helmet>
      <title>Raise Glasgow</title>
      <meta property="og:title" content="Raise Glasgow" />
    </Helmet>
    <Cover>
      <Navigation
        left={[
          { text: "Home", href: "/glasgow/" },
          { text: "How It Works", href: "/glasgow/#how-it-works" },
          { text: "FAQs", href: "/glasgow/#faq" },
          { text: "Our Philosophy", href: "/glasgow/#our-philosophy" },
          { text: "Contact", href: "/glasgow/#contact" },
        ]}
        right={[
          { text: "Join the 2021/22 committee", href: "https://forms.gle/Eo4w7mfhr35bmm5F6" },
        ]}
      />
      <SectionNoPadding className="px-8">
        <IntroStats
          title="Raise Glasgow"
          tagline="Raise is a charitable movement encouraging students to adopt a positive approach towards deliberate, effective giving."
          statistics={{
            years: 1,
            students: 90,
            raised: 9733,
            protected: 12170,
          }}
        />
      </SectionNoPadding>
      <CTADown
        text="How it works"
        href="#how-it-works"
      />
    </Cover>

    <Section id="how-it-works" className="mt-0">
      <SectionTitle>How it Works</SectionTitle>
      <div className="grid gap-5 md:grid-cols-3 md:gap-8">
        <Panel
          image={moneyBox}
          title="Donate"
          text="We invite students to make a personally significant donation to charity. We recommend a donation of £75 to the Against Malaria Foundation, but welcome any amount that is significant to you."
          className="bg-raise-purple"
        />
        <Panel
          image={doubled}
          title="Doubled"
          text="Thanks to our matched funding, 200% of the money you donate goes directly to AMF. That means that your £75, when doubled, can help protect over 170 people from malaria!"
          className="bg-raise-red"
        />
        <Panel
          image={party}
          title="Celebrate"
          text="Towards the end of each year, we come together as a community to celebrate the end of the academic year and our collective impact. There's food and drink, great company and live entertainment!"
          className="bg-raise-yellow text-black"
        />
      </div>
    </Section>

    <Section id="faq">
      <SectionTitle>More Info</SectionTitle>
      <FAQs>
        <FAQ title="Sounds great, where do I sign up?">
          <p>Awesome! Our 2021 donations period for is now closed, but you can join the 2021/22 committee <a href="https://forms.gle/Eo4w7mfhr35bmm5F6">here</a>!</p>
        </FAQ>

        <FAQ title="How can I get involved?">
          <p>We're so pleased you're interested in Raise, and look forward to celebrating with you! Here are a few ways you can help grow the movement:</p>
          <p><b>Spread the word:</b> Letting your friends know about Raise is one of the most valuable things you can do - aside from the huge impact of their donations, celebrating is more fun when we do it together! Why not show them our website, share our posts on social media, and invite friends to follow our <a href="https://www.facebook.com/raiseglasgow">Facebook</a> and <a href="https://www.instagram.com/raiseglasgow/">Instagram</a> pages themselves?</p>
          <p><b>Committee:</b> If you really want to shape the future of Raise, you could apply to join our committee, which coordinates everything we do, from events and partnerships to fundraising and publicity. Applications for the next academic year are open <a href="https://forms.gle/Eo4w7mfhr35bmm5F6">here</a>, but we're always interested in hearing from people who want to get involved!</p>
          <p><b>Sponsorship:</b> The support of our generous partners is invaluable for helping us to put on our summer celebration at the end of each year. If you know anyone who may be interested in supporting Raise and allowing us to grow even more, please do <a href="./#contact">get in touch</a>.</p>
        </FAQ>

        <FAQ title="£75 is a lot of money - what if I can't donate that?">
          <p>We recognise that £75 is a large amount of money for many students, and whilst we have thought carefully about recommending this amount (see next question), it is important to us that any student feels able to join us in celebrating through giving.</p>
          <p>As such, whilst we recommend £75, you are welcome to join Raise by making a donation of a size which is significant to you and allows you to put charity at the heart of your end-of-year celebrations. It is central to our philosophy (see <a href="./#our-philosophy">here</a> for more) that students actively engage with their decision to celebrate through giving, but we recognise that the donation that enables this will not be the same for everyone.</p>
          <p>In addition, you have the option of donating in weekly installments, as some have found this more manageable. A weekly donation of £5 from the donations launch up until our summer celebration adds up to about £75, which will still be doubled through our matched funding.</p>
          <p>Note: We have ensured that our donations page allows you to hide your name and/or donation amount, should you choose.</p>
        </FAQ>

        <FAQ title="Why do you recommend £75?">
          <p>We recognise that £75 is a large amount of money, and substantially more than most students would routinely donate to charity (indeed, that is part of the point!). There are a couple of key reasons we recommend this figure:</p>
          <p><b>Encouraging considered giving:</b> Raise is all about changing the way students think about charity, and we can only achieve this if students engage consciously with the act of donating. By inviting students to give an amount that’s personally significant to them, we hope that all donors will stop and think meaningfully about their decision to donate, and will in turn take this positive, deliberate approach towards giving forward into their future lives. This is why we recommend £75, or a donation of any size significant to the donor.</p>
          <p><b>Impact:</b> Crucially, the recommended amount, coupled with matched funding, allows us to have an exceptionally large impact for a student charity initiative; your £75 donation, when doubled, can help protect over 170 people from malaria.</p>
        </FAQ>

        <FAQ title="Can I donate to a different charity?">
          <p>At Raise, we think very carefully about which charity to recommend (see below), particularly given how much money students are donating. However, we recognise that some students may want to join us in celebrating through giving, but would prefer to donate to a different charity. This is absolutely fine, but please get in touch with us beforehand so that we are aware.</p>
          <p>Note: All matched funding will still go to the Against Malaria Foundation.</p>
        </FAQ>

        <FAQ title="Why do you recommend donating to AMF?">
          <p>At Raise, we think very carefully about which charity to recommend. When students are making such significant donations, we want to make sure the money is doing as much good as it possibly can. To make our decision, we have taken the advice of independent charity evaluators <a href="https://www.givewell.org/charities/top-charities">GiveWell</a> and <a href="https://www.givingwhatwecan.org">Giving What We Can</a>, which both rank AMF as one of the most effective charities in the world.</p>
          <p>Tragically, malaria causes 400,000 preventable deaths every year, disproportionately affecting young children and pregnant women, and has a knock-on effect on the local economy. AMF works with local partners to provide life-saving bed-nets which protect people as they sleep. To find out more about their work, see <a href="https://www.againstmalaria.com/">here</a>.</p>
          <p>Because AMF's intervention is so effective at preventing malaria, each donation can have a huge impact. For example, a donation of £75, doubled through matched funding, can help protect 170 people. In fact, the money we raised nationally in 2020 was enough to protect over 120,000 people!</p>
        </FAQ>

        <FAQ title="What makes Raise different to a charity ball?">
          <p>At Raise, our mission is to encourage students to adopt a positive, deliberate approach towards giving. As such, we focus on ensuring that each student who chooses to join can engage meaningfully with the impact of their donation. The primary role of the Summer Party is to facilitate this engagement, as an enjoyable opportunity to come together as a community and celebrate our collective impact. However, it is not the most important element of what we do, nor the purpose of donating.</p>
          <p>Crucially, the donation students make to join Raise does not constitute ‘buying a ticket’ to the party. Indeed, the funding of our summer celebration is completely separate to the donation (it’s funded through a combination of additional voluntary contributions from donors and external sponsorship). Many students have joined Raise without attending the Summer Party at all.</p>
        </FAQ>

        <FAQ title="If 100% of donations go to charity, how do you put on the summer celebration? What's it like?">
          <p>The Summer Party is a chance for us to come together and celebrate our collective impact, as well as the end of the academic year. Crucially, 100% of the money students donate goes directly to charity – none of it is used to fund the party. As such, we invite students to make an optional contribution of £10 per head, separate to their donation, to cover the costs of the event (which are generously subsidised by our sponsors). Importantly, everyone will be very welcome to join, whether or not they feel able to make this contribution.</p>
          <p>There will be music, food, drinks (alcoholic and non-alcoholic) and live entertainment, contributing to the atmosphere of celebration you’ll experience with the rest of the Raise community. It’s a fantastic chance to reflect on the impact of our donations and many of those who’ve attended elsewhere in recent years have described it as a real highlight!</p>
        </FAQ>

        <FAQ title="What about COVID-19?">
          <p>Naturally, we are aware that the COVID-19 pandemic may affect the ways in which we can come together over the course of this year, and we are keeping a close eye on the local and national guidance at every stage. However, even if we are not able to come together as an entire community, this will not stop us from marking the end of the year in true Raise style.  Whether in smaller groups or all together, we aim to create a meaningful and enjoyable format to bring the community together and celebrate our collective impact under these different circumstances.</p>
        </FAQ>
      </FAQs>
    </Section>

    <Section id="our-philosophy">
      <SectionTitle>Our Philosophy</SectionTitle>
      <Philosophy />
    </Section>

    <Section id="contact">
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="flex justify-center gap-8">
        <SocialIcon icon={instagram} alt="Instagram" href="https://www.instagram.com/raiseglasgow/" />
        <SocialIcon icon={facebook} alt="Facebook" href="https://www.facebook.com/raiseglasgow" />
        <SocialIcon icon={email} alt="Email" href="mailto:raiseglasgow@gmail.com" />
      </div>
      <ContactForm className="mt-8" action="https://formspree.io/mogdgkjm" />
    </Section>
  </Page>
)

export default IndexPage
