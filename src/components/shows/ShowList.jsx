import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { Badge } from "@chakra-ui/react";

const ShowList = () => {
  const [data, setData] = useState([]);
  //fetch the shows
  const fetchShows = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      console.log(res.data);
      setData(res.data);

      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  console.log(data);
  return (
    <div className="px-4 sm:px-6 lg:px-24 mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h3 className="text-3xl font-semibold mb-2 text-[#40513B]">
            Show <span className="text-[#609966]"> List</span>
          </h3>
          <div class="border-b-2 border-black mt-4 w-8"></div>
          <p className="mt-2 text-base text-gray-700">
            List of all the shows are displayed in the table below.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 overflow-none z-0">
                <thead className="bg-[#9DC08B]">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm md:text-base font-semibold text-[#EDF1D6] sm:pl-6"
                    >
                      SNo
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm md:text-base font-semibold text-[#EDF1D6]"
                    >
                      Show Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm md:text-base font-semibold  text-[#EDF1D6]"
                    >
                      Genre
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm md:text-base  font-semibold  text-[#EDF1D6]"
                    >
                      Premiered
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm md:text-base font-semibold  text-[#EDF1D6]"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm md:text-base font-semibold  text-[#EDF1D6]"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item, ind) => {
                    return (
                      <>
                        <tr key={item.show.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs sm:text-sm sm:pl-6">
                            <span> {ind + 1}.</span>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-3 text-sm sm:pl-6">
                            <div className=" flex flex-col md:flex-row items-center gap-5 mb-3">
                              <div className="h-10 w-15 flex-shrink-0  items-center">
                                <img
                                  className="sm:h-12 sm:w-15 h-8 w-12"
                                  src={item.show.image.medium}
                                  alt={item.show.name}
                                />
                              </div>
                              <div className="font-medium text-[#40513B]">
                                {item.show.name}
                              </div>
                            </div>
                          </td>

                          <td className="whitespace-nowrap px-3 py-4  text-gray-500">
                            <div className="text-gray-500 font-medium text-base">
                              {item?.show.genres.map((curr, i) => {
                                return (
                                  <span className="ml-2">
                                    <Badge>{curr} </Badge>
                                  </span>
                                );
                              })}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {" "}
                            <div className="text-gray-500  font-medium">
                              {item.show.premiered}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                            <div
                              className="flex items-center  gap-2
            
                      "
                            >
                              <AiFillStar
                                className="text-yellow-500"
                                size="1.2rem"
                              />
                              <div className="text-gray-500 font-medium ">
                                {item.show.rating.average === null
                                  ? "N.A"
                                  : item.show.rating.average}
                              </div>
                            </div>
                          </td>
                          <td className="relative whitespace-nowrap py-4 text-right text-sm font-medium sm:pr-6">
                            <div className="flex justify-end">
                              <Link
                                className={
                                  "rounded-md px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm flex  gap-1 sm:gap-2 items-center font-semibold leading-5 bg-[#609966]  text-[#EDF1D6] cursor-pointer hover:bg-[#9DC08B]"
                                }
                                to={`/show-details/${item.show.id}`}
                              >
                                More Details
                                <BsThreeDotsVertical />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
