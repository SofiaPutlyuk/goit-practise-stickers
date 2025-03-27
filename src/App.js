import { Component } from "react";
import Choice from "./components/Choice";
import StickerList from "./components/StickerList";
class App extends Component {
  state ={
    selectedSticker: null
  }
  handleStickerSelect = (stickerLabel) => {
    this.setState({ selectedSticker: stickerLabel });
  };
  render(){
    return(
      <div>
   <StickerList onStickerSelect={this.handleStickerSelect} />
   <Choice selectedSticker={this.state.selectedSticker} />
      </div>
    )
  }
}

export default App;
