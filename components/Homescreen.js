import * as React from 'react';
import { Text, View, FlatList} from 'react-native';
import styles from "./Style";
export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Andrew Young</Text>
            </View>
            <Text style={styles.content}>
                Hi, my name is Andrew and I am a web and application developer. A few of my hobbies are hunting, fishing, video games, and watching movies. Down below you can find my top 5 movies. In my free time I enjoy hanging out with friends or my girlfriend. I do freelance work from time to time as well. Which you can check out in my projects tab.
            </Text>
            <Text style={styles.name}>Top 5 Movies</Text>
            <FlatList
                data={[
                    {key: 'Django Unchained'},
                    {key: 'Wolf of Wall Street'},
                    {key: 'Kill Bill'},
                    {key: 'Forest Gump'},
                    {key: 'Public Enemy'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}


