import React from "react";
import {useSession} from "next-auth/react";

const MenuContainer = (props: any) => {
  const { menu } = props;
  const { data: session, status } = useSession();
  const { email } = session!.user!;

  const submitFormHandler = (event: any) => {
    event.preventDefault()

    const reqBody = {
      // user: email,
      menuId: menu.id,
      menuName: menu.name,
      quantity: 1,
      totalPrice: 1000,
      status: 'preparing',
    }

    fetch('/api/menu', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data)) // {email : "test@test.com", text: 'Some feedback text'};
  }

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
      {
        menu.option.length > 1 && (
          <div className='menu-box'>
            <ul>
              {
                menu.option.map((option: string, idx: number) => {
                  return <li key={idx}>{option}</li>
                })
              }
            </ul>
          </div>
        )
      }
      <div onClick={()=> {
        console.log(menu.name, menu.price)
      }
      }>
        구매
      </div>
    </div>
  )
}

export default MenuContainer;