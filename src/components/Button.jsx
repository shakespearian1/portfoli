import "../styles/button.css";

const Button = ({ text }) => {
  return (
    <>
      <button className="bg-yellow-400 px-6 py-1 text-lg rounded-md font-bold hover:opacity-70">
        {text}
      </button>
    </>
  );
};

export default Button;
