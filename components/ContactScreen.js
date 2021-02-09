import * as React from 'react';
import { Text, View,Button, Linking} from 'react-native';
import styles from "./Style";

export default function ContactScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Contact</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        buttonStyle={styles.button}
                        color="#841584"
                        onPress={() => Linking.openURL('mailto:andrew_young17@icloud.com')}
                        title="Email me today" />
                </View>
                <View style={styles.button}>
                    <Button
                        color="#841584"
                        onPress={() => Linking.openURL('tel:8142158307')}
                        title="Call me today" />
                </View>
            </View>
        </View>
    );
}
