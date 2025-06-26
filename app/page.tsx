import { Hero } from "@/components/ui/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/CardBackground";
import { CardDemo } from "@/components/ui/Card";
import { InfiniteMovingCards } from "@/components/ui/Testimonials";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Zyngle helped me find people who actually vibe with me. No filters, no fakes — just pure connection.",
      name: "Ridhima",
      title: "Found her tribe through memes and music 🎶",
    },
    {
      quote:
        "I met people who share the same late-night chaos energy. Zyngle feels personal.",
      name: "Ajatshatru Singh",
      title: "Midnight rants? Always matched 🌙",
    },
    {
      quote:
        "I joined Zyngle just to try it out... and ended up talking for 3 hours with someone about anime and life.",
      name: "Arpita Mishra",
      title: "Introvert turned vibe queen ✨",
    },
    {
      quote: "Honestly? This app gets my vibe. The AI match felt like magic.",
      name: "Khushi Gupta",
      title: "Matched over indie playlists 💜",
    },
    {
      quote:
        "Never thought I'd post my random thoughts and be seen for real. No pressure, just vibes.",
      name: "Ayush Raj",
      title: "Lowkey poster, highkey connector 🧠",
    },
    {
      quote:
        "Zyngle is where I met people who get my dark jokes and late-night moods.",
      name: "Pallavi Jaiswal",
      title: "Dark humor? Matched instantly.",
    },
    {
      quote:
        "It’s not just another app. It’s a space. A *safe* one. That’s rare.",
      name: "Sparsh Srivastava",
      title: "Real convos over random posts 💬",
    },
    {
      quote:
        "From memes to midnight rants — found people who get me without saying much.",
      name: "Anvesh Mishra",
      title: "Unfiltered, unmatched.",
    },
    {
      quote: "I vibed with strangers. Now they’re my comfort people.",
      name: "Aarya P Jayanti",
      title: "Digital diary turned real friendships 📖",
    },
    {
      quote:
        "This app doesn’t make you feel like you’re performing. You just *are*.",
      name: "Abhishek Kumar Bandela",
      title: "Being real is finally cool 😌",
    },
    {
      quote:
        "If you're tired of curated feeds and fake smiles, Zyngle is your place.",
      name: "Sathvik Dheer",
      title: "Real ones only zone 🔒",
    },
    {
      quote:
        "I connected with people over random, raw posts. It’s wholesome here.",
      name: "Sahil Shaikh",
      title: "Soft-spoken but seen 🌱",
    },
    {
      quote: "The best part? No swiping. Just sync.",
      name: "Devesh Jaiswal",
      title: "Low effort, high value.",
    },
    {
      quote: "Zyngle made it easy to find chill people without the cringe.",
      name: "Paras",
      title: "Here for the vibes, stayed for the people.",
    },
    {
      quote: "Finally, an app that doesn't expect me to be someone else.",
      name: "Jasleen Kaur Jaswal",
      title: "Showed up as me. That was enough 💗",
    },
    {
      quote:
        "This is what real social media should feel like. Honest, easy, and warm.",
      name: "Aditi Shukla",
      title: "No pressure. Just presence.",
    },
    {
      quote:
        "Sometimes I just need a place to vent and feel heard. Zyngle gave me that space.",
      name: "Suhani Gupta",
      title: "Talked about her day. Felt lighter 🌻",
    },
    {
      quote:
        "Zyngle felt different. I connected with people who value deep, understanding friendships.",
      name: "Vandana Priyashi",
      title: "Here for meaningful, mature vibes 🤍",
    },
  ];

  return (
    <>
      <Hero />
      <BackgroundGradientAnimation containerClassName="z-0">
        <h1 className="text-white text-center text-5xl py-14">
          Three Steps to Real Friendships ✨
        </h1>
        <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-16 py-2  relative z-10">
          <CardDemo
            title=" Create Your Vibe Profile"
            description="Pick your interests, drop memes, share your music taste, and post your unfiltered thoughts — this is where your digital vibe begins."
            bgImage="https://i.pinimg.com/736x/1e/76/91/1e7691170c80ed8c1d40448a05585221.jpg"
            hoverImage="https://i.pinimg.com/originals/e6/da/d0/e6dad09929e1214ca5323681943c63a3.gif"
          />
          <CardDemo
            title=" Get Matched With Your People"
            description="Our AI connects you with people who match your energy using shared tags, tone of posts, and mutual interests — no swiping, no stress."
            bgImage="https://i.pinimg.com/736x/e1/48/0b/e1480b2af78dd495ba9ba457c3f75fe6.jpg"
            hoverImage="https://i.pinimg.com/originals/6f/11/d6/6f11d625720b3ff9995b5b6731ddfa09.gif"
          />
          <CardDemo
            title=" Talk. Post. Chill."
            description="Start chatting, post about your day, or join interest rooms. No pressure to impress — just real connections and low-key vibes."
            bgImage="https://i.pinimg.com/736x/a8/b4/cb/a8b4cb7a01a52059dcf8d99128c233fd.jpg"
            hoverImage="https://i.pinimg.com/originals/18/97/89/1897892f8f077127a69115c6e41c37d2.gif"
          />
        </div>
      </BackgroundGradientAnimation>
      <div className="bg-zinc-900 py-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        ></InfiniteMovingCards>
        <Footer />
      </div>
    </>
  );
}
