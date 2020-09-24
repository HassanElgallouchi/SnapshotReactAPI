import React from 'react';
import Image from './Image';

class Moto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motos: []
    }
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/search/photos/?client_id=52vo-k71t0yruLyvJmuMU88qbAvQnSAlJ3L3QIlXU78&query=moto&per_page=12")
    .then((response) => { return response.json(); })
    .then((data) => { 
      console.log(data);
      this.setState({motos: data.results}) })
  }

  render () {
    return (
      <div>
        <h2>Moto Pictures</h2>
        <div className="images">
          {/* {this.state.images} */}
          {this.state.motos.map((image, i) => {
            return (
                <Image key={i} src={image.urls.raw} />
              );
          })
          }
        </div>
      </div>
    );
  }

}
export default Moto;