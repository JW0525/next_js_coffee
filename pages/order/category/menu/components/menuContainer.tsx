import Image from "next/image";
import ImageS from "../../../../../public/asset/images/cat-bassano-uCJHhrvG4QA-unsplash.jpg";
import Navigation from "../../../../navigation";
import React from "react";

const MenuContainer = (props: any) => {
  const { menu } = props;

  return (
    <div className='menu-container'>
      <div className="image">
        {/*<Image*/}
        {/*  // src={menu.url}*/}
        {/*  src={ImageS}*/}
        {/*  alt='image'*/}
        {/*/>*/}
      </div>
      <div className='menu-box'>{menu.name}</div>
      <div className='menu-box'>{menu.price}</div>
      <div className='menu-box'>
        <ul>
          {
            menu.option.map((option: string, idx: number) => {
              return <li key={idx}>{option}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default MenuContainer;