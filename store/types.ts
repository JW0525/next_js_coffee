export interface UserInfo {
  uid: string;
  name: string;
  isManager: boolean;
  coupon: number;
}

export interface Menu {
  categoryId: string; // 메뉴의 상위 카테고리 아이디
  coldAvailable: boolean; // cold 가능 여부
  hotAvailable: boolean; // hot 가능 여부
  isAvailable: boolean; // 판매 가능 여부
  couponPayback: number; // 해당메뉴 구매시 쿠폰지급 갯수
  couponPrice: number; // 해당메뉴 쿠폰구입시 필요 쿠폰갯수
  name: string; // 메뉴 이름
  order: number; // 메뉴 정렬 순서
  price: number; // 메뉴 가격
  id: string; // 메뉴 아이디
}

export interface Category {
  name: string;
  order: number;
  id: string;
}
