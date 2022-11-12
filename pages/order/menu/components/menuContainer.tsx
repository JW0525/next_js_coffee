import Image from "next/image";
import ImageS from "../../../../public/asset/images/cat-bassano-uCJHhrvG4QA-unsplash.jpg";

const MenuContainer = (props: any) => {
  const { menu } = props;

  return (
    <div className='menu-container'>
      <Image
        className='image'
        // src={menu.url}
        src={ImageS}
        alt='image'
      />

      <div className='menu-box'>
        <h6>메뉴</h6>
        <p>{menu.name}</p>
      </div>
      <div className='menu-box'>
        <h6>옵션</h6>
        <ul>
          {
            menu.option.map((option: string, idx: number) => {
              return <li key={idx}>{option}</li>
            })
          }
        </ul>
      </div>
      <div className='menu-box'>
        <h6>가격</h6>
        <div>{menu.price}</div>
      </div>
    </div>
  )
}

export default MenuContainer;