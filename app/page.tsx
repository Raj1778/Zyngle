import { Hero } from "@/components/ui/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/CardBackground";
import { CardDemo } from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <BackgroundGradientAnimation containerClassName="z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center py-15 relative z-10">
          <CardDemo
            title="🎨 Create Your Vibe Profile"
            description="Pick your interests, drop memes, share your music taste, and post your unfiltered thoughts — this is where your digital vibe begins."
            bgImage="https://i.pinimg.com/736x/1e/76/91/1e7691170c80ed8c1d40448a05585221.jpg"
            hoverImage="https://i.pinimg.com/originals/e6/da/d0/e6dad09929e1214ca5323681943c63a3.gif"
          />
          <CardDemo
            title="🤖 Get Matched With Your People"
            description="Our AI connects you with people who match your energy using shared tags, tone of posts, and mutual interests — no swiping, no stress."
            bgImage="https://i.pinimg.com/736x/e1/48/0b/e1480b2af78dd495ba9ba457c3f75fe6.jpg"
            hoverImage="https://i.pinimg.com/originals/6f/11/d6/6f11d625720b3ff9995b5b6731ddfa09.gif"
          />
          <CardDemo
            title="🌈 Talk. Post. Chill."
            description="Start chatting, post about your day, or join interest rooms. No pressure to impress — just real connections and low-key vibes."
            bgImage="https://i.pinimg.com/736x/a8/b4/cb/a8b4cb7a01a52059dcf8d99128c233fd.jpg"
            hoverImage="https://i.pinimg.com/originals/18/97/89/1897892f8f077127a69115c6e41c37d2.gif"
          />
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
