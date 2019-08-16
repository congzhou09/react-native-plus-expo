/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            title: '首页',
            headerRight: (<Button title="打开modal" onPress={()=>{
                navigation.navigate('Modal');
            }}/>)
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>Welcome Congzhou to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
                <View>
                    <Button title="跳转" onPress={()=>{this.props.navigation.navigate('Detail', {say: 'wa-oh', title: '我的详情'})}}/>
                </View>
            </View>
        );
    }
}

class DetailScreen extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            title: navigation.getParam('title')
        };
    };
    render(){
        const routerParam = this.props.navigation.getParam('says');
        return (
            <View style={styles.container}>
                <Text style={{borderColor:'red',borderWidth:1}}>First Detail Page</Text>
                <Text>{routerParam}</Text>
                <Button title="改标题" onPress={()=>{this.props.navigation.setParams({title: '新标题是我'})}} />
                <Button title="跳转到Detail（二）" onPress={()=>{this.props.navigation.push('DetailSecond')}} />
                <Button title="返回" onPress={()=>{this.props.navigation.goBack()}} />
            </View>
        );
    }
}

class DetailSecondScreen extends Component {
    static navigationOptions = ({navigationOptions})=>{
        return {
            title: '第二详情页',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            headerRight:(
                <Button onPress={()=>{alert('hi')}} title="信息" color="#000"/>
            )
        };
    };
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
                    ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
                </View>
                <Button title="跳转到Detail（三）" onPress={()=>{this.props.navigation.push('DetailThird')}} />
            </View>
        );
    }
}

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./img/monkey_patch.jpg')}
                style={{ width: 45, height: 45 }}
            />
        );
    }
}

class DetailThirdScreen extends Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTintColor: '#000'
    }
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

class ModalView extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Sa yo na ra~</Text>
                <Button title="关闭" onPress={()=>{this.props.navigation.goBack();}}></Button>
            </View>);
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailScreen,
        DetailSecond: DetailSecondScreen,
        DetailThird: DetailThirdScreen,
    },
    {
        // mode: 'modal',
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#86d4ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    }
    );



const RootNavigator = createStackNavigator(
    {
        Main: AppNavigator,
        Modal: ModalView
    },
    {
        initialRouteName: 'Main',
        mode: 'modal',
        headerMode: 'none'
    });

const AppContainer = createAppContainer(RootNavigator);
// const Tabs = createBottomTabNavigator({AppNavigator});

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
