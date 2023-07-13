import React from 'react'
import FallBack from "../../assets/no-results.png";
import { useNavigate } from 'react-router-dom';
const NewsCard = ({ post }) => {
    const navigate = useNavigate();
    return (

        <div className='flex flex-col bg-white rounded-2xl' onClick={() => { navigate(`/${post.title}`, { state: post }) }}>
            <div>
                <img className="rounded-t-2xl h-64 w-full" src={post.urlToImage || FallBack} alt="img" />
            </div>
            <div className='text-black p-4 pl-9 font-medium max-w-lg'>
                <p>{post.title}</p>
            </div>
        </div>

    )
}

export default NewsCard