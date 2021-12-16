import { Component } from "react";
import "../App.css";

class Home extends Component {
  render(){
    return (
      <div id="home">
        <main>
          <h1>Welcome to GhibliApp</h1>
          <img src="https://cdn.vox-cdn.com/thumbor/OvN6ULKC1NPKDkB83UcZizJ7gp0=/298x0:2040x1360/1400x933/filters:focal(1173x361:1499x687):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66869633/jbareham_200520_1021_ghibli_week_0001b.0.jpg" alt="Collage of Studio"/>
        </main>
      </div>
    );
  }
}

export default Home;