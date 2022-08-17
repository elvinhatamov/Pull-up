import React from "react";
import "./PersonalList.css";

class PersonalList extends React.Component {
  render(props) {
    // const handleDetailBtn = () => {
    //   const navigate = navigate();
    // };

    // //navigate("/hostings/detail" )
    return (
      <div class="card">
        <img
          src={this.props.listImageUrl}
          className="card__image"
          alt="drive way"
        />
        <div className="card__content">
          <span className="card__title">{this.props.title}</span>
          <br />
          <span className="card__title">{this.props.description}</span>
          <button path="/" className="card_button">
            Detail
          </button>
        </div>
      </div>
    );
  }
}

export default PersonalList;
