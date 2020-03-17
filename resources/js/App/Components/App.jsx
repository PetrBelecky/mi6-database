import React from 'react';
import PeopleList from './PeopleList.jsx';
 
export default class App extends React.Component {
    render() {
        return (
            <>
                <h1>Application component</h1>

                <PeopleList /> 
            </>
        )
    }
}