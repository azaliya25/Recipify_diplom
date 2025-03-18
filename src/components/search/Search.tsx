// import Image from "next/image";
import SearchText from "@/components/search/SearchText/SearchText.tsx";

export default function Search() {
    return (
        <div className="flex justify-center items-center w-full relative mx-8 mb-[50px] lg:mb-[80px] xl:mb-[100px]">
            <div className="flex justify-center items-center w-full h-screen absolute lg: max-h-[400px] md:max-h-[500px] lg:max-h-[580px] xl:max-h-[620px] z-10">
                {/* <Image
                    className="w-full h-full"
                    src="/grid.png"
                    alt="fon image"
                    width={1203}
                    height={1400}
                    priority
                /> */}
                <SearchText />
            </div>
        </div>
    );
}

// relative top-[-320px] mobile-xs:top-[-200px] md:top-[-200px] lg:top-[-100px] xl:top-[-50px]