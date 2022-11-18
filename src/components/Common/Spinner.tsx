import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
