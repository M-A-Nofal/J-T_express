import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://cdn.shopify.com/s/files/1/0506/5736/2089/files/WEFS-HB2-EN---001.jpg?v=1683287215",
        "https://cdn.shopify.com/s/files/1/0506/5736/2089/files/ML-40-HB2-EN---001.jpg?v=1683454150",
        "https://cdn.shopify.com/s/files/1/0506/5736/2089/files/LP-HB2-EN---002.jpg?v=1680607015",
        "https://cdn.shopify.com/s/files/1/0506/5736/2089/files/Beachwear-HB2-EN---002.jpg?v=1681813849",
    ];

    const pervSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev -1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev +1)
    }

  return (
    <div className=" w-full h-screen overflow-hidden">
        <div className=" h-screen w-screen relative">
            <div className=" w-[400vw] h-full flex transition-transform duration-1000"  style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img className=" w-screen h-full object-cover" src={data[0]} alt="sliderimg1" loading="poriority" />
                <img className=" w-screen h-full object-cover" src={data[1]} alt="sliderimg2" loading="poriority" />
                <img className=" w-screen h-full object-cover" src={data[2]} alt="sliderimg3" loading="poriority" />
                <img className=" w-screen h-full object-cover" src={data[3]} alt="sliderimg4" loading="poriority" />
            </div>
            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
                <div className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300" onClick={pervSlide}>
                    <HiArrowLeft />
                </div>
                <div className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300" onClick={nextSlide}>
                    <HiArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider