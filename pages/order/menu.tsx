import {useRouter} from "next/router";
import {InferGetStaticPropsType} from "next";
import styled from "@emotion/styled";

const ListBox = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  align-items: center;
  height: 85px;
  cursor: pointer;

  background-color: skyblue;
`

const Menu = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const query = router.query;
  const { idx, categoryName } = query;
  const category = data.categoryList[`${idx}`];

  if (!category) return;
  const { list } = category;

  return (
    <div>
      {
        list.map((menu: any, idx: number) => {
          return (
            <ListBox key={idx}>
              <img src='' alt='' />
              <p>{menu.name}</p>
            </ListBox>
          )
        })
      }
    </div>
  )
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/menu');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

