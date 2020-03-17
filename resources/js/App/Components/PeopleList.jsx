import React from 'react';

export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        // initial state:
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('/api/person')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data
            })
        })
    }

    render() {

        let content = (
            <div className="loading">Loading...</div>
        );

        if (this.state.data) {
            content = (
                <ul>
                    {
                        this.state.data.map(person => (
                            <li key={ person.id }>
                                <div className="name">{ person.name }</div>
                                <img className="image" src={ person.image_url } />
                            </li>
                        ))
                    }
                </ul>
            )
        }

        return (
            <div className="people-list">
                { content }
            </div>
        )
    }
}