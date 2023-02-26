import { Component } from 'react';
import Button from './button';
import { data } from './Data/data';
import UsersList from './User/UserList';

class App extends Component {
  state = {
    isListShow: false,
    users: data,
  };

  showList = () => {
    this.setState(prevStat => {
      return {
        isListShow: !prevStat.isListShow,
      };
    });
  };

  render() {
    return (
      <>
        <Button
          text={
            this.state.isListShow ? 'Hide list of user' : 'Show list of user'
          }
          clickHandler={this.showList}
        />

        {this.state.isListShow && <UsersList users={this.state.users} />}
      </>
    );
  }
}

export default App;
