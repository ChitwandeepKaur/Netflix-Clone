import useBillboard from "@/hooks/useBillboard"
import React        from "react"
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Billboard = () => {

    const { data: randomMovie } = useBillboard()
    return (
        <div className="relative h-[75%]">
            <video 
                className="w-full h-[100%] object-cover brightness-[60%]"
                autoPlay
                muted
                loop
                src={randomMovie?.videoUrl} 
                poster={randomMovie?.thumbnail}>
            </video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p 
                className="
                    text-white 
                    text-1xl 
                    md:text-5xl 
                    h-full 
                    w-[100%] 
                    lg:text-6xl 
                    font-bold 
                    drop-shadow-xl">
                {randomMovie?.title}
                </p>
                <p 
                className="
                    text-white 
                    text-[8px] 
                    md:text-lg 
                    mt-3 
                    md:mt-8 
                    w-[90%] 
                    md:w-[80%] 
                    lg:w-[60%] 
                    drop-shadow-xl">
                    {randomMovie?.description}
                </p>
                <div className="
                    flex
                    flex-row
                    items-center
                    mt-3
                    md:mt-4
                    gap-3">
                    <button className="
                        bg-white
                        text-white
                        bg-opacity-30
                        rounded-md
                        py-1
                        md:py-2
                        px-2
                        md:px-4
                        w-auto
                        text-xs
                        lg:text-lg
                        font-semibold
                        flex
                        flex-row
                        items-center
                        hover:bg-opacity-20
                        transition">
                        <AiOutlineInfoCircle className="mr-2"/>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Billboard