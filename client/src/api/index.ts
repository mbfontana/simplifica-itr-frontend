// export const fetchMessages = () =>
//   fetch("http://localhost:3001/api/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((result) => result.json())
//     .then((body) => {
//       return body;
//     });

export const fetchMessages = () => {
  fetch("http://localhost:3001/api/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((result) => result.json())
    .then((body) => {
      console.log(body);
    });
};
