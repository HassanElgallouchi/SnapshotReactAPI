import React from 'react';
import Image from './Image';

class Plane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planes: []
    }
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/search/photos/?client_id=52vo-k71t0yruLyvJmuMU88qbAvQnSAlJ3L3QIlXU78&query=plane&per_page=12")
    .then((response) => { return response.json(); })
    .then((data) => { 
      console.log(data);
      this.setState({planes: data.results}) })
  }

  render () {
    return (
      <div>
        <h2>Plane Pictures</h2>
        <div className="images">
          {/* {this.state.images} */}
          {this.state.planes.map((image, i) => {
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
export default Plane;