import React from "react"
import FeedbackOption from './FeedbackOption'
import styled from "styled-components"
const Container = styled.div`
width:400px;
height:700px;
margin:auto;
background: linear-gradient(135deg, #F24699, #E2B2F4);
margin-bottom:20px;
border-radius:20px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
gap:10px;
`
const TextRate = styled.p`
font-weight: bold;
font-family: 'Roboto', sans-serif;
color:#d23d2f;
`
const Paragragh = styled.h1`
color:#e1503d;
`
class Rate extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    onGoodRate = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }))
    }
    onNeutralRate = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1
        }))
    }
    onBadRate = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1
        }))
    }
    onCountTotal = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad;
    }
    onCountFeedback = (type) => {
        this.setState((prevState) => ({
            [type]: prevState[type] + 1
        }));
    };
    countPositiveFeedbackPercentage = () => {
        const good = this.state.good;
        const total = this.onCountTotal()
        if (total === 0) {
            return 0;
        }
        return Math.round((good / total) * 100)
    }
    render() {
        const totalRate = this.onCountTotal()
        const positiveRate = this.countPositiveFeedbackPercentage()
        return (
            <Container>
                <Paragragh>Оціни додаток</Paragragh>
                <FeedbackOption
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={this.onCountFeedback}
                />
                <TextRate>Good:{this.state.good}</TextRate>
                <TextRate>Neutral:{this.state.neutral}</TextRate>
                <TextRate>Bad:{this.state.bad}</TextRate>
                <TextRate>Total:{totalRate}</TextRate>
                <TextRate>Percentage:{positiveRate}%</TextRate>
                <TextRate>Загальний рейтинг :{totalRate} </TextRate>
                <TextRate>Загалом позитивних відгуків:{positiveRate}</TextRate>
            </Container>
        )
    }
}
export default Rate;