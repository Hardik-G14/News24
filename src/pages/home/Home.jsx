import React from "react";
import fetchApi from "../../hooks/fetchApi";
import "./Home.scss";
import Slider from "../../components/slider/Slider";
import Businees from "./Business";
import General from "./General";
import Health from "./Health";
import Science from "./Science";
import Sports from "./Sports";
import news1 from "../../assets/news1.svg";
import news2 from "../../assets/news2.svg";

const Home = () => {
  const { data } = fetchApi("/top-headlines?country=in");
  console.log(data?.articles);

  return (
    <>
      <Slider data={data?.articles} />
      {/* <Businees/>
      <General/>
      <Health/>
      jello
      <Science/>
      <Sports/> */}
      <div className="bg-black">
        <div className="max-w-6xl m-auto space-y-12 py-12">
          <div className="flex flex-col md:flex-row">
            <img src={news1} alt="hello" className="h-96 w-1/2" />
            <div className="mt-12 w-1/2">
              <h1 className="font-bold text-3xl  mb-4"> Read news on the go</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum vel cupiditate, consectetur, doloribus voluptatem fugiat quam non sequi alias nisi assumenda optio facilis excepturi iusto voluptatibus, eaque temporibus! Quisquam!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae impedit mollitia et voluptas? Autem mollitia suscipit exercitationem quaerat omnis ea harum, a incidunt, eaque quas molestiae voluptates, deserunt adipisci.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mt-12 w-1/2">
              <h1 className="font-bold text-3xl  mb-4">Get exciting news daily of various categories</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum vel cupiditate, consectetur, doloribus voluptatem fugiat quam non sequi alias nisi assumenda optio facilis excepturi iusto voluptatibus, eaque temporibus! Quisquam!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae impedit mollitia et voluptas? Autem mollitia suscipit exercitationem quaerat omnis ea harum, a incidunt, eaque quas molestiae voluptates, deserunt adipisci.</p>
            </div>
            <img src={news2} alt="hello " className="h-96 w-1/2" />
          </div>

        </div >
      </div>
    </>
  );
};

export default Home;
