import { Component } from "react";
import styled from "styled-components";
const Button = styled.button`
background:none;
border: 0.1cm solid pink;
border-radius:20px;
`
class Sticker extends Component{
    render(){
        const { sticker, onStickerSelect } = this.props;
        return(
            <div>
            <Button onClick={() => onStickerSelect(sticker.label)}>
              <img src={sticker.img} alt={sticker.label} />
            </Button>
          </div>
        )
    }
}
export default Sticker;