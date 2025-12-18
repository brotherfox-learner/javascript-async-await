// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
const fetchJohnProfile = async () => {
  try {
    const data = await getJohnProfile();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
fetchJohnProfile()