// import Image from "next/image";
import SearchText from "@/components/search/SearchText/SearchText.tsx";

export default function Search() {
    return (
        <div className="flex justify-center items-center w-full my-[200px] mx-8">
            <div className="flex justify-center items-center absolute bottom-8 w-full h-full  max-h-[620px] z-10">
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
