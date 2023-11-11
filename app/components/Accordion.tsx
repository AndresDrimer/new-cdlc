"use client";
import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <div className=" border-2 w-[90%]">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl ">{title}</h3>
        <div>
          <button onClick={() => setShowContent((prev) => !prev)}>
            <div className="mr-2 text-gris scale hover:text-black">{showContent ? <BsCaretDownFill/>: <BsCaretUpFill/>}</div>
          </button>
        </div>
      </div>

      <div className={` ${!showContent ? "hidden" : "block"}`}>{children}</div>

    </div>
  );
}

export default Accordion;
