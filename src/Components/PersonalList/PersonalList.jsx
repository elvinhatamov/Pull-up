import React from 'react'
import './PersonalList.css'

class PersonalList extends React.Component {
  
  render(props) {
    return (
      <div className="PersonalList">
        <div className="image">
          <img src={this.props.listImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="description">
            <div>id:{this.props.id}</div>
            <p>title:{this.props.title}</p>
            <p>description:{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}



export default PersonalList