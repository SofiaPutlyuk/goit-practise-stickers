import styled from "styled-components";
const ButtonOption = styled.button`
border:none;
border-radius:20px;
width:80px;
height:30px;
background-color: #adb2d3;
background-image: linear-gradient(315deg, #adb2d3 0%, #ff6b6c 74%);
color:#e80c5e;
`
const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (
        <div  style={{
            display: 'flex',
            gap: '20px',
        }}>
            {options.map(option => (
                <ButtonOption
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}>
                    {option}
                </ButtonOption>
            ))}
        </div>
    )
}
export default FeedbackOption;