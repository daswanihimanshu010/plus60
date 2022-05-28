import React, {useState, useRef, useContext, useEffect} from 'react';
import { View,Text, Image,StatusBar,ScrollView,useWindowDimensions } from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';


import RenderHtml from 'react-native-render-html';
import config from '../../server/config';

import { moderateScale } from 'react-native-size-matters';

export default function Humanbook({navigation}) {
    const [list, setlist] = useState([]);

    const getdata = async () =>{

        var formdata = new FormData();
        formdata.append("act", "aap_settings");
        var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    fetch(config.serverURL, requestOptions)
    .then(response => response.json())
      .then(responseJson =>{
          if(responseJson.status == 1){

            setlist(responseJson.data);

          }

    })

      
  }
    useEffect(() => {
        getdata();
       }, [navigation]);
    return(
        <View style={style.viewStyle}>
            {/* <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} > */}
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>
                        <View style={style.stylelogo}>
                            <View style={{alignItems:'center'}}>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                            </View>
                            
                            <Text style={style.hdr}>{'Terms of Service  and Privacy Policy'}</Text>
                        </View>
                        <View style={style.card}>
                            <ScrollView>
                            <RenderHtml
                                source={{ html: list.T_C }}
                            />
                            </ScrollView>
                        </View>
                        
                    </SafeAreaView>
            {/* </ImageBackground> */}
        </View>
    )
}