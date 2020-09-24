import React from 'react';
import Image from './Image';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: []
    }
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/search/photos/?client_id=52vo-k71t0yruLyvJmuMU88qbAvQnSAlJ3L3QIlXU78&query=bike&per_page=12")
    .then((response) => { return response.json(); })
    .then((data) => { 
      console.log(data);
      this.setState({bikes: data.results}) })
  }

  render () {
    return (
      <div>
        <h2>Bike Pictures</h2>
        <div className="images">
          {/* {this.state.images} */}
          {this.state.bikes.map((image, i) => {
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
export default Food;