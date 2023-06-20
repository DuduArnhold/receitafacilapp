import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


export function VideoView({ handleClose,  videoUrl }){

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backbuttom} onPress={ handleClose }>
                <Feather
                    name="arrow-left"
                    size={24}
                    color='#fff'
                />
                <Text style={styles.backTxt}>Voltar</Text>
            </TouchableOpacity>
        

            <WebView
                style={styles.contentView}
                source={{uri: videoUrl}}
            
            />
        </SafeAreaView>


    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    backbuttom:{
        width: '100%',
        backgroundColor:'#4cbe6c',
        height: 48,
        flexDirection: 'row',
        alignItems: "center",
        paddingStart: 14,
    },
    backTxt:{
        color: "#FFf",
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 14,
        
    },
    contentView:{
        flex:1,
        width: '100%'
    }
})