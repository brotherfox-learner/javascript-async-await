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
const newGetJohnProfile = async () => {
  try {
    let response = await new Promise(function (_, reject) {
      setTimeout(
        () =>
          reject({
            errorCode: 500,
            message: "👿 Failed to request data from server",
          }),
        2000
      );
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
newGetJohnProfile();
