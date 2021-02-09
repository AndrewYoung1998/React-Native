import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from "./Style";

export default function ExperienceScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Experience</Text>
            </View>
            <FlatList
                data={[
                    {key: 'Legal InSites'},
                    {key: 'EZ to Use'},
                    {key: 'Second + West'},
                    {key: 'Web Tutor'},
                    {key: 'Intrada Technologies'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}
