import React from 'react'
import "./Details.scss";
import FallBack from "../../assets/no-results.png";
import { useLocation, useParams } from 'react-router-dom';
import dayjs from "dayjs"

const Details = () => {
    const { postId } = useParams();
    const location = useLocation();
    const post = location.state;
    return (
        <div className='max-w-6xl mx-auto my-8'>
            <div className='pr-5 flex-1 flex flex-col space-y-5'>
                <h2 className='text-black text-4xl font-semibold'>{post?.title}</h2>
                <div className="flex justify-between items-end text-gray-700 font-medium">
                    <div>
                        <h2>Author :{post?.author}</h2>
                        <h2>Source :{post?.source.name}</h2>
                    </div>
                    <h2>Date :{dayjs(post?.publishedAt).format("MMM D, YYYY")}</h2>
                </div>
                <img className="saturate-150 border-2 shadow-2xl shadow-gray-700 border-black w-full h-auto rounded-2xl" src={post.urlToImage || FallBack} alt="newsImg" />
                <h3 className='leading-relaxed text-black font-semibold'>{post?.description}</h3>

                <h3 className='leading-relaxed text-lg text-black'>{post?.content} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum aut adipisci cumque ea nesciunt magnam, amet obcaecati nihil molestiae, aliquam aspernatur ad commodi eveniet totam doloremque sunt inventore illum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, sit! Dolore facere quod unde sit corporis? Aliquam, provident unde. Magnam sit recusandae unde provident et quis reprehenderit eligendi ut eos facilis quos aliquid error a, molestias dolore natus necessitatibus explicabo nam vitae cum earum optio? Est, inventore officiis. Dicta harum in eligendi, molestiae voluptates amet?
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis tincidunt nulla ut consectetur. Etiam in nisi vitae libero condimentum sagittis et at tortor. Sed ut turpis placerat, dapibus urna sit amet, ullamcorper arcu. Aenean et diam et lacus auctor tempor. Fusce mollis magna sed lorem pellentesque posuere. Praesent nibh dui, volutpat sit amet ex nec, facilisis tristique sapien. Phasellus elementum elit malesuada sapien molestie pharetra. Nunc in magna orci. Fusce quam dui, condimentum ac nisl ac, egestas gravida ante. Donec metus nunc, sollicitudin et pretium ut, viverra a nibh. In molestie leo mauris, sed cursus purus consectetur nec. Nam id sem a ipsum tempor condimentum in accumsan est.

                    Maecenas ullamcorper placerat sagittis. Maecenas aliquam ipsum non vulputate hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse venenatis consequat est a eleifend. Nam mauris nulla, pulvinar a lacinia sed, eleifend id metus. Morbi suscipit sollicitudin venenatis. Phasellus nec aliquet ante. Nullam varius id urna ut porta. Cras vel fermentum tellus, nec molestie erat. Praesent vel fermentum elit. Pellentesque non tortor consectetur, varius urna in, vulputate elit. Donec massa purus, rutrum ut nisi vel, interdum molestie enim.

                    Curabitur eu mauris felis. Praesent magna velit, sodales ac libero ut, lacinia efficitur ex. Integer id semper tellus. Praesent dolor augue, gravida quis scelerisque eget, congue sed sem. Vivamus sodales non ante ac eleifend. Suspendisse id diam ut tellus ullamcorper maximus. Duis varius, est vel iaculis lobortis, tellus ante posuere dui, eu porta ante risus ut lorem. Mauris hendrerit, tellus id pretium aliquet, lacus leo ullamcorper metus, eget condimentum nulla orci posuere nunc.

                    Sed et elit dignissim, sollicitudin ligula vel, aliquet nunc. Nullam convallis purus sed consectetur dapibus. Maecenas sagittis mauris id ante euismod, vel lacinia eros tempus. Quisque porta arcu ipsum, at scelerisque metus feugiat sit amet. Fusce a sapien et metus lacinia pellentesque. Quisque eget purus sit amet dui blandit pretium. Pellentesque vel efficitur quam. Etiam eget rhoncus lacus, blandit feugiat sem. Phasellus vestibulum aliquam tempor. Duis lacinia sem molestie magna vestibulum consectetur. Aenean vitae metus eget turpis viverra feugiat. Donec consectetur egestas neque, id luctus elit viverra dictum. Mauris euismod venenatis enim at pretium. Aliquam mi lorem, aliquet et commodo sed, vulputate vel leo.

                    Quisque convallis pretium ex vel lobortis. Proin ex quam, tempor sit amet ligula id, placerat rutrum tortor. Nulla at odio vel quam eleifend finibus a a metus. Quisque placerat mattis orci. Maecenas vel nisl sit amet felis fringilla blandit nec sit amet magna. Donec scelerisque ipsum eget luctus venenatis. Cras posuere libero neque, ac condimentum quam pretium a. Aliquam in dignissim leo. Phasellus sodales odio sed est ornare, at malesuada ex tempus. Phasellus varius massa in dolor pulvinar, sit amet ultricies quam semper. Sed euismod hendrerit quam, eu lacinia diam faucibus vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac rhoncus enim. Suspendisse sapien risus, consectetur et risus eu, rhoncus blandit magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent laoreet nulla nec velit tempus, in porta dolor lacinia.</h3>
                <h3 className='text-black text-3xl'>Link to original page : <a target="_blank" href={post?.url} className='text-blue-900'>Click Here</a></h3>
            </div>
            <div>
            </div>

        </div>
    )
}

export default Details