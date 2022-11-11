import { NextApiRequest, NextApiResponse } from "next";
import main from '../database/connection';

export default function get_Menu(req: NextApiRequest, res: NextApiResponse) {

  res.status(200).json({
    "categoryList": [
      {
        "id": 1,
        "name": "coffee",
        "list": [
          {
            "name": "아메리카노",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "헤이즐넛 아메리카노",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "헤이즐넛 라떼",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "카푸치노",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "카라멜마끼야또",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "바닐라라떼",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "연유라떼",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "카페모까",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          }
        ]
      },
      {
        "id": 2,
        "name": "non-coffee",
        "list": [
          {
            "name": "복숭아 아이스티",
            "price": 1000,
            "option": ['ice'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "자몽에이드",
            "price": 1000,
            "option": ['ice'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "복숭아에이드",
            "price": 1000,
            "option": ['ice'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "청포도에이드",
            "price": 1000,
            "option": ['ice'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "그린티라떼",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "초코라떼",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "청귤차",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "얼그레이",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "캐모마일",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "제주녹차",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "페퍼민트",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "밀크티",
            "price": 1000,
            "option": ['ice', 'hot'],
            "imageUrl": "url",
            "isSellYn": true
          }
        ]
      },
      {
        "id": 3,
        "name": "bakery",
        "list": [
          {
            "name": "초코 머핀",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "블루베리머핀",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "치즈머핀",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "플레인베이글",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "치즈베이글",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "블루베리베이글",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "어니언베이글",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "레드벨벳스틱케익",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "초코스틱케익",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "치즈스틱케익",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "마카다미아쿠키",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "초코쿠키",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "브라우니쿠키",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          }
        ]
      },
      {
        "id": 4,
        "name": "cereal",
        "list": [
          {
            "name": "아몬드",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "초코첵스",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "우유",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          }
        ]
      },
      {
        "id": 5,
        "name": "etc",
        "list": [
          {
            "name": "콜드브루",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          },
          {
            "name": "탄산수",
            "price": 1000,
            "option": [],
            "imageUrl": "url",
            "isSellYn": true
          }
        ]
      }
    ]
  })
}