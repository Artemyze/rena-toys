import back from "../../img/projects/girl1.jpg"
import {Contacts} from "../../pages/contacts";
export const Section = (props) => {
    return (
        <div className="section">
            <img src={back} width="100%" height="100%"  alt={"sd"} className="back"/>
            {props.children}
        </div>
    )
}
