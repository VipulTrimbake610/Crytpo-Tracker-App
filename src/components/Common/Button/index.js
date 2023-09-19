import './style.css';

const MyButton = ({text,onClick, outlined}) =>{
    return (
        <>
        <button className={outlined?"outlined-btn":"btn"} onClick={onClick}>{text}</button>
        </>
    )
}

export default MyButton;