/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>Welcome Congzhou to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
                <View>
                    <Button title="跳转" onPress={()=>{this.props.navigation.navigate('Detail')}}/>
                </View>
            </View>
        );
    }
}

class DetailScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{borderColor:'red',borderWidth:1}}>First Detail Page</Text>
                {/*<Adder2/>*/}
                <Button title="跳转到Detail（二）" onPress={()=>{this.props.navigation.push('DetailSecond')}}></Button>
                <Button title="返回" onPress={()=>{this.props.navigation.goBack()}}></Button>
            </View>
        );
    }
}

class DetailSecondScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Second Detail Page</Text>
                <View style={{height: 100}}>
                    <FlatList style={{borderColor:'red',borderWidth:1}} data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}></FlatList>
                </View>
                <Button title="跳转到Detail（三）" onPress={()=>{this.props.navigation.push('DetailThird')}}></Button>
            </View>
        );
    }
}

class DetailThirdScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{borderColor:'red',borderWidth:1}}>Third Detail Page</Text>
                <Button title="跳转到Detail（一）" onPress={()=>{this.props.navigation.navigate('Detail')}}></Button>
                <Button title="回首页" onPress={()=>{this.props.navigation.popToTop()}}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailScreen,
        DetailSecond: DetailSecondScreen,
        DetailThird: DetailThirdScreen,
    },
    {
        initialRouteName: 'Home'
    }
    );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
