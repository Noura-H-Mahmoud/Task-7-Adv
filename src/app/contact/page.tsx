import imgHero from "@/app/assets/images/Hero2.png";

export default function Contact() {
  return (
    <div className="h-screen bg-cover bg-center max-[1275px]:pt-36 md:pt-28 "
      style={{ backgroundImage: `url(${imgHero.src})` }}>
      <p className="font-podcast text-white text-5xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        This page is not complete yet
      </p>
    </div>
  )
}
