


const Button = (props) => {
    return (
      <button className="w-full bg-primary py-3 px-4  text-white font-bold cursor-pointer hover:bg-white hover:text-primary">
        {props.btnType}  
      </button>
    )
  }
  
  export default Button