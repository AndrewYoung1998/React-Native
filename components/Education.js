import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from "./Style";

export default function EducationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Education</Text>
            </View>
            <View>
                <Text style={styles.content}>
                    High School: Hollidaysburg Area High School
                </Text>
            </View>
            <View>
                <Text style={styles.content}>
                    College: Pennsylvania College of Technology
                </Text>
            </View>
        </View>
    );
}
