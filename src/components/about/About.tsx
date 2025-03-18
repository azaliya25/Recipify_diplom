import Image from "next/image";
import AboutText from "@/components/about/AboutText.tsx/AboutText.tsx";

export default function About() {
    return (
        <div className="flex justify-center items-center h-[850px] w-full relative top-[-100px] mobile-xs:top-[100px]">
            <div className="fixed inset-0 w-full h-full overflow-hidden">
                <Image
                    className="w-full h-full object-cover"
                    src="/grid.png"
                    alt=""
                    layout="fill"
                    priority
                />
            </div>

            <div className="flex justify-center items-center absolute top-0 w-full h-full max-h-[500px] lg:max-h-[580px] xl:max-h-[620px] z-10">
                <AboutText />
            </div>
        </div>
    );
}
