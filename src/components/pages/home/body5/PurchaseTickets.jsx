import React from 'react';
import PurchaseCard from './PurchaseCard';

function PurchaseTickets() {
  return (
    <div className="flex justify-center">
      <div className="w-5/6 flex flex-col items-center">
        <div className="w-5/6 flex flex-col justify-between items-start">
          <p className="text-4xl mt-12 mb-6 text-center lg:text-start 2xl:text-6xl font-bold ">
            PURCHASE TICKETS
          </p>
          <p className="text-l font-normal mb-16 text-center lg:text-start 2xl:text-3xl ">
            PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!
          </p>
        </div>

        <div className="w-5/6 flex flex-col gap-4 2xl:gap-20">
          <div className="flex flex-wrap justify-center lg:justify-between w-full gap-4 ">
            <PurchaseCard title="5 TICKETS" dollar="10$" button="PURCHASE" />

            <PurchaseCard title="25 TICKETS" dollar="40$" button="PURCHASE" />

            <PurchaseCard title="50 TICKETS" dollar="70$" button="PURCHASE" />
          </div>

          <div className="flex justify-center mb-10">
            <PurchaseCard
              classList="border border-solid text-center w-full border-gray-200 rounded-lg shadow-xl"
              title="ARE YOU A COUNSELOR?"
              text="interested in joining our mental health platform? you decide your schedule and how much you want to work, we'll take care of the client referrals and billing details!"
              button="LEARN MORE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseTickets;
