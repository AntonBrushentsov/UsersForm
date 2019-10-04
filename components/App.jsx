import React, {Component} from 'react';
import UserList from "./UserList";
// import List from './List';

// import {getList} from '../sources/list';
import {getUsers} from "../sources/users";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // list: [],
            // count: 6,
            users: [],
            // firstName: ''

        };
    }

    componentDidMount() {
        // console.log('before');
        // console.log('after');
        // setTimeout(() => console.log('here'), 0);

        // const { count } = this.state;

        // const params = { count };
        // console.log('PROMISE: ', getUsers());

        // getList({ count: this.state.count })
        //     .then(({ data }) => this.setState({ list: data }));
        getUsers ({firstName: this.state.firstName})
               .then(({ data }) => this.setState({users: data }));

    }

    render() {
        const { users } = this.state;
        console.log (users);

        return (
            <div>
                <h3>Список пользователей</h3>
                {/*<List list={list}/>*/}
                <UserList users={users} />

                {/*TODO рендер компонента здесь*/}
            </div>
        );
    }
}

export default App;
