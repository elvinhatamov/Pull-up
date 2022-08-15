import React from 'react'
import PersonalList from "../../Components/PersonalList/PersonalList";


class PersonalListPage extends React.Component {
  state = {
    lists: [
      {
        id: 1,
        title: "Paul''s House",
        description: '220 Yonge St, Toronto, ON M5B 2H1',
        url: '#',
        listImageUrl: 'https://via.placeholder.com/250'
      },
      {
        id: 2,
        title: "Shadab''s House",
        description: '220 Yonge St, Toronto, ON M5B 2H1',
        url: '#',
        listImageUrl: 'https://via.placeholder.com/250'
      },
      {
        id: 3,
        title: "Elvin''s House",
        description: '220 Yonge St, Toronto, ON M5B 2H1',
        url: '#',
        listImageUrl: 'https://via.placeholder.com/250'
      },
      {
        id: 4,
        title: "Lud''s House",
        description: '220 Yonge St, Toronto, ON M5B 2H1',
        url: '#',
        listImageUrl: 'https://via.placeholder.com/250'
      },
    ]
  }
  render() {
    return (
      <div className="App">
        {this.state.lists.map((l) => (
          <PersonalList
          id={l.id}
          title={l.title}
          description={l.description}
          url={l.url}
          listImageUrl={l.listImageUrl}
          />
          ))}
      </div>
    );
  }
}

export default PersonalListPage