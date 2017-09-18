import React, { Component } from 'react';

class List extends Component {
    render() {
        var arr = [5,6,8,3];
        const data = arr.map(item =>  <li key={item.toString()}> {item} </li> );
        return (
            <ul>
                {data}
            </ul>
        );
    }
}

export default List;
