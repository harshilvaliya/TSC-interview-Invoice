import Image from "next/image";
import React from "react";

type Props = {};

const TotalInvoice = (props: Props) => {
  return (
    <>
      <div className="flex gap-4 place-items-center justify-evenly">
        <div className="flex flex-col w-full items-center pt-5">
          <p className="font-medium text-4xl">Invoice</p>
          <p className="font-normal opacity-30">No Invoice</p>
        </div>

        <div className="w-full justify-center pt-5 ">
          <label htmlFor="filter" className="pr-4 font-medium">
            Filter by Status :{" "}
          </label>
          <select
            name="filter"
            id="filter"
            className="px-2 border-2 border-spacing-3"
          >
            <option value="draft">Draft</option>
            <option value="draft">Pending</option>
            <option value="draft">Paid</option>
          </select>
        </div>

        <div className="flex w-full justify-center pt-5">
          <button className="flex gap-2 items-center p-3 text-xs font-bold capitalize rounded-full transition text-white bg-[#7C5DFA] hover:bg-[#9277FF]">
            New Invoice
          </button>
        </div>
      </div>

      <div className="flex w-full justify-center pt-[15dvh]">
        <Image
          src="/illustration-empty.svg"
          alt="empty"
          width={300}
          height={300}
        />
      </div>

      <div>
        <p className="text-2xl font-semibold flex w-full justify-center pt-5">
          There is nothing here.
        </p>
        <p className="text-base font-normal opacity-60 flex w-full justify-center pt-1">
          create a new invoice by clicking new invoice button.
        </p>
      </div>
    </>
  );
};

export default TotalInvoice;
