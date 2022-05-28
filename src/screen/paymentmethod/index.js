import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,FlatList, StatusBar,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Paymentmethod({navigation}) {
    const [List, setList] = useState([
        {title: 'UPI BANK TRANSFER', isSeleted: false},
        {title: 'CASH ON DELIVERY', isSeleted: false},
        {title: 'DEBIT/CREDIT CARD', isSeleted: true},
        {title: 'PAYTM WALLET', isSeleted: false},
      ]);
    return(
        <View style={style.viewStyle}>
            <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} >
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView>
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.wrapp}>
                            <View style={style.headerstyle}>
                                <Text style={style.txtstyle1}>{'Select payment method'}</Text>
                            </View>
                            <View style={style.field}>
                            <FlatList
                                bounces={false}
                                data={List}
                                listKey={item => item.toString()}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item, index}) => (
                                    <View style={style.view}>
                                        {(item.isSeleted === true)?(
                                        <AntDesign name='checkcircle' size={30} style={{color:'#029595'}}/>
                                        ):(
                                            <Entypo name='circle' size={30} style={{color:'#029595'}} />
                                        )}
                                       
                                        <Text style={style.txtstyle2}>{item.title}</Text>
                                    </View>
                                 )}
                                 />
                                
                                <View style={style.btn}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('HOME')}>
                                        <Text style={style.txtstyle3}>{'PAY NOW'}</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                            
                           
                            

                        </View>
                    </SafeAreaView>
            </ImageBackground>
        </View>
    )
}