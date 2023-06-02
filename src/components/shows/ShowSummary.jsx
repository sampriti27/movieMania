import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BookingForm from "../booking/BookingForm";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

const ShowSummary = () => {
  const params = useParams();
  const _id = params.showId;
  const [show, setShow] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchShows = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      const data = res.data;

      setShow(data);

      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const filteredItem = show?.filter((item) => item?.show.id === Number(_id))[0];
  console.log(filteredItem);

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex flex-col sm:flex-row px-4 pt-4 gap-20">
          <div className="mt-10 flex flex-col md:w-1/3">
            <div className="flex justify-start text-gray-400 gap-2 ml-32 md:ml-10 text-lg">
              <span>{filteredItem?.show.premiered}</span>
              <span>{filteredItem?.show.runtime} m</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={filteredItem?.show.image.original}
                alt={filteredItem?.show.name}
                className="h-[300px] w-[300px] md:w-[400px] md:h-[400px] p-2"
              />

              <div className="flex items-center justify-center gap-5 mt-4">
                {filteredItem?.show.genres.map((curr, i) => {
                  return (
                    <div className="flex gap-2">
                      <Badge variant="outline" fontSize="lg">
                        {curr}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col  mt-2 md:mt-20 text-center md:w-2/3">
            <div className="flex justify-between gap-10 items-center w-full">
              <div className="flex flex-col">
                <h3 className=" text-2xl md:text-3xl font-semibold mb-2 text-[#40513B]">
                  Show <span className="text-[#609966]"> Summary</span> &nbsp;
                  <span>({filteredItem?.show.name})</span>
                </h3>
                <div class="border-b-2 border-black mt-4 lg:w-8 w-0"></div>
              </div>

              <div>
                <Button
                  colorScheme="green"
                  className="mr-5"
                  onClick={handleClick}
                >
                  Book Ticket
                </Button>
              </div>
            </div>
            <div className="mt-5 flex gap-2 items-center">
              <span className=" text-lg md:text-xl text-[#609966] font-semibold">
                Rating:{" "}
              </span>
              <div className="flex gap-2 items-center">
                <AiFillStar className="text-yellow-500 text-sm sm:text-xl" />
                <span>
                  {filteredItem?.show.rating.average === null
                    ? "N.A"
                    : filteredItem?.show.rating.average}
                </span>
              </div>
            </div>

            <div className="mt-4 max-w-lg ">
              <p className="text-lg text-gray-700 tracking-tighter text-left">
                {filteredItem?.show.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Book ticket form  */}
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <BookingForm show={filteredItem} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShowSummary;
