import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeCard/HomeCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";
const HomeCarosal = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 }
    };

    const slidePrev = () =>setActiveIndex(activeIndex - 1);
    const slideNext = () =>setActiveIndex(activeIndex + 1);
    const syncActiveIndex=({ item })=>setActiveIndex(item);

    const items = data.map((item) => <HomeCard key={item.id} product={item} />);
    return (
        <div>
            <h2 className="text-2xl  text-left font-extrabold text-gray-800 py-5 px-2">{sectionName}</h2>
            <div className="relative p-5 ">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !==0 && (
                <Button variant="contained" className="z-50 bg-white"  onClick={slidePrev} sx={{ position: "absolute", top: "10rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgColor: "white", }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "white" }} />
                </Button>)}
                {activeIndex !== items.length-5 &&
                <Button variant="contained" className="z-50 bg-white" onClick={slideNext} sx={{ position: "absolute", top: "10rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgColor: "white", }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "white" }} />
                </Button>}
                
            </div>
        </div>
    )
}
export default HomeCarosal;

   