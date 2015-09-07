/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Component
} = React;


class mobileApp extends Component{
	render(){
		return <Text>Mobile application for RSVPing to our events</Text>	
	}
}

AppRegistry.registerComponent('mobileApp', () => mobileApp);
