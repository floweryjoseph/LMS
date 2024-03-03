

const Button = (props) => {
  return (
    <button className={`flex  justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${props.className}`}>
    
    {props.btnName}
   
    </button>
  )
}

export default Button
