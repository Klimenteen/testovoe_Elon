import { Link } from "react-router-dom";

const PagePlaceholder = ({text, link="/testovoe_Elon"}) => {
  return (
    <>
        <div>{text}</div>
        <Link to={link}>домой ☻</Link>
    </>
  )
}

export default PagePlaceholder