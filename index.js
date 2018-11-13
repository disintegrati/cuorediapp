import React from 'react';
import { Animated, StyleSheet, Text, View, ScrollView } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.loop(

    Animated.sequence([
      Animated.timing(
        this.state.fadeAnim,
        {toValue: 1,
        duration:149.2,

      }
    ),
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 0,
      duration:134.2,
    }
  ),
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1,
      duration:223.8,
    }
  ),

  Animated.timing(
    this.state.fadeAnim,
    {toValue: 0,
    duration:1776.2,
  }
),

])).start();
  }
  render() {
    let {fadeAnim} = this.state;
    return (
      <Animated.View
        style={{...this.props.style,
          opacity: fadeAnim,
        }}
        >
        {this.props.children}
        </Animated.View>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
       <View style={{flex: 1}}>
        <FadeInView style={{flex:3, backgroundColor: '#ed1f24'}}>

        </FadeInView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {


  },
  testo: {
    color: "#000",
  },
});
