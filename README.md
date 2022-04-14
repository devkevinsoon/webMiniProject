😎 Four-Dium
=============
일상생활에 지친 사회인들이 잠시 일상을 벗어나 아름다운 이미지를 감상하고 소통할 수 있는 친화적인 소통 창구 앱!


![image (1)](https://user-images.githubusercontent.com/83892403/163437272-bef3ec31-939d-4926-b11a-5895610f97c5.png)
<br><br><br><br>

![image](https://user-images.githubusercontent.com/83892403/163437524-bc5bba1e-4ec9-42bd-94d5-8fbf37c7bd0b.png)
  <br>
- 일상을 벗어나 자유롭게 사진 이미지를 공유하면서 소통할 수 있습니다.

## 📆 제작 기간 및 팀원 소개 👨‍💻👩‍💻
- 2022/04/08 ~ 2022/04/15
- 강동현 [GitHub](https://github.com/donghyunKang-dev) : 유저(로그인, 회원가입) 및 댓글 담당
- 박태순 [GitHub](https://github.com/devkevinsoon) : 이미지 업로드 및 포스팅 담당

## 💻 Front-end
- 이번 프로젝트는 프론트엔드 2명, 백엔드 3명이 함께 진행한 프로젝트 입니다.
- 우선적으로 기본적인 CRUD기능의 구현에 집중하였고, 세부적인 내실을 다지는데 집중하였습니다.

## 💻 Back-end
- [GitHub 바로가기](https://github.com/cbjjzzang/webMiniProject2-7jo)

## 🌎 Website
[사이트 바로가기](http://fourdium.s3-website.ap-northeast-2.amazonaws.com/)

## 🎬 데모 영상 링크
[데모영상 바로가기](https://youtu.be/OT84rWmcWUU)

## 📋와이어 프레임 
https://www.notion.so/83a219b2f8e34f21beb36ccffbeca424#73c958e6686c442b84135cc91ff2c79a

<br><br><br>
## 🛠 Front-end 기술 스택 및 개발 환경 🔨
<br>
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white">
</br>
<img src="https://img.shields.io/badge/reactrouterdom-375BD2?style=for-the-badge&logo=reactrouterdom&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-181717?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">


<br><br><br>
 ## :링크:API 상세
|                | Method | URL                                    | REQ                                           | RES
|----------------|--------|----------------------------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------|
|회원가입 | POST | /api/signup | { username: nickname: password: } | { ‘ok’: true, message: ‘회원가입 성공’ } OR { ‘ok’: false, errorMessage:’회원가입 실패’ }
|이메일 중복검사 | POST | /api/userName | { username: } | { ‘ok’: true, message: ‘사용가능한 이메일입니다.’ } OR { ‘ok’: false, errorMessage:’이미 사용중인 이메일입니다.’ }
|닉네임 중복검사 | POST | /api/nickName | { nickname: } |  { ‘ok’: true, message: ‘사용가능한 닉네임입니다.’ } OR { ‘ok’: false, errorMessage:’이미 사용중인 닉네임입니다.’ }
|로그인 | POST | /user/login | { username: password: } | token: { 'ok':true, message:’로그인 성공’ } OR { ‘ok’: false, errorMessage:’로그인 실패’ }
|로그인 여부 확인| GET | /api/login | { userInfo:{ username: nickname: userId }, }
|게시글 작성 | POST | /api/post | { nicknaame: content: file: } | { ‘ok’: true, message: ‘생성 성공’ } OR { ‘ok’: false, message:’생성 실패’ }
|게시글 수정 | PUT | api/posts/{postId} | { postId: content: } |
|게시글 삭제 | DELETE | api/posts/{userId} |
|전체 포스트 불러오기 |  GET  | /api/posts/{userid} | | { 'ok': true, result: [{postId: content: imageUrl: modifiedAt: postLikeTotal: like: nickName: }] }
|특정 게시글 조회 및 댓글 조회| GET | /api/postDetail?{postId}/comments| | { 'ok': true, result: [{postId: content: imageUrl: modifiedAt: postLikeTotal: like: nickName: comments:[{commentId: nickName: comment: modifiedAt: }]}
|댓글 작성 | POST | /api/comments/{postId} | {comment: nickName: postId: }|
|댓글 삭제| DELETE | /api/comments/{commentId}| |
|좋아요| POST | /api/like/{postId}|{postId: } |  ‘ok’: true, message: ‘좋아요 성공’ } OR { ‘ok’: false, message:’좋아요 실패’ }


<br><br><br>
## ✔🗒️ 페이지 & 기능
### * 로그인, 회원가입
    :JWT를 사용하여 로그인과 회원가입을 구현
    :아이디 및 닉네임 중복 확인과 비밀번호 2차 확인 가능 (최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자)
    :회원정보 DB에 저장, 회원가입 완료 후 로그인 페이지로 이동
### * 메인 페이지
    :모든 유저가 작성한 글을 시간 순서대로 확인 가능
    :특정 글 클릭 시 해당 글의 디테일한 정보 확인 가능
    :본인이 작성한 글에 한하여 수정 및 삭제 아이콘이 표시되어 수정, 삭제 가능
### * 글 작성 페이지
    :작성 시 이미지 업로드 가능 및 첨부된 이미지 미리보기 구현
### * 글 상세 페이지
    :모든 유저가 작성한 댓글을 시간 순서대로 확인 가능
    :댓글 작성, 삭제 가능
    :좋아요 갯수 카운트 가능 (추가 시 +1, 삭제 시 -1)
<br><br><br>
