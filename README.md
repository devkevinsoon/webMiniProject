π Four-Dium
=============
μΌμμνμ μ§μΉ μ¬νμΈλ€μ΄ μ μ μΌμμ λ²μ΄λ μλ¦λ€μ΄ μ΄λ―Έμ§λ₯Ό κ°μνκ³  μν΅ν  μ μλ μΉνμ μΈ μν΅ μ°½κ΅¬ μ±!


![image (1)](https://user-images.githubusercontent.com/83892403/163437272-bef3ec31-939d-4926-b11a-5895610f97c5.png)
<br><br><br><br>

![image](https://user-images.githubusercontent.com/83892403/163437524-bc5bba1e-4ec9-42bd-94d5-8fbf37c7bd0b.png)
  <br>
- μΌμμ λ²μ΄λ μμ λ‘­κ² μ¬μ§ μ΄λ―Έμ§λ₯Ό κ³΅μ νλ©΄μ μν΅ν  μ μμ΅λλ€.

## π μ μ κΈ°κ° λ° νμ μκ° π¨βπ»π©βπ»
- 2022/04/08 ~ 2022/04/15
- κ°λν [GitHub](https://github.com/donghyunKang-dev) : μ μ (λ‘κ·ΈμΈ, νμκ°μ) λ° λκΈ λ΄λΉ
- λ°νμ [GitHub](https://github.com/devkevinsoon) : μ΄λ―Έμ§ μλ‘λ λ° ν¬μ€ν λ΄λΉ

## π» Front-end
- μ΄λ² νλ‘μ νΈλ νλ‘ νΈμλ 2λͺ, λ°±μλ 3λͺμ΄ ν¨κ» μ§νν νλ‘μ νΈ μλλ€.
- μ°μ μ μΌλ‘ κΈ°λ³Έμ μΈ CRUDκΈ°λ₯μ κ΅¬νμ μ§μ€νμκ³ , μΈλΆμ μΈ λ΄μ€μ λ€μ§λλ° μ§μ€νμμ΅λλ€.

## π» Back-end
- [GitHub λ°λ‘κ°κΈ°](https://github.com/cbjjzzang/webMiniProject2-7jo)

## π Website
[μ¬μ΄νΈ λ°λ‘κ°κΈ°](http://fourdium.s3-website.ap-northeast-2.amazonaws.com/)

## π¬ λ°λͺ¨ μμ λ§ν¬
[λ°λͺ¨μμ λ°λ‘κ°κΈ°](https://youtu.be/OT84rWmcWUU)

## πμμ΄μ΄ νλ μ 
https://www.notion.so/83a219b2f8e34f21beb36ccffbeca424#73c958e6686c442b84135cc91ff2c79a

<br><br><br>
## π  Front-end κΈ°μ  μ€ν λ° κ°λ° νκ²½ π¨
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
 ## :λ§ν¬:API μμΈ
|                | Method | URL                                    | REQ                                           | RES
|----------------|--------|----------------------------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------|
|νμκ°μ | POST | /api/signup | { username: nickname: password: } | { βokβ: true, message: βνμκ°μ μ±κ³΅β } OR { βokβ: false, errorMessage:βνμκ°μ μ€ν¨β }
|μ΄λ©μΌ μ€λ³΅κ²μ¬ | POST | /api/userName | { username: } | { βokβ: true, message: βμ¬μ©κ°λ₯ν μ΄λ©μΌμλλ€.β } OR { βokβ: false, errorMessage:βμ΄λ―Έ μ¬μ©μ€μΈ μ΄λ©μΌμλλ€.β }
|λλ€μ μ€λ³΅κ²μ¬ | POST | /api/nickName | { nickname: } |  { βokβ: true, message: βμ¬μ©κ°λ₯ν λλ€μμλλ€.β } OR { βokβ: false, errorMessage:βμ΄λ―Έ μ¬μ©μ€μΈ λλ€μμλλ€.β }
|λ‘κ·ΈμΈ | POST | /user/login | { username: password: } | token: { 'ok':true, message:βλ‘κ·ΈμΈ μ±κ³΅β } OR { βokβ: false, errorMessage:βλ‘κ·ΈμΈ μ€ν¨β }
|λ‘κ·ΈμΈ μ¬λΆ νμΈ| GET | /api/login | { userInfo:{ username: nickname: userId }, }
|κ²μκΈ μμ± | POST | /api/post | { nicknaame: content: file: } | { βokβ: true, message: βμμ± μ±κ³΅β } OR { βokβ: false, message:βμμ± μ€ν¨β }
|κ²μκΈ μμ  | PUT | api/posts/{postId} | { postId: content: } |
|κ²μκΈ μ­μ  | DELETE | api/posts/{userId} |
|μ μ²΄ ν¬μ€νΈ λΆλ¬μ€κΈ° |  GET  | /api/posts/{userid} | | { 'ok': true, result: [{postId: content: imageUrl: modifiedAt: postLikeTotal: like: nickName: }] }
|νΉμ  κ²μκΈ μ‘°ν λ° λκΈ μ‘°ν| GET | /api/postDetail?{postId}/comments| | { 'ok': true, result: [{postId: content: imageUrl: modifiedAt: postLikeTotal: like: nickName: comments:[{commentId: nickName: comment: modifiedAt: }]}
|λκΈ μμ± | POST | /api/comments/{postId} | {comment: nickName: postId: }|
|λκΈ μ­μ | DELETE | /api/comments/{commentId}| |
|μ’μμ| POST | /api/like/{postId}|{postId: } |  βokβ: true, message: βμ’μμ μ±κ³΅β } OR { βokβ: false, message:βμ’μμ μ€ν¨β }


<br><br><br>
## βποΈ νμ΄μ§ & κΈ°λ₯
### * λ‘κ·ΈμΈ, νμκ°μ
    :JWTλ₯Ό μ¬μ©νμ¬ λ‘κ·ΈμΈκ³Ό νμκ°μμ κ΅¬ν
    :μμ΄λ λ° λλ€μ μ€λ³΅ νμΈκ³Ό λΉλ°λ²νΈ 2μ°¨ νμΈ κ°λ₯ (μ΅μ 8 μ, μ΅μ νλμ λ¬Έμ, νλμ μ«μ λ° νλμ νΉμ λ¬Έμ)
    :νμμ λ³΄ DBμ μ μ₯, νμκ°μ μλ£ ν λ‘κ·ΈμΈ νμ΄μ§λ‘ μ΄λ
### * λ©μΈ νμ΄μ§
    :λͺ¨λ  μ μ κ° μμ±ν κΈμ μκ° μμλλ‘ νμΈ κ°λ₯
    :νΉμ  κΈ ν΄λ¦­ μ ν΄λΉ κΈμ λνμΌν μ λ³΄ νμΈ κ°λ₯
    :λ³ΈμΈμ΄ μμ±ν κΈμ ννμ¬ μμ  λ° μ­μ  μμ΄μ½μ΄ νμλμ΄ μμ , μ­μ  κ°λ₯
### * κΈ μμ± νμ΄μ§
    :μμ± μ μ΄λ―Έμ§ μλ‘λ κ°λ₯ λ° μ²¨λΆλ μ΄λ―Έμ§ λ―Έλ¦¬λ³΄κΈ° κ΅¬ν
### * κΈ μμΈ νμ΄μ§
    :λͺ¨λ  μ μ κ° μμ±ν λκΈμ μκ° μμλλ‘ νμΈ κ°λ₯
    :λκΈ μμ±, μ­μ  κ°λ₯
    :μ’μμ κ°―μ μΉ΄μ΄νΈ κ°λ₯ (μΆκ° μ +1, μ­μ  μ -1)
<br><br><br>
