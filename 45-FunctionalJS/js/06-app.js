console.log("**** Functions that return functions");

const getClient3 = () => {
  return () => {
    console.log(`Client is running`);
  };
};

const fn = getClient3();

fn();