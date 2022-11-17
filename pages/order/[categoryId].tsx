import {useRouter} from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import Navbar from "@/components/layout/navbar";
import getData from "@/lib/getData";


const OrderCategoryContainer = styled.div`
  .menu-list-container {
    margin-top: 90px;

    > ul > li {
      padding: 0 0 15px 20px;

      .menu-list-box {
        display: grid;
        grid-template-columns: 100px 1fr;
        align-items: center;
        height: 100px;
        border-bottom: 1px solid wheat;
        cursor: pointer;

        > img {
          border-radius: 100px;
          background-color: #f9394e;
          height: 80px;
          width: 80px;
        }
      }
    }
  }
`

const OrderCategory = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const { data: category, isLoading, isError } = getData(`/api/order/${categoryId}`);

  if (!category) return;
  const { list, name } = category;

  return (
    <OrderCategoryContainer className='page-container'>
      <Navbar text={name.toUpperCase()} />
      <div className='menu-list-container'>
        <ul>
          {
            list.map((menu: any, idx: number) => {
              return (
                <li key={idx}>
                  <Link
                    className='link'
                    href={{
                      pathname: '/order/menu',
                      query: {
                        categoryId,
                        menuId: menu.id
                      },
                    }}
                    as={`/order/${categoryId}/menu?name=${menu.name}`}
                  >
                    <div className='menu-list-box'>
                      <img src='' alt='' />
                      <p>{menu.name}</p>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </OrderCategoryContainer>
  )
}

export default OrderCategory;