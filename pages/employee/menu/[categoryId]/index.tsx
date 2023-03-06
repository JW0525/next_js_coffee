import List from "@/components/common/list";
import ListItem from "@/components/common/listItem";
import useMenuList from "hooks/api/useMenuList";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedMenuAtom } from "store/atoms";

export default function EmployeeMenuPage() {
  const router = useRouter();
  const [title, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const [_, setSelectedMenu] = useRecoilState(selectedMenuAtom);

  const { menuList } = useMenuList(String(router.query.categoryId));

  const onClickMenu =
    (menuIdx: number) => (_: MouseEvent<HTMLButtonElement>) => {
      const menu = menuList[menuIdx];
      setSelectedMenu(menu);
      router.push("/employee/menu/order");
    };

  useEffect(() => {
    setHeaderTitle("메뉴");
  }, []);

  return (
    <List>
      {menuList.map((el, idx) => {
        return (
          <ListItem key={idx} onclick={onClickMenu(idx)}>
            {el.name}
          </ListItem>
        );
      })}
    </List>
  );
}
