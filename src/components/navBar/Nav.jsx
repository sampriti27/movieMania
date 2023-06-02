import React from "react";

const Nav = () => {
  return (
    <>
      <nav class="relative flex w-full flex-wrap items-center justify-between bg-[#609966] py-2 text-[#EDF1D6] shadow-lg lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a class="text-xl font-semibold text-[#EDF1D6]" href="/">
              Movie Mania
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
