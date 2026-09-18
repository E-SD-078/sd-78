type GreetingProps = {
  name: string;
};
const Greeting = ({ name }: GreetingProps) => {
  return <h1>Hello, {name.toUpperCase()}!</h1>;
};

export default Greeting;
