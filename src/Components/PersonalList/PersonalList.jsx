import React from "react";
import "./PersonalList.css";

class PersonalList extends React.Component {
  render(props) {
    return (
      <div class="card">
        <ul class="cards">
          <li class="cards__item">
            <div class="card">
              <div class="card__image card__image--fence">
                <img src={this.props.listImageUrl} />
              </div>
              <div class="card__content">
                <div class="card__title">{this.props.title}</div>
                <p class="card__text">{this.props.description}</p>
                <button class="btn btn--block card__btn">Detail</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default PersonalList;
