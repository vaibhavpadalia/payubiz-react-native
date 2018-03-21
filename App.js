/**
 * Payubiz payment gateway
 * @author Vaibhav Padalia
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, WebView } from "react-native";
import api from "./src/Components/Api";

export default class App extends Component {
  state = {
    html: ""
  };
  componentWillMount() {
    api
      .getUser(
        Math.floor(1000000000 + Math.random() * 900000000).toString(),
        1000,
        "Vaibhav",
        "vaibhav@gmail.com",
        "9999999999",
        "productInfo"
      )
      .then(res => {
        this.setState({ html: res.url });
      });
  }
  render() {
    return (
      <WebView
        style={{
          flex: 1
        }}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        source={{
          uri: this.state.html
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
