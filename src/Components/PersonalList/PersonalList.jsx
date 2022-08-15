import React from "react";
import "./PersonalList.css";

class PersonalList extends React.Component {
  render(props) {
    return (
      <div className="listing-section">
        <div className="list-item">
          <div className="image-box">
            <div className="images">
              <img src={this.props.listImageUrl} />
            </div>
          </div>
          <div className="text-box">
            <h2 className="item">{this.props.title}</h2>
            <p className="description">{this.props.description}</p>
            <button type="button" name="item-1-button" id="item-1-button">
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalList;
