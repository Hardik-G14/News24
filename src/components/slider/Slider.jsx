import './Slider.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button } from '@mui/material';
import { useRef } from 'react';
import fallBackImg from '../../assets/no-results.png'
const Slider = ({ data }) => {
    const carouselContainer = useRef();
    const navigate = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth)
                : container.scrollLeft + (container.offsetWidth);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className='slider-wrapper'>
            <div className='slider' ref={carouselContainer}>
                {data?.map((post, index) => {
                    return (
                        <div className='slides' key={index}>
                            <img src={post?.urlToImage ? post?.urlToImage : fallBackImg} alt={post?.title} />
                            <div className='content'>
                                <h3>{post?.title}</h3>
                                <p>{post?.description}</p>
                                <Button variant='outlined' sx={{ color: "white", border: "2px solid white" }}
                                    href={post?.url}
                                    target='_blank'>Read More</Button>
                            </div>
                        </div>)
                })}
            </div>
            <div>
                <ArrowCircleLeftIcon className='navigators left' onClick={() => navigate("left")} />
                <ArrowCircleRightIcon className='navigators right' onClick={() => navigate("right")} />
            </div>
        </div >
    );
}

export default Slider;