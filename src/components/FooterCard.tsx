import React from 'react'

type FooterCardProps = {
    heading: string;
    links: any[]
}

const FooterCard: React.FC<FooterCardProps> = ({heading, links}) => {
  return (
    <div className=' w-64 static z-50'>
      <h3 className=" text-natural-dark-grayish-violet uppercase font-bold tracking-widest mb-7">
        {heading}
      </h3>
      <ul className="grid gap-3">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-primary-dark-violet uppercase tracking-widest font-bold hover:underline"
          >
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCard