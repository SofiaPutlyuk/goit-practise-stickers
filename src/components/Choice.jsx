import { Component } from "react";
import styled from "styled-components";
const Text = styled.h1`
text-align:center;
color:pink;
`
class Choice extends Component {
    render(){
        const { selectedSticker } = this.props;
        return(
            <div>
            <Text>Вибрано стікер:</Text>
            {selectedSticker ? (
              <Text>{selectedSticker}</Text>
            ) : (
              <Text>Жодного стікера не вибрано</Text>
            )}
          </div>
        )
    }
}
export default Choice;