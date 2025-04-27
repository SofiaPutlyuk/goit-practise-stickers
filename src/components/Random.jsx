import { Component } from "react";
import stickers from '../stickers.json';
import styled from "styled-components";
const Container = styled.div`
width:300px;
height:400px;
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
background-color: #FADADD;
background-image: linear-gradient(147deg, #FADADD 0%, #fc6c85 74%);
justify-content:center;
margin-bottom:20px;
border-radius:20px;
`
const Img = styled.img`
width:200px;
height:200px;
border-radius:20px;
background-color: #BD2031;
background-image: linear-gradient(315deg, #BD2031 0%, #ffae42 74%);
`
const Text = styled.h2`
color:#ff6961;

`
const Button = styled.button`
background-color: #F6C324;
background-image: linear-gradient(315deg, #F6C324 0%, #F17E7E 74%);
border:none;
width:200px;
height:60px;
border-radius:20px;
color:#66023c;
font-size:15px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
`
class Random extends Component {
 state ={
    label : JSON.parse(localStorage.getItem("LabelSticker")) || "",
    img:JSON.parse(localStorage.getItem("ImgSticker")) || ""
 }
 handleRandomSticker = () => {
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)]
    this.setState({ 
        label: randomSticker.label,
        img : randomSticker.img

     });
 
    localStorage.setItem("LabelSticker",JSON.stringify(randomSticker.label))
    localStorage.setItem("ImgSticker",JSON.stringify(randomSticker.img))
}

render(){
    return(
        <Container>
            {this.state.img && <Img src={this.state.img} alt={this.state.label}/>}
             <Text>{this.state.label}</Text>
             <Button onClick={this.handleRandomSticker}>Обери рандомний стікер</Button>
        </Container>
    )
}
}

export default Random;