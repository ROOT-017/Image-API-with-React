import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

//Access key "_Cce3PvrbuHOF9MYtSlAd_CzX-4Bp-R0WL1zRyxlY74"
//Secrete key "YQIjBK4nXFzxqnD6seCyIONrdSAmaBKosNUEvgrKRjY"
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async  (term) => { 
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
      
    });
    //second method for fetching data
    //   .then((response) => {
    //     console.log(respons.data.results);
    //   });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
  
}

export default App;
