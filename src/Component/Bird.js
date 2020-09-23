import React from 'react';
// import Image from './Image';

class Bird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: []
    }
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/search/photos/?client_id=52vo-k71t0yruLyvJmuMU88qbAvQnSAlJ3L3QIlXU78&query=bird&per_page=12")
    .then((response) => { return response.json(); })
    .then((data) => { 
      console.log(data);
      this.setState({birds: data.results}) })
  }

  render () {
    return (
      <div>
        <h2>Bird Pictures</h2>
        <div className="images">
          {/* {this.state.images} */}
          {this.state.birds.map((image, i) => {
            return (
              <div>
                <img key={i} src={image.urls.raw} />
              </div>
              );
          })
          }
        </div>
      </div>
    );
  }
}
export default Bird;