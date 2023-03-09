import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import { useMemo } from "react";

const { Sider } = Layout;

interface SideBarMenuItem {
  key: string;
  label: string;
  path: string;
}

const item: SideBarMenuItem[] = [
  {
    key: "0",
    label: "주문현황",
    path: "/manager/order",
  },
  {
    key: "1",
    label: "메뉴표",
    path: "/manager/menu",
  },
  {
    key: "2",
    label: "일간 정산",
    path: "/manager/adjustment/daily",
  },
  {
    key: "3",
    label: "월간 정산",
    path: "/manager/adjustment/monthly",
  },
  {
    key: "4",
    label: "설정",
    path: "/manager/settings",
  },
];

export default function Sidebar() {
  const router = useRouter();

  const currentSideMenu = useMemo(() => {
    const idx = item.findIndex((el) => {
      return el.path === router.pathname;
    });
    return `${idx === -1 ? 0 : idx}`;
  }, [router.pathname]);

  return (
    <Sider
      style={{
        height: "100%",
        backgroundColor: "#F9FAFA",
        borderRight: "1px solid lightgray",
      }}
      collapsed={false}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "#F9FAFA",
        }}
      />
      <Menu
        style={{ backgroundColor: "#F9FAFA", border: "none" }}
        theme="light"
        defaultSelectedKeys={[currentSideMenu]}
        mode="inline"
        items={item}
        onClick={(e) => {
          const idx = Number(e.key);
          router.push(item[idx].path);
        }}
      />
    </Sider>
  );
}
