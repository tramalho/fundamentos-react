const If = (props) => {
  if (props.test) {
    return props.children;
  }
};

export default If;
