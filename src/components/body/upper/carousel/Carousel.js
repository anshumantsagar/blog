import React from "react";
import { Carousel } from "react-responsive-carousel";

//importing css
import './Carousel.css'

//importing images
import one from '../../../../assets/images/1.jpg';
import two from '../../../../assets/images/2.jpg';
import three from '../../../../assets/images/3.jpg';

var items = [
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

var oneDiv = (items) => {
    return items.map(item => {
        return <div>
            <img alt='' src={item.imgSrc}/>
            <p className="legend">{item.legend}</p>
        </div>
    })
}

const carousel = props => {
    
    return(
        <Carousel autoPlay className=''>
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
        {oneDiv}
    </Carousel>
    )
}

export default carousel;

