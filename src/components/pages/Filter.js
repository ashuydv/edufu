import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Slider,
} from "@mui/material";
import React, { useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

const Filter = () => {
  const [value, setValue] = useState([0, 150000]);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="p-4 rounded-lg border-2 sticky top-6">
      <div className=" flex items-center justify-between mb-2">
        <h6 className=" font-bold">Filters</h6>
        <h6 className=" font-semibold text-blue-500">CLEAR ALL</h6>
      </div>
      <Accordion title="TYPE">
        <div class="flex items-center">
          <div class="checkBox relative">
            <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
            {/* <span className='knob absolute left-0 -top-0.5 cursor-pointer' >
                <i class="fas fa-check-circle text-blue-500"></i>
            </span> */}
          </div>
          <label for="">All</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
          <label for="">Featured</label>
        </div>
      </Accordion>
      <hr className="mt-4 bg-gray-400 font-bold h-0.5" />
      <Accordion title="INSTITUTE TYPE">
        <div class="flex items-center">
          <div class="checkBox relative">
            <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
            {/* <span className='knob absolute left-0 -top-0.5 cursor-pointer' >
                <i class="fas fa-check-circle text-blue-500"></i>
            </span> */}
          </div>
          <label for="">College</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
          <label for="">School</label>
        </div>
      </Accordion>
      <hr className="mt-4 bg-gray-400 font-bold h-0.5" />
      <Accordion title="COURSE">
        <FormControl fullWidth variant="standard">
          <Input
            id="outlined-basic"
            placeholder="Search Courses"
            variant="outlined"
            className=" border-2 rounded-lg my-2 mb-4 border-gray-300 p-2 m-0"
            startAdornment={
              <InputAdornment position="start">
                <i class="fas fa-search" aria-hidden="true"></i>
              </InputAdornment>
            }
          />
        </FormControl>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Diploman in Accounting and Finance</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Bchelors of Commerce </label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Bachelors of Computers</label>
        </div>
      </Accordion>
      <hr className="mt-4 bg-gray-400 font-bold h-0.5" />
      <Accordion title="COURSE FEES">
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          py-2
        />
        <div className="flex items-center justify-between my-2">
          <div>
            <p>Min</p>
            <input type="text" value={valuetext} placeholder={value} />
          </div>
          <div>
            <p>Max</p>
            <input type="text" value={valuetext} placeholder={value} />
          </div>
        </div>
      </Accordion>
      <hr className="mt-4 bg-gray-400 font-bold h-0.5" />
      <Accordion title="AFFILIATED TO">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            id="outlined-basic"
            placeholder="Search Affiliated To"
            variant="outlined"
            startAdornment={
              <InputAdornment position="start">
                <i class="fas fa-search" aria-hidden="true"></i>
              </InputAdornment>
            }
          />
        </FormControl>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Bangalore Universtiy</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Christ University</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Mysore University</label>
        </div>
      </Accordion>
      <hr className="mt-4 bg-gray-400 font-bold h-0.5" />
      <Accordion title="CITY / TOWN">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            id="outlined-basic"
            placeholder="Search City or Town"
            variant="outlined"
            startAdornment={
              <InputAdornment position="start">
                <i class="fas fa-search" aria-hidden="true"></i>
              </InputAdornment>
            }
          />
        </FormControl>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Nearby</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Chennai</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="checkbox" />
          <label for="">Hyderabad</label>
        </div>
        <hr className="mt-4 bg-gray-400 font-bold h-0.5" />
      </Accordion>
      <hr className="mt-4 bg-gray-400 font-bold h-0.5" />

      <Accordion title="COLLEGE TYPE">
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
          <label for="">All</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
          <label for="">Government</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
          <label for="">Aided</label>
        </div>
        <div class="flex items-center">
          <input class=" mr-2 border-2 rounded-full" id="" type="radio" />
          <label for="">Private</label>
        </div>
      </Accordion>
    </div>
  );
};

export default Filter;
