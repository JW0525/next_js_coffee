# 사내카페 주문 어플리케이션 제작

---

# 프로젝트 개요

- 사내에 있는 카페는 현재 주문지에 메뉴를 작성하고, 월말에 주문지 내역을 합산하는 방식으로 운영되고 있습니다. 매번 주문지를 출력하고 합산하는 바리스타의 수고를 덜어주고 환경도 보호할 겸 ^^, 스타벅스의 사이렌오더 와 같은 어플을 제작해보면 어떨까 하는 생각에 이르게 되었습니다.
이를 통해 사내 구성원들의 편의성도 증진할 수 있다는 생각에 프로젝트를 진행하였습니다.
    
    ![image (3).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/084c6e58-02c6-4608-a301-853201a4a643/image_(3).png)
    

# **프로젝트 기간 및 인원**

---

- 개발기간📆 : 2022/11 ~

# **적용 기술 및 구현 기능**

## **적용 기술 및 도구**

- Next.js, TypeScript
- monogoDB, mongoose, prisma, NextAuth, bcrypt, POSTMAN, aws
- Emotion, Redux-toolkit
- Slack, Notion, Github

## **구현 기능**

**BACK-END**

- monogoDB 를 이용한 NoSQL 데이터베이스 구축
- prisma, mongoose 를 이용한 데이터베이스 연결 및 관리
- NextAuth, bcrypt 를 이용하여 회원가입, 로그인 시스템 구축
- 쿠폰, 구매 내역 등 유저 정보에서 관리되는 API 구축

**FRONT-END**

- Emotion 을 이용한 모바일 대응 반응형 페이지 개발
- Next.js 의 Dynamic Routing 기능을 이용한 메뉴 표시
- 쿠폰 및 구매 내역, 사용자 선호도를 기반으로 하는 추천 메뉴 표시

**INFRA**

- 추후, AWS EC2 를 이용한 배포 예정
