import React, {useState, useRef, useContext, useEffect} from 'react';
import {Modal, View,Text, Image, StatusBar,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import { moderateScale } from 'react-native-size-matters';
import BottamTab from '../../component/BottamTab';

export default function Onbording({navigation,route}) {
    const [showModal, setShowModal] = useState(false);
    const [msg, setmsg] = useState('');

    const show = async (e) =>{
        setmsg(e)
        setShowModal(true)
    }


    return(
        <View style={style.viewStyle}>
            <Modal
            transparent={true}
            visible={showModal}
            animationType={'slide'}
            animationIn="slideInLeft"
            >
            <View  style={style.modal}>
            <View  style={style.modalInner1}>
            <View style={{flexDirection:'row'}}>
            <Text style={[style.camtxt,{color:colors.Charcole}]}>{msg}</Text>

            </View>
            <TouchableOpacity style={{backgroundColor:colors.Golden,paddingHorizontal:moderateScale(25),paddingVertical:moderateScale(3),marginTop:moderateScale(8),borderRadius:moderateScale(5)}} onPress={()=>{setShowModal(false)}} >
            <Text style={[style.camtxt,{color:colors.white}]}>OK</Text>
            </TouchableOpacity>
            </View>
            </View>
            </Modal>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView style={{flex:1}} >
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.stylerow}>
                           <View style={style.stylewrap}>

                                <View style={style.box1}>
                                {/* <TouchableOpacity onPress={()=>show('Re-live olden days by finding good old friends again. And make new friends to build new connections! It is clutter free!')} style={{alignSelf:'flex-end'}}>
                                    <AntDesign name='questioncircle'  size={moderateScale(15)} style={{color:colors.Charcole,marginRight:moderateScale(5),marginTop:moderateScale(-16)}} />
                                </TouchableOpacity> */}
                                <FontAwesome5 name='handshake' size={moderateScale(30)} style={{color:'black'}} />     
                                        <Text style={style.styletxt1}>{'CONNECT'}</Text>
                                </View>
                                <View style={style.box2}>
                                {/* <TouchableOpacity onPress={()=>show('Your life lessons are no less than chapters of a book! Express yourself by recording videos and let others take inspiration from them while you may seek clues from other Human Books! Afterall, Sharing is Caring!')} style={{alignSelf:'flex-end'}}>
                                    <AntDesign name='questioncircle'  size={moderateScale(15)} style={{color:colors.Golden,marginRight:moderateScale(5),marginTop:moderateScale(-25)}} />
                                </TouchableOpacity> */}
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <FontAwesome name='video-camera' size={moderateScale(30)} style={{color:colors.Golden}} />     
                                    <Text style={style.styletxts2}> {'HUMAN BOOK'}</Text>
                                </View>
                                        
                                </View>
                           </View>
                        </View>
                        <View style={style.stylerow}>
                           <View style={style.stylewrap}>
                                
                                <View style={style.box2}>
                                {/* <TouchableOpacity onPress={()=>show('PLUS60 member may just be the help who may satisfy your or your loved one`s need. And you too may be helpful to someone. Go ahead!')} style={{alignSelf:'flex-end'}}>
                                    <AntDesign name='questioncircle'  size={moderateScale(15)} style={{color:colors.Golden,marginRight:moderateScale(8),marginTop:moderateScale(-25)}} />
                                </TouchableOpacity> */}
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <FontAwesome name='asl-interpreting' size={moderateScale(30)} style={{color:colors.Golden}} />     
                                        <Text style={style.styletxts2}> {'I NEED / I OFFER'}</Text>
                                    </View>
                                </View>
                                <View style={style.box1}>
                                {/* <TouchableOpacity onPress={()=>show('Set up alerts for birthdays, anniversaries as well as your medicines and exercise! Plus60 will also automatically set up reminders of programs you are interested in.')} style={{alignSelf:'flex-end'}}>
                                    <AntDesign name='questioncircle'  size={moderateScale(15)} style={{color:colors.Charcole,marginRight:moderateScale(5),marginTop:moderateScale(-16)}} />
                                </TouchableOpacity> */}
                                <FontAwesome name='bell' size={moderateScale(30)} style={{color:colors.black}} />     
                                        <Text style={style.styletxt1}>{'ALERTS'}</Text>
                                </View>
                           </View>
                        </View>
                        <View style={style.stylerow}>
                           <View style={style.stylewrap}>
                                <View style={style.box1}>
                                {/* <TouchableOpacity onPress={()=>show('Go ahead and explore them as they are only meant for your entertainment and engagement - online, offline and with variety!')} style={{alignSelf:'flex-end'}}>
                                    <AntDesign name='questioncircle'  size={moderateScale(15)} style={{color:colors.Charcole,marginRight:moderateScale(5),marginTop:moderateScale(-16)}} />
                                </TouchableOpacity> */}
                                <FontAwesome name='calendar' size={moderateScale(30)} style={{color:colors.black}} />     
                                    <Text style={style.styletxt1}>{'PROGRAMS'}</Text>
                                </View>
                                <View style={style.box2}>
                                {/* <TouchableOpacity onPress={()=>show('While you leverage some discounts, let us know specific discounts you are looking for. We shall try to get them for you!')} style={{alignSelf:'flex-end'}}>
                                    <AntDesign name='questioncircle'  size={moderateScale(15)} style={{color:colors.Golden,marginRight:moderateScale(8),marginTop:moderateScale(-25)}} />
                                </TouchableOpacity> */}
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <FontAwesome5 name='percentage' size={moderateScale(30)} style={{color:colors.Golden}} />     
                                        <Text style={style.styletxts2}> {'COUPONS & ADS'}</Text>
                                    </View>
                                    
                                </View>
                           </View>
                        </View>
                       
                        <View style={style.stylebootam}>
                            <View style={style.stylewrap1}>
                            <TouchableOpacity style={style.btnstylelogin} onPress={()=>navigation.navigate('Login')}>
                                <Text style={style.styletxt2}>{'Login'}</Text>
                            </TouchableOpacity> 
                            <TouchableOpacity style={style.btnstylesignup} onPress={()=>navigation.navigate('Signup')}>
                                <Text style={style.styletxt3}>{'Signup'}</Text>
                            </TouchableOpacity>
                                
                            </View>
                        </View>

                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}