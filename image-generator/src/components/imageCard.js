import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //this.imageRef.current is the image element
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight; //clientHeight is a property of the image element
    const spans = Math.ceil(height / 210); //ceil rounds up to the next highest integer
    this.setState({ spans: spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div className="ui card">
        <div className="image">
          <img ref={this.imageRef} style={{gridRowEnd: `span ${this.state.spans}`}} src={urls.small} alt={alt_description} />
        </div>
      </div>
    );
  }
}

export default ImageCard;
