import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ show }) => {
  const [formdata, setFormdata] = useState({
    MovieName: "",
    UserName: "",
    Email: "",
    Phone: "",
    BookingDate: "",
    BookingTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);
    try {
      // Perform validation
      const missingFields = Object.keys(formdata).filter(
        (field) => formdata[field] === ""
      );

      if (missingFields.length > 0) {
        toast.warning("Please Fill all the Fields");
        return;
      }
      // Save form data to local storage
      localStorage.setItem("formdata", JSON.stringify(formdata));

      // Reset form fields
      setFormdata({
        MovieName: "",
        UserName: "",
        Email: "",
        Phone: "",
        BookingDate: "",
        BookingTime: "",
      });
      toast.success("Ticket Booked Succesfully!!");
    } catch (error) {
      console.log(error);
      toast.warning(error);
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-col space-y-8 md:pl-10 md:pr-24">
          <div className="flex justify-between items-center mt-12">
            <div>
              <h3 className="text-4xl font-semibold mb-2">
                Book <span className="text-[#609966]"> Ticket</span>
              </h3>
              <div class="border-b-2 border-black mt-4 w-8"></div>
            </div>
          </div>
          {/* Form */}
          <div className="">
            <form method="POST" className="space-y-6">
              <div className="">
                <div className="border-r border-l border-t border-b">
                  <p
                    htmlFor="email"
                    className="px-4 pt-4 block text-xs font-medium text-gray-400"
                  >
                    Movie Name
                  </p>
                  <input
                    id="text"
                    name="MovieName"
                    type="text"
                    value={show.show.name}
                    onChange={handleInputChange}
                    className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="border-r border-l border-t border-b">
                  <p
                    htmlFor="UserName"
                    className="px-4 pt-4 block text-xs font-medium text-gray-400"
                  >
                    Name
                  </p>
                  <input
                    id="text"
                    name="UserName"
                    type="text"
                    placeholder="Enter your Name"
                    value={formdata.UserName}
                    onChange={handleInputChange}
                    className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 placeholder:text-sm shadow-sm sm:text-sm"
                  />
                </div>
                <div className="border-r border-l border-t border-b">
                  <p
                    htmlFor=""
                    className="px-4 pt-4 block text-xs font-medium text-gray-400"
                  >
                    Email
                  </p>
                  <input
                    id="text"
                    name="Email"
                    placeholder="e.g. abc@gmail.com"
                    type="email"
                    value={formdata.Email}
                    onChange={handleInputChange}
                    className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="border-r border-l border-t border-b">
                  <p
                    htmlFor=""
                    className="px-4 pt-4 block text-xs font-medium text-gray-400"
                  >
                    Phone Number
                  </p>
                  <input
                    id="text"
                    name="Phone"
                    placeholder="Enter Your Number"
                    type="text"
                    value={formdata.Phone}
                    onChange={handleInputChange}
                    className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                  />
                </div>

                <div className="border-r border-l border-b">
                  <p
                    htmlFor=""
                    className="px-4 pt-4 block text-xs font-medium text-gray-400"
                  >
                    Enter Date of Booking
                  </p>
                  <input
                    id="text"
                    name="BookingDate"
                    placeholder="Enter the Booking Date"
                    type="date"
                    value={formdata.BookingDate}
                    onChange={handleInputChange}
                    className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="border-r border-l border-t border-b">
                  <p
                    htmlFor=""
                    className="px-4 pt-4 block text-xs font-medium text-gray-400"
                  >
                    Booking Time
                  </p>
                  <input
                    id="text"
                    name="BookingTime"
                    placeholder="eg. 5:00 p.m"
                    type="time"
                    value={formdata.BookingTime}
                    onChange={handleInputChange}
                    className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-4 flex w-full justify-center border-transparent bg-green-500 py-4 px-4 text-sm font-medium text-white shadow-sm "
                  onClick={handleSubmit}
                >
                  Book Ticket
                </button>
                <p className="text-xs mt-2 text-[#686b78] font-normal">
                  By clicking on Book Ticket , you can book{" "}
                  <span className="text-black">your ticket.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
