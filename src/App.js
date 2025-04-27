import { Component } from "react";
import Choice from "./components/Choice";
import StickerList from "./components/StickerList";
import Rate from "./components/Rate";
import Random from "./components/Random";
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
   <Rate />
   <Random  onStickerSelect={this.handleStickerSelect} />
      </div>
    )
  }
}

export default App;
