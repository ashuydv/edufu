import React from "react";
import Content from "./Content";
import Filter from "./Filter";
import "./Home.css";
import {Grid} from '@mui/material'

const Home = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container-1 mx-auto px-5 py-5 md:flex-row flex-col items-center">
          <button className="text-gray-500 bg-transparent border-2 py-2 px-6 focus:outline-none rounded-xl text-lg w-full text-center">
          Total Results 350
          </button>
          <div className=" my-4 ">
          <Grid container spacing={2} >
            <Grid item xs={3} >
              <Filter/>
            </Grid>
            <Grid item xs={9}>
              <Content/>
            </Grid>
          </Grid>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
