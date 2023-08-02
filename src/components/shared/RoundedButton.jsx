const RoundedButton = (props) => {
    return (
        <button onClick={props.click} className={props.color === "violet" ? "duration-200 hover:scale-105 justify-center font-bold items-center w-2/3 px-5 py-4 rounded-xl text-white flex gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" : "duration-200 hover:bg-black hover:text-white justify-center font-bold items-center bg-gray-100 w-2/3 px-5 py-3 rounded-xl text-black flex gap-3"}>
            {props.icon && <img className="w-5 h-5" src={props.icon} alt=""/>}
            {props.text}
        </button>
    )
}
export default RoundedButton;