import * as React from 'react';
import { StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50,
        alignItems:'center'
    },
    name:{
        color:'hsla(300, 75%, 75%, .5)',
        fontWeight:'bold',
        fontSize:24,
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor:'#333',
        paddingTop:10,
        paddingBottom:10,
    },
    nameContainer:{
        width:width,
    },
    content:{
        paddingLeft:15,
        paddingTop:15,
        paddingRight:5,
        lineHeight:30,
        fontSize: 18,
        marginTop: 10,
        marginBottom:25
    },
    item:{
        lineHeight: 40,
        fontSize:20
    },
    button:{
        marginBottom: 10,
        width:250,
    },
    buttonContainer:{
        flex: 1,
        marginTop:50,
        alignItems:'center',
        justifyContent:'center'
    }

})
export default styles;
