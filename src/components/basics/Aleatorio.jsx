
const getRandomNumber = (props) => {
    const math = Math.random();
    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);
    const result = Math.floor(math * (max - min + 1)) + min;
    console.log("Math.random() = ", math);
    console.log("props.min = ", min);
    console.log("props.max = ", max);
    console.log("result = ", result);
    return result;
}

export default getRandomNumber;