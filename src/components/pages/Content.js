import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import bg from "./bg.png";
import bgFooter from "./bgfooter.svg";
import collegeLogo from "./collegeLogo.png";

const Content = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-2 ">
        <div className="tags">
          <button className="text-gray-800 bg-transparent py-2 px-6 focus:outline-none rounded text-base+ text-center mr-2 font-bold">
            APPLIED FILTERS
          </button>
          <button className="text-gray-500 bg-transparent border-2 py-2 px-4 focus:outline-none rounded text-base+ text-center  mr-2">
            Bangalore
            <span className="ml-3">
              <i class="fas fa-times" aria-hidden="true"></i>
            </span>
          </button>
          <button className="text-gray-500 bg-transparent border-2 py-2 px-4 focus:outline-none rounded text-base+ text-center  mr-2">
            Bangalore
            <span className="ml-3">
              <i class="fas fa-times" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="select">
          <Box sx={{ minWidth: 140 }}>
            <FormControl
              fullWidth
              className="text-gray-500 bg-transparent border-2 py-2 px-4 focus:outline-none rounded text-base+ text-center  mr-2"
            >
              <InputLabel id="demo-simple-select-label">Best Match</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Best Match"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>{" "}
        </div>
      </div>
      <div className=" p-4 rounded-lg border-2">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative shadow">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={bg}
                    alt="blog"
                  />
                  <img
                    class="lg:h-20 md:h-36 w-full object-cover object-center absolute top-28"
                    src={bgFooter}
                    alt="blog"
                  />
                  <div className="flex items-center justify-between absolute top-0 py-5 w-full ratings">
                    <div>Feature</div>
                    <div>
                      4.0 <i class="fas fa-star" aria-hidden="true"></i>{" "}
                    </div>
                  </div>
                  <div className="flex items-start absolute top-1/3 py-5">
                    <img className="py-1" src={collegeLogo} alt="" />
                    <div className="text-white w-full">
                      <h4 className=" text-sm font-bold">
                        Maharishi Dayanand University
                      </h4>
                      <p className=" text-xs text-gray-200">
                        {" "}
                        <i class="fas fa-search-location"></i> Delhi Bypass,
                        Rohtak, Haryana{" "}
                      </p>
                    </div>
                    <i class="far fa-heart mt-14" aria-hidden="true"></i>
                  </div>
                  <div class="py-4 pt-7">
                    <div class="flex flex-wrap">
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Average Yearly Fee
                        </small>
                        <p class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </p>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>
                          Available Courses
                        </small>
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                      <div class="xl:w-1/3 lg:w-1/2 md:w-full p-2 border-l-2 border-gray-200 border-opacity-60 text-center">
                        <small style={{ fontSize: "10px" }}>Rank</small> <br />
                        <a class="inline-flex items-center font-bold text-gray-600">
                          8k - 72k
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2 mt-3" />
                    <div className="flex items-center justify-between px-2 py-3 pb-0">
                      <button className="text-blue-500 bg-transparent border-2 border-blue-500 py-2 px-6 focus:outline-none rounded text-base text-center mr-2 font-bold">
                        Brochure
                      </button>
                      <button className="text-gray-50 bg-blue-500 py-2 px-6 focus:outline-none rounded border-2 border-blue-500 text-base+ text-center mr-2 font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
