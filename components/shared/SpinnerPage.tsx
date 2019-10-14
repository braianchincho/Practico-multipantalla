import React, { Component } from 'react'
import {  ActivityIndicator, StyleSheet, Text, View
} from 'react-native'

const SpinnerPage = ({message}) => {
    const loadingMessage = message || '';
    return (
        <View style={[styles.container]}>
            <View style={{marginTop: 30}} >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
            <View >
                <Text style={{textAlign: 'center'}}>
                    {loadingMessage}
                </Text>
            </View>
        </View>
    );
  
}
export default SpinnerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  }
});
