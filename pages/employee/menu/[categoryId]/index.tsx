import List from "@/components/common/list";
import ListItem from "@/components/common/listItem";
import useMenuListQuery from "hooks/queries/useMenuListQuery";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedMenuAtom } from "store/atoms";

export default function EmployeeMenuPage() {
  const router = useRouter();
  const [title, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const [_, setSelectedMenu] = useRecoilState(selectedMenuAtom);

  const { data: menuListData } = useMenuListQuery(`${router.query.categoryId}`);

  const onClickMenu =
    (menuIdx: number) => (_: MouseEvent<HTMLButtonElement>) => {
      const menu = menuListData[menuIdx];
      setSelectedMenu(menu);
      router.push("/employee/menu/order");
    };

  useEffect(() => {
    setHeaderTitle("메뉴");
  }, []);

  return (
    <List>
      {menuListData.length !== 0 ? (
        menuListData.map((el, idx) => {
          return (
            <ListItem key={idx} onclick={onClickMenu(idx)} isclickable={true}>
              {el.name}
            </ListItem>
          );
        })
      ) : (
        <div>등록된 메뉴가 없습니다</div>
      )}
    </List>
  );
}
