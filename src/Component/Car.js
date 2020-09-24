import React from 'react';
import Image from './Image';
import Loading from './Loading';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      loading: true
    }
  }

  
  componentDidMount() {
    
    fetch("https://api.unsplash.com/search/photos/?client_id=52vo-k71t0yruLyvJmuMU88qbAvQnSAlJ3L3QIlXU78&query=car&per_page=12")
    .then((response) => { return response.json(); })
    .then((data) => { 
      console.log(data);
      this.setState({cars: data.results}) })
      
      setTimeout(() => {
        this.setState({
          loading: false
        })}, 5000);
  }

  render () {
    return (
      <div>
        <h2>Car Pictures</h2>
        {
          this.state.loading ? <Loading /> : 
        <div className="images">
          {/* {this.state.images} */}
          {this.state.cars.map((image, i) => {
            return (
              <Image key={i} src={image.urls.raw} />
              );
            })
          }
        </div>
          }
      </div>
    );
  }
}
export default Car;