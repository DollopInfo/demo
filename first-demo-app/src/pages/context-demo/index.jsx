import Counter from "../../components/counter/Counter";
import PrimarySearchAppBar from "../../components/header";

const ContextDemo = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <div>
        <Counter />
      </div>
    </>
  );
};

export default ContextDemo;
