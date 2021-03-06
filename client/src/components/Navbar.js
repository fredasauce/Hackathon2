import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Button, Icon, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import utoob from "../Images/utoob.png"

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <>
        <Link to='/MyFriends'>
          <Menu.Item name='Friends List' active={this.props.location.pathname === "MyFriends"}>
          </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
          <Link to='/AddVideo'>
            <Menu.Item>
              <Button color='CAEBF2'>
                <Icon name="add" />
                Upload Video
              </Button>
            </Menu.Item>
          </Link>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
        </>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Image src={utoob} />
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/videos'>
            <Menu.Item
              name='videos'
              // id='videos'
              // active={this.props.location.pathname === '/videos'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
