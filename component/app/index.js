import React, { Component } from 'react'
import Styles from './styles'

import {
	TouchableOpacity,
	View,
	Text,
} from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon }
from 'native-base';


import {observer} from 'mobx-react/native';

@observer
class App extends Component {

  constructor (props) {
    super(props);
  }

  _onPressButton(title){
  	console.log("change title/.");
  	this.props.store.changeTitle(title);
  }

	render() {

		console.log("props ", this.props);


		return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.store.title}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>


	                <Button full access 
	                	onPress={()=> this._onPressButton("Awesome Header")}>
	                    <Text>Awesome Header</Text>
	                </Button>


	                <Button full danger 
	                	onPress={()=> this._onPressButton("Flash Change!")} 	                	
	                	warning>

	                    <Text>Flash Change!</Text>
	                </Button>


            
                   
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>


		)
	}
}

export default App