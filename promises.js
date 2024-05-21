const main = async () => {
  while (true) {
    const promise = new Promise((res) => {
      setTimeout(() => {
        res(new Date());
      }, 1000);
    });
    await promise.then((res) => {
      console.log(res);
    });
  }
};
main();
