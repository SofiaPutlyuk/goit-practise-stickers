import { Component } from "react";
import stickers from '../stickers.json'
import Sticker from "./Sticker";
import styled from "styled-components";
const Container = styled.div`
    display:flex;
    flex-direction:row;
    width:600px;
    height:300px;
    gap:20px;
`
class StickerList extends Component {
    render(){
        const { onStickerSelect } = this.props;
        return(
            <Container>
            {stickers.map((elem, index) => (
                <Sticker
                    key={index}
                    text={elem.label}
                    sticker={elem}
                    onStickerSelect={onStickerSelect}
                />
            ))}
            </Container>
        )
        }
        
    }

export default StickerList;