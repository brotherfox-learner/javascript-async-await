// Exercise #5
let getJohnProfile = async () => {
  return await new Promise(function (_, reject) {
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
getJohnProfile()
.catch(setTimeout => {console.log(setTimeout)});