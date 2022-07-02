import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEVentListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight); //clientHeight is a property of the image element
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div className="ui card">
        <div className="image">
          <img ref={this.imageRef} src={urls.small} alt={alt_description} />
        </div>
      </div>
    );
  }
}

export default ImageCard;
