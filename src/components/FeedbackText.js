import { useRef } from "react"
import BlockDisplay from "./BlockDisplay"

const FeedbackText = ({feedbackTextInput,feedbackText,textTogle,textTogleHandler,id}) =>{

const textValue=useRef();   

let spanStyle = 'fake_placeholder'



if(feedbackText !== '피드백을 적어주세요!'){
    spanStyle = 'fake_placeholder champFeedText' ;
}

let divStyle = "feedback_text"
if(localStorage.getItem(`feedText${id}`)&&textTogle){
    divStyle= "feedback_text champFeedText"
    spanStyle = "feedback_text champFeedText"
}



    return <div className={divStyle}>
        {textTogle? <span className={spanStyle} onClick={textTogleHandler}>
            {localStorage.getItem(`feedText${id}`) !== null ?
             JSON.parse(localStorage.getItem(`feedText${id}`)) : feedbackText}
            </span> 
        : 
        <>
        <BlockDisplay block={textTogleHandler}/>
        <textarea value={localStorage.getItem(`feedText${id}`) !== null ?
        JSON.parse(localStorage.getItem(`feedText${id}`)) :
        ''
    }
        onChange={(e)=>{
           feedbackTextInput(e.target.value)
        }} className="feedback_textarea"/>
        </>}
    </div>
}

export default FeedbackText