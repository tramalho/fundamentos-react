export const Se = (props) => {
  const testResult = props.test;

  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === "Senao";
  })[0];

  const ifChildreen = props.children.filter((child) => {
    return child !== elseChild;
  });

  if (testResult) {
    console.log("ifChild", ifChildreen);
    return ifChildreen;
  }
  if (elseChild) {
    console.log("elseChild", elseChild);
    return elseChild;
  }
  return elseChild;
};

export default Se;

export const Senao = (props) => {
  return props.children;
};
