import React from 'react'
import price from "../assets/images/icon-affordable-prices.svg"
import people from "../assets/images/icon-people-first.svg"
import process from "../assets/images/icon-snappy-process.svg"

const WeAreDifferent: React.FC = () => {
    const cards = [
      { img: process, title: "Snappy Process", desc: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms" },
      { img: price, title: "Affordable Prices", desc: "We don't want you worrying about hight monthly costs. Our prices may be low, but we still offer the best coverage possible." },
      { img: people, title: "People First", desc: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're convered when you need it." },
    ];

  return (
    <section className="container mx-auto mt-16 sm:mt-96 mb-16">
      <h2 className="font-bold text-5xl text-natural-very-dark-violet text-center sm:text-left my-10">
        We're different
      </h2>
      <div className="flex flex-row gap-7 flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center">
        {cards.map((card, index) => (
          <div className="grid gap-5 text-center sm:text-left" key={index}>
            <div className="flex items-center justify-center sm:justify-normal">
              <img src={card.img} />
            </div>
            <h3 className=' text-natural-very-dark-violet font-semibold'>{card.title}</h3>
            <p className=' text-natural-dark-grayish-violet'>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeAreDifferent