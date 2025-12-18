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
async function display() {
  try {
    const displayData = await getJohnProfile();
    console.log(displayData);
  } catch (error) {
    console.log(error);
  }
}

display()