import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hi, I am Home!
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
