import React from 'react'
import "./Explore.scss";
import NewsCard from './NewsCard';
import useFetch from "../../hooks/fetchApi";
import { useParams } from 'react-router-dom';

const ExploreSearch = () => {
    const { searchRes } = useParams();
    console.log(searchRes);
    const { data, loading } = useFetch(`/everything?q=${searchRes}`);
    console.log(data);
    return (
        <div className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-4 gap-4 my-4'>
            {!loading ? (
                <>
                    {data?.articles?.map((post, index) => {
                        return (<NewsCard post={post} key={index} />)
                    })}
                </>
            ) : (
                <>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>
                    <div className='w-auto h-96 bg-white opacity-50 rounded-2xl'></div>

                </>
            )}
        </div>
    )
}

export default ExploreSearch