import React, {useState, useRef, useContext, useEffect} from 'react';
import {ToastAndroid, View,Text, Image, StatusBar,ActivityIndicator, ScrollView, Modal,TouchableOpacity} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottamTab from '../../component/BottamTab';
import {Picker} from '@react-native-picker/picker';
import config from '../../server/config';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultiSelect from 'react-native-multiple-select';
import { createThumbnail } from "react-native-create-thumbnail";
import { TextField } from 'react-native-material-textfield';
export default function Humanbookcreate({navigation,route}) {
    const [showModal, setShowModal] = useState(false);
    const [showModalimg, setShowModalimg] = useState(false);

    const [langs, setlangs] = useState('');

    const [name, setname] = useState('');
    const [Thumbnail, setThumbnail] = useState('');
    const [textMessage, settextMessage] = useState(null);
    const [textMessage1, settextMessage1] = useState(null);
    const [text, settext] = useState('');
    const [image, setimage] = useState('');
    const [vedio, setvedio] = useState('');
    const [img, setimg] = useState(''); 
    const [images, setimages] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimages(u_img);
    }
    [global.vediouritxt = null]

    useEffect(() => {
        navigation.addListener('focus',()=>{
            console.log('run')
            settextMessage(global.vediouri);
            settextMessage1(global.vediouritxt);
           })
           getdatauser();
       });
    const [language, setlanguange] = useState([
        {id:'Hindi',name:'Hindi'},
        {id:'English',name:'English'},
        {id:'Marathi',name:'Marathi'},
    ]);
    const setlangdata = async (e) => {
        console.log(e[0]);
        setlangs(e[0]);
       }
   

      const submitdata = async () =>{
      
        var rescover = await  createThumbnail({
            url: global.vediouri,
            timeStamp: 1000,
            format:'png',
           
          })
            
        const uid =await  AsyncStorage.getItem("u_id");
        if (textMessage1 == null) {
            ToastAndroid.show("Please upload any video",ToastAndroid.SHORT);
            return; 
        }
        if (!name.trim()) {
            ToastAndroid.show("Please enter topic",ToastAndroid.SHORT);
            return;
          }
        //   if ( name.length < 20) {
        //     ToastAndroid.show("topic text limit is 4 - 20 characters",ToastAndroid.SHORT);
        //     return;
        //   }
        if (!langs.trim()) {
            ToastAndroid.show("Please select language",ToastAndroid.SHORT);
            return;
            }
       
       
        
        setShowModal(!showModal);

        var formdata = new FormData();
        formdata.append("hb_language", langs);
        formdata.append("hb_name", name);
        formdata.append("member_id",uid);
        formdata.append("act",'addhumanbook');
        formdata.append("hb_file_name", {
            name:  'img.png',
            filename: 'img.png',
            uri: rescover.path,
            type: rescover.mime
        });
            formdata.append("hb_video", {
                name: 'vedio.mp4',
                filename:'vedio.mp4',
                uri: global.vediouri,
                type: 'video/mp4'
            });

        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                console.log('res:::',responseJson)
                if(responseJson.status == 1){
                    setShowModal(!showModal);

                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
    
                    navigation.navigate('Humanbook') 
    
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
    
                
    
          })
          
    
    }
  
    const selectVideo = () => {

        ImagePicker.launchImageLibrary({ includeBase64: true,mediaType:'video' }, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                console.log(response.customButton);
              } else {
                console.log(response);

                var a =response.assets[0].fileName;
                var b =response.assets[0].type;
                var c = a +'.'+ b;
                settextMessage(c);
                settextMessage1(c);
                setvedio(response);

                [global.vediouri = response.assets[0].uri]

              }
          
        })
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
            <View  style={style.modalInner}>
                <ActivityIndicator size="large" animating={showModal} color={colors.Golden}/>
            </View>
         </View>
       </Modal>
       <Modal
          transparent={true}
          visible={showModalimg}
          animationType={'slide'}
          animationIn="slideInLeft"
         >
         <View  style={style.modal}>
            <View  style={style.modalInner1}>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>{setShowModalimg(false);
                    selectVideo()
                    }}  style={{marginRight:moderateScale(30)}}>
                    <MaterialIcons name='add-photo-alternate' color={colors.Golden} size={moderateScale(55)} />
                    <Text style={style.camtxt}>Gallery</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setShowModalimg(false);
                        navigation.navigate('Recorder')
                    }} >
                     <Ionicons name='videocam' color={colors.Golden}  size={moderateScale(55)}  />
                    <Text style={style.camtxt}>Camera</Text>
                  </TouchableOpacity>
                  

                </View>
                <TouchableOpacity style={{backgroundColor:colors.Charcole,paddingHorizontal:moderateScale(5),paddingVertical:moderateScale(3),marginTop:moderateScale(8),borderRadius:moderateScale(5)}} onPress={()=>{setShowModalimg(false)}} >
                    <Text style={[style.camtxt,{color:colors.Golden}]}>Cancel</Text>
                  </TouchableOpacity>
            </View>
         </View>
       </Modal>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity  onPress={()=> navigation.navigate('Humanbook')} >
                                    <AntDesign name='arrowleft' color={colors.Charcole} style={style.imgStyle2} size={moderateScale(30)} />
                                </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Humanbookcreate'})}  >
                                { images != null ? (
                                        <Image style={style.imgStyle3} 
                                            source={{uri: config.fileserver+images}}
                                        /> 
                                    ): (
                                        <Image style={style.imgStyle3} source={require('../../Assets/icon/avtar.png')}/> 
                                    )
                                    }
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={style.hdr}>HUMAN BOOK</Text>
                        </View>
                        <View style={style.card}>
                            <View style={style.cardheader}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={style.cardheadertxt}>{'My story'}</Text>
                                </View>
                            </View>
                            <ScrollView horizontal={false}>
                                <View style={style.lbl}>
                                <TextField
                                    label='Title'
                                    maxLength={20}
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={'#202020'}
                                    tintColor={'#202020'}
                                    onChangeText={(name) =>
                                    setname(name)}
                                />
                                 <Text style={[style.label,{marginTop:moderateScale(8)}]}></Text>
                                <MultiSelect
                                      hideTags
                                      items={language}
                                      single
                                      uniqueKey="id"
                                      onSelectedItemsChange={setlangdata}
                                      selectedItems={[langs]}
                                      selectText="Language of video"
                                      searchInputPlaceholderText="Search language"
                                      tagRemoveIconColor="#202020"
                                      tagBorderColor="#202020"
                                      tagTextColor="#202020"
                                      fontSize={moderateScale(15)}
                                      selectedItemTextColor="#202020"
                                      selectedItemIconColor="#202020"
                                      itemTextColor="#202020"
                                      displayKey="name"
                                      searchInputStyle={{color: '#202020'}}
                                />
                                <Text style={[style.label,{marginTop:moderateScale(8)}]}></Text>
                                <TouchableOpacity onPress={()=>setShowModalimg(true)} style={{backgroundColor:colors.Charcole,alignItems:'center',paddingVertical:moderateScale(8),}}>
                                    <Text style={[style.label,{color:colors.Golden}]}>{'Upload video'}</Text>
                                </TouchableOpacity>
                                
                                    
                                    { textMessage1 != null ? (
                                    <Text style={{width:'100%',alignSelf:'center',color:'#424242',marginTop:8}}>{textMessage}</Text>

                                    ) : null }
                                      
                                    
                            
                             
                                 <TouchableOpacity
                                 onPress={()=>submitdata()}
                                 style={style.btn}>
                                 <Text style={style.txtstyle3}>{'Submit'}</Text>
                                 </TouchableOpacity>
                                 </View>
                            </ScrollView>

                        </View>
                            

                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}