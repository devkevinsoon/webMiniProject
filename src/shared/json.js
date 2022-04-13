// response.js
export const RESP = {
    return: true,
    post: {
        postId: 1,
        content: "반가워요",
        modifiedAt: "2022-04-11 10:00:00",
        likeCount: 1,
        imageUrl:"https://cdn.imweb.me/thumbnail/20220407/480fed15478c4.jpg",
        userId : 1,
        nickname: '동현',
        comments: [
          {
            nickname: "보노보노",
            commentId: 1,
            comment: "나도 반가워요",
            modifiedAt: "2022-04-11 11:00:00"
          },
          {
            nickname: "포로리",
            commentId: 2,
            comment: "거짓말이에요",
            modifiedAt: "2022-04-11 11:20:00"
          }
        ]
    }
};