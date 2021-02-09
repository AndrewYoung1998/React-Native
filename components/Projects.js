import * as React from 'react';
import { Text, View, Linking, TouchableOpacity} from 'react-native';
import styles from "./Style";

export default function ProjectScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.nameContainer}>
                <Text style={styles.name}>Projects</Text>
            </View>
            <TouchableOpacity onPress={()=> Linking.openURL('https://thecomicsvault.com')}>
                <Text style={styles.item}>The Comics Vault</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://eternalimage.studio')}>
                <Text style={styles.item}>Eternal Image Studio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://thecomicsvault.com')}>
                <Text style={styles.item}>Sonic Ascension Records</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://mikes.tools/')}>
                <Text style={styles.item}>Mikes Tools</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://alysmonkeys.org/')}>
                <Text style={styles.item}>Alys Monkeys</Text>
            </TouchableOpacity>

            <View style={styles.nameContainer}>
                <Text style={styles.name}>Github</Text>
            </View>
            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/AndrewYoung1998/VueJS')}>
                <Text style={styles.item}>VueJS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/AndrewYoung1998/React')}>
                <Text style={styles.item}>ReactJS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/AndrewYoung1998/PHP')}>
                <Text style={styles.item}>PHP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/AndrewYoung1998/Java')}>
                <Text style={styles.item}>Java</Text>
            </TouchableOpacity>
        </View>
    );
}
