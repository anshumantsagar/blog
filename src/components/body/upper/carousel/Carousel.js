import React from "react";
import { Carousel } from "react-responsive-carousel";

//importing images
import one from '../../../../assets/images/1.jpg';
import two from '../../../../assets/images/2.jpg';
import three from '../../../../assets/images/3.jpg';

const items = [
    {
        id:1,
        imgSrc:one,
        legend:'Legend 1'
    },
    {
        id:2,
        imgSrc:two,
        legend:'Legend 2'
    },
    {
        id:3,
        imgSrc:three,
        legend:'Legend 3'
    }
]

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src={items[0].imgSrc} />
            <p className="legend">{items[0].legend}</p>
        </div>
        <div>
            <img alt="" src={items[1].imgSrc} />
            <p className="legend">{items[1].legend}</p>
        </div>
        <div>
            <img alt="" src={items[2].imgSrc} />
            <p className="legend">{items[2].legend}</p>
        </div>
    </Carousel>
);
