"use client";

import React, { useRef, useState, useEffect } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { FloatingDock } from "@/components/ui/dock";
import ZyngleNavbar from "@/components/ui/Navbar";
import { NewsCard } from "@/components/ui/NewsCard";
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconSearch,
  IconCirclePlus,
  IconMessageCircle2,
  IconTrendingUp,
  IconUsers,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const newsItems = [
    {
      title: "Musk backs Trump after threat",
      description:
        "Musk credits Trump for Gaza ceasefire deal, praises efforts in bold online post.",
      bgImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202507/musk-praises-trump-for-resolving-global-conflicts-reuters-020455409-16x9_0.jpg?VersionId=TvmdqTIn.W54qgo613gknoy3sN7Vv4YS&size=690:388",
    },
    {
      title: "NASA Plans Moon Base by 2030",
      description:
        "The Artemis mission sets sights on a permanent human base on the Moon.",
      bgImage:
        "https://images.newscientist.com/wp-content/uploads/2022/09/09152048/SEI_124263525.jpg",
    },

    {
      title: "Christopher Nolan’s The Odyssey Trailer",
      description:
        "The first look of Christopher Nolan’s much-awaited The Odyssey is finally out",
      bgImage:
        "https://images.news18.com/ibnlive/uploads/2025/07/news18-18-2025-07-a5ef172cf003083615f6673641b440b0-16x9.png?impolicy=website&width=640&height=360",
    },
    {
      title: "Panchayat Season 4 Released",
      description: "The highly awaited season of Panchayat has created a hype.",
      bgImage: "/ps4_cleanup.jpeg",
    },
    {
      title: "Diddy Verdict Stalls on Racketeering",
      description:
        "Jury to keep deliberating after Diddy case deadlocks on top charge.",
      bgImage:
        "https://external-preview.redd.it/jury-reaches-verdict-on-4-of-5-counts-in-diddy-trial-judge-v0-MTr6TYjgcU-N1e7Hvc0rTViJW2DWPsINSJDwb9g2EeA.jpeg?width=640&crop=smart&auto=webp&s=fd3dd13e096e00572eadfca506a15e5b745598bf",
    },

    {
      title: "Ex-Bangladesh PM Hasina Gets 6-Month Jail Term by ICT",
      description:
        "Bangladesh’s ICT sentenced former PM Sheikh Hasina to six months in jail in a contempt of court case, as reported by The Dhaka Tribune.",
      bgImage:
        "https://images.indianexpress.com/2025/05/Sheikh-Hasina-1_20250513212005.jpg?w=640",
    },
  ];

  const sidebarLinks = [
    {
      label: "Home",
      href: "/home",
      icon: <IconHome2 className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Trending",
      href: "/tredning",
      icon: <IconTrendingUp className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Match",
      href: "/match",
      icon: <IconUsers className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUser className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 text-neutral-300" />,
    },
  ];

  const dockLinks = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-300" />,
      href: "/home",
    },
    {
      title: "Search",
      icon: <IconSearch className="h-full w-full text-neutral-300" />,
      href: "/search",
    },
    {
      title: "Create",
      icon: <IconCirclePlus className="h-full w-full text-neutral-300" />,
      href: "/create",
    },
    {
      title: "Chat",
      icon: <IconMessageCircle2 className="h-full w-full text-neutral-300" />,
      href: "/chat",
    },
    {
      title: "Profile",
      icon: <IconUser className="h-full w-full text-neutral-300" />,
      href: "/profile",
    },
  ];

  return (
    <div className="dark">
      <ZyngleNavbar />
      <Sidebar links={sidebarLinks} />

      <div className="ml-64  pt-16 min-h-screen flex flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
        <main className="flex-1 p-8">
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 cursor-pointer rounded-full backdrop-blur-sm"
              >
                <IconChevronLeft className="text-white h-6 w-6" />
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 mb-8 pb-2 pr-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              {newsItems.map((item, i) => (
                <NewsCard
                  key={i}
                  className="min-w-[18rem] snap-start"
                  title={item.title}
                  description={item.description}
                  bgImage={item.bgImage}
                />
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 cursor-pointer rounded-full backdrop-blur-sm"
              >
                <IconChevronRight className="text-white h-6 w-6" />
              </button>
            )}
          </div>
          <div className="relative grid grid-cols-[3fr_1fr] gap-6 mt-8">
            {/* Left Content */}
            <div>
              <h1 className="text-2xl font-bold mb-4">
                Welcome to Zyngle Home Page – This is your feed 🚀
              </h1>
              <p className="text-neutral-600 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
                ipsum ullam officia inventore in voluptate veritatis quasi
                facilis eos, sequi dolorum fuga autem id nemo ipsa quaerat quod.
                Eligendi ab libero laudantium, corrupti alias sunt. Molestiae
                exercitationem voluptatem architecto atque. Temporibus, quaerat.
                Cupiditate laboriosam eaque velit itaque quis in quas molestias
                unde doloribus ullam sunt quasi vero numquam praesentium et, eos
                enim libero accusantium dolore? Hic facilis dolorem ipsum quod.
                Eveniet excepturi accusamus esse temporibus numquam culpa
                tenetur explicabo, ratione harum sed, aliquam velit provident
                sequi! Vel accusantium cumque reprehenderit ea incidunt quam,
                sint sunt ex nihil distinctio eius repellat veniam voluptas
                veritatis in fugit quos error tempore! Quas eveniet velit
                architecto aperiam ipsa dolores nesciunt, aut, corrupti nisi
                sequi porro et perspiciatis commodi voluptate numquam dolorem?
                Tempora rem assumenda corrupti quis beatae eum eos veritatis
                quos amet delectus accusamus similique, aliquam quasi inventore
                perspiciatis deleniti necessitatibus consectetur nulla ut quo
                saepe? Repudiandae eum maxime in provident. Nemo rem cum quasi,
                quaerat ipsum numquam harum similique fugiat dicta rerum ea
                porro! Sit minima atque sed porro, ducimus nulla, mollitia
                perspiciatis facilis, vero consectetur fugit distinctio.
                Obcaecati doloremque explicabo id, quas veritatis excepturi sit
                quod asperiores et nobis amet, molestiae iste tenetur iure
                officiis nesciunt tempora temporibus, hic ipsa unde facere
                corporis maiores consequuntur! Nobis nulla, magni sapiente
                repellendus itaque illo debitis nam soluta tenetur adipisci
                quaerat aliquid perspiciatis, blanditiis iste possimus vel aut
                quas amet omnis dolore, sint fugit natus. Neque corrupti itaque
                officia illum unde excepturi numquam doloribus accusantium
                delectus facere labore harum in ratione eligendi quis nulla,
                consequuntur voluptatem quidem molestias. Voluptatem rem
                obcaecati a deleniti rerum ad alias sequi impedit veniam magnam.
                Similique nisi doloremque vero placeat omnis beatae possimus
                dolorem quam error! Sunt sapiente, tenetur vero impedit alias
                architecto consequuntur fugiat quisquam iure? Molestiae, ex?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                aspernatur suscipit itaque eveniet voluptatem dignissimos nobis
                cum fuga minima, quam inventore praesentium consectetur veniam
                ad excepturi nulla quibusdam ullam? Voluptas error labore nam
                voluptates dicta repudiandae laboriosam nemo ad perferendis
                aliquam explicabo, repellendus eaque, tempore eum aperiam
                reiciendis animi assumenda. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nam similique velit alias ea fugit
                maiores eveniet porro reprehenderit quia quidem, perspiciatis
                provident. Exercitationem voluptatibus in minus nam asperiores
                reiciendis architecto, neque doloremque eligendi placeat
                obcaecati dolore quidem vitae atque vero expedita tenetur
                nostrum. Officia, adipisci ab numquam praesentium ut facilis
                aperiam corporis asperiores aut, earum voluptatem? Aliquam
                eveniet dolores impedit aspernatur illo libero animi laborum
                voluptatem, modi, architecto doloribus quasi qui est itaque
                voluptate voluptatum ratione laudantium tempora quam. Commodi,
                deleniti asperiores. Corrupti quae temporibus vitae, impedit
                explicabo animi consequatur itaque et ea, est facere soluta
                excepturi fugit. Exercitationem quo suscipit consequatur hic,
                vel minima eius incidunt ipsam quas obcaecati architecto
                veritatis id eveniet tempore. Neque, quaerat animi molestiae
                eaque similique voluptas voluptate architecto facere!
                Accusantium nemo ipsum cum animi commodi reiciendis praesentium,
                recusandae eos nisi. Delectus minima cumque nostrum ducimus ex
                itaque ut vero ipsam esse quae adipisci facere impedit
                laboriosam libero dolores numquam odio omnis reiciendis amet
                tempore necessitatibus, modi ea? Facilis natus ut eligendi
                delectus quam dicta fugiat et veritatis vitae, quasi porro
                doloremque incidunt totam cum voluptatum quos quia! Eveniet
                reprehenderit veniam, illo aliquid cumque atque, ratione nisi
                quibusdam itaque excepturi amet, officia iste at inventore!
              </p>
            </div>

            {/* Right Sidebar Wrapper */}

            <div className="sticky left-2 right-12 top-24 w-64 m-2 px-3 overflow-y-auto max-h-[calc(100vh-5rem)] bg-white dark:bg-neutral-900 p-4 border-l dark:border-neutral-700 rounded-md shadow-md scrollbar-hide">
              <RightSidebar />
            </div>
          </div>
        </main>

        <div className="fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:pr-6 z-50">
          <FloatingDock items={dockLinks} />
        </div>
      </div>
    </div>
  );
}
