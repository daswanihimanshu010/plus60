import React, {useState, useRef, useContext, useEffect} from 'react';
import {TextInput,Modal, View,Text, Image, StatusBar,TouchableOpacity,ToastAndroid,FlatList,Button} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import BottamTab from '../../component/BottamTab';
import AwesomeAlert from 'react-native-awesome-alerts';
import { moderateScale } from 'react-native-size-matters';

export default function Offer({navigation,route}) {
    const [showAlert, setshowAlert] = useState(false);
    const [ineed, setineed] = useState(false);
    const [showok, setok] = useState(false);
    const [showdelete, setshowdelete] = useState(false);
    const [userid, setuserid] = useState('');
    const [clr2, setclr2] = useState(colors.Charcole);
    const [clr1, setclr1] = useState(colors.white);
    const [image, setimage] = useState(null);
    const [ineed_id, setineed_id] = useState('');
    const [member_id, setmember_id] = useState('');
    const [showModalmsg, setShowModalmsg] = useState(false);
    const [msg, setmsg] = useState('PLUS60 member may just be the help who may satisfy your or your loved ones need. And you too may be helpful to someone. Go ahead!');
   
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }
    const onpress1 = async () =>{
        setineed(true);
        setclr1(colors.Charcole);
        setclr2(colors.white);
    }
    const onpress2 = async () =>{
        setineed(false);
        setclr2(colors.Charcole);
        setclr1(colors.white);
       
    }
    const [List, setList] = useState([ ]);
    const [Listneed, setListneed] = useState([ ]);
    const deleteineed = async () => {
        var formdata = new FormData();

        formdata.append("act", "delete_ineed");
        formdata.append("id",ineed_id);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    ToastAndroid.show('delete successfully',ToastAndroid.SHORT);
                    getdata();
                    getdataneed();
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
            })
      }
    const setfilterdata = async (e) => {
        var formdata = new FormData();
        const uid =await  AsyncStorage.getItem("u_id");

        formdata.append("act", "ineedioffer_search");
        formdata.append("key",e);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                //    setList(responseJson.data);
                    setListneed(responseJson.data);
                }else{
                   // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }

            })
      }
      const getdata = async () =>{
         
        var formdata = new FormData();
        const uid =await  AsyncStorage.getItem("u_id");
        setuserid(uid);

        formdata.append("act", "ineedioffer");
        formdata.append("user_id",uid);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    setList(responseJson.data);
                }else{
                    setList([]);

                   // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }

            })

            
  }
  const getdataneed = async () =>{
         
    var formdata = new FormData();
    const uid =await  AsyncStorage.getItem("u_id");
    setuserid(uid);


formdata.append("act", "ineedioffer");

var requestOptions = {
  method: 'POST',
  body: formdata,
};
fetch(config.serverURL, requestOptions)
.then(response => response.json())
  .then(responseJson =>{
      if(responseJson.status == 1){
         setListneed(responseJson.data);
      }else{
      //    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
      setListneed([])
      }

})

  
}
const [intrest, setintrest] = useState([]);  
const getintrest = async () => {
  var formdata = new FormData();
  formdata.append("act", "ineed_services");
  var requestOptions = {
      method: 'POST',
      body: formdata,
  };
  const response = await fetch(config.serverURL, requestOptions);
  const json = await response.json();
  setintrest(json.data);

}; 
const connect = async () =>{
    const uid =await  AsyncStorage.getItem("u_id");
    var formdata = new FormData();
    formdata.append("act", "send_connection");
    formdata.append("member_id", uid);
    formdata.append("share_with_my_connection", member_id);
    formdata.append("mag_request", 'This is i need');
    var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){
                setok(true);


            }else{
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
  
      })

 }
      useEffect(() => {
        navigation.addListener('focus',()=>{
            getdata();
            getdataneed();
            getintrest();
            getdatauser();
           })
        getdata();
        getdataneed();
        getdatauser();
        getintrest();

    }, []);

  
    
    return(
        <View style={style.viewStyle}>
            <Modal
         transparent={true}
         visible={showModalmsg}
         animationType={'slide'}
          animationIn="slideInLeft"
    
         >
       
         <View  style={style.modal}>
            <View  style={style.modalInner}>
                <Text style={[style.modalsubtitle,{marginBottom:moderateScale(10)}]}>{msg}</Text>
                <Button color={colors.Golden}            
                title='Ok'
                onPress={()=>setShowModalmsg(!showModalmsg)}
                />
            </View>
         </View>

       </Modal>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>
                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity  onPress={()=> navigation.navigate('HOME')} >
                                <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                            </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 

                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Offer'})}  >

                                { image != null ? (
                                        <Image style={style.imgStyle3} 
                                            source={{uri: config.fileserver+image}}
                                        /> 
                                    ): (
                                        <Image style={style.imgStyle3} source={require('../../Assets/icon/avtar.png')}/> 
                                    )
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:moderateScale(25)}}>
                                <Text style={style.hdr}>{'I NEED / I OFFER'}</Text>
                                <TouchableOpacity  onPress={()=>setShowModalmsg(!showModalmsg)} >
                                        <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.cardheader1}>
                            <TouchableOpacity onPress={()=>onpress2()}>
                                <Text style={[style.typebutton,{backgroundColor: clr2 , color: !ineed ? colors.white : colors.Charcole }]}>I need</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>onpress1()}  >
                            <Text style={[style.typebutton,{backgroundColor: clr1  , color: ineed ? colors.white : colors.Charcole  }]}>I offer</Text>
                            </TouchableOpacity>
                            
                                
                            </View>
                        </View>
                        <View style={style.card}>
                            
                            {/*  <View style={style.cardheaderblb}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                   <Text style={style.cardheadertxt}>{'How it works!'}</Text> 
                                </TouchableOpacity>
                            </View>
                            */}

                            {/* <View style={style.cardheader1}>
                            <TouchableOpacity onPress={()=>onpress2()}>
                                <Text style={[style.typebutton,{backgroundColor: clr2 , color: !ineed ? colors.white : colors.Charcole }]}>I Need</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>onpress1()}  >
                            <Text style={[style.typebutton,{backgroundColor: clr1  , color: ineed ? colors.white : colors.Charcole  }]}>I Offer</Text>
                            </TouchableOpacity>
                            
                                
                            </View> */}
                            { ineed  ? (
                                <View style={style.cardheaderfilter}>
                                    <TextInput style={style.searchbar}  placeholderTextColor={colors.Charcole} placeholder='Search by Services/Location/Description..'
                                      onChangeText={(itemValue) => {  setfilterdata(itemValue) }}
                                    />
                                </View>
                            ) : (
                            <View style={style.cardheader}>
                                <View style={{flexDirection:'row'}}>
                                    
                                    {/* <Ionicons name='bulb-outline' size={25} style={style.iconf} />
                                    <Text style={style.cardheadertxt}>{'Tips how it works!'}</Text> */}
                                </View>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>
                                    navigation.navigate('Offercreate') 
                                }  > 
                                <Text style={style.cardheadertxt}>{'Add your need  '}</Text>
                                <Ionicons name='md-add' size={moderateScale(25)} style={{color:colors.orange}} /> 
                                </TouchableOpacity>
                            </View>
                            )}
                            { ineed ? (
                                <View>
                                     { Object.keys(List).Listneed == 0 ? (
                                        <View style={[style.cardlist,{alignItems:'center'}]}>
                                            <Text style={[style.txt4]}>{'I offer not found'}</Text>
                                        </View>
                                     ) : null}

                                    <FlatList
                                 style={{marginBottom:moderateScale(210)}}
                                 bounces={false}
                                 data={Listneed}
                                 listKey={item => item.toString()}
                                 showsHorizontalScrollIndicator={false}
                                 showsVerticalScrollIndicator={false}
                                 keyExtractor={(item, index) => index.toString()}
                                 renderItem={({item, index}) => (
                                   <View>
                                       {item.user_id === userid ? null :  (
                                        <View style={style.cardlist}>
                                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                                            <Text style={[style.txt4,{flex:1}]} numberOfLines={2}>{item.get_service_name+' For '+item.for_whom_name}</Text>
                                            <TouchableOpacity onPress={()=>{setmember_id(item.user_id);setshowAlert(true);}}>
                                                
                                                <FontAwesome size={moderateScale(25)} style={{color:'#746848'}}  name='location-arrow'  />
                                                
                                            </TouchableOpacity>


                                            </View>
                                            <Text style={style.txt3} numberOfLines={3}>{item.description}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{ flex:1}}>
                                            <Text  style={[style.txt41]} numberOfLines={1}>{item.type}</Text>

                                                </View>
                                                <View style={{ flex:1,alignItems:'flex-end'}}>
                                                    <View style={{flexDirection:'row'}}>
                                                        <MaterialCommunityIcons size={moderateScale(20)} style={{color:colors.red}}  name='map-marker-radius'  />
                                                        <View>
                                                            <Text  style={[style.txt41,{color:'#946D00',paddingLeft:moderateScale(5)}]} numberOfLines={1}>{item.location}</Text>
                                                        </View>
                                                    </View>
                                                   
                                                </View>
                                            </View>
                                            <AwesomeAlert
                                                show={showAlert}
                                                showProgress={false}
                                                title="Alert"
                                                message="Do you want to connect / offer?"
                                                closeOnTouchOutside={false}
                                                closeOnHardwareBackPress={false}
                                                showCancelButton={true}
                                                showConfirmButton={true}
                                                cancelText="Cancel"
                                                confirmText="Ok"
                                                messageStyle={{color:'#4B4E4F' }}
                                                titleStyle={{color:'#4B4E4F'}}
                                                cancelButtonStyle={{width:moderateScale(100)}}
                                                confirmButtonStyle={{width:moderateScale(100)}}
                                                confirmButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                                                cancelButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                                                cancelButtonColor='#928F8D'
                                                confirmButtonColor={colors.Golden}
                                                onCancelPressed={() => {
                                                    setshowAlert(false)
                                                }}
                                                onConfirmPressed={() => {
                                                    connect();
                                                    setshowAlert(false)

                                                }}
                                                />
                                                  <AwesomeAlert
                    show={showok}
                    showProgress={false}
                    title="Alert"
                    message="Connection request sent successfully"
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="OK"
                    messageStyle={{color:'#4B4E4F' }}
                    titleStyle={{color:'#4B4E4F'}}
                    confirmButtonStyle={{width:moderateScale(100)}}
                    confirmButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                    confirmButtonColor={colors.Golden}
                    onConfirmPressed={() => {
                        setok(false);
                        navigation.navigate('Inbox',{'path':'Offer'});
                    }}
                    />
                                        </View>
                                       ) }
                                 
                                    </View>
                       
                                  )}
                                 />
                                </View>
                                

                            ) : (
                                <View>
                                     { Object.keys(List).length == 0 ? (
                                        <View style={[style.cardlist,{alignItems:'center'}]}>
                                            <Text style={[style.txt4]}>{'I need not found'}</Text>
                                        </View>
                                     ) : null}
                                <FlatList
                                style={{marginBottom:moderateScale(210)}}
                                bounces={false}
                                data={List}
                                listKey={item => item.toString()}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item, index}) => (
                                  <View>
                                  <View style={style.cardlist}>
                                 
                                            <Text style={style.txt4} numberOfLines={2}>{item.get_service_name+' For '+item.for_whom_name}</Text>
                                            <Text style={style.txt3} numberOfLines={3}>{item.description}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{ flex:1}}>
                                            <Text  style={[style.txt41]} numberOfLines={1}>{item.type}</Text>

                                                </View>
                                                <View style={{ flex:1,alignItems:'flex-end'}}>
                                                    <View style={{flexDirection:'row'}}>
                                                        <MaterialCommunityIcons size={moderateScale(20)} style={{color:colors.red}}  name='map-marker-radius'  />
                                                        <View>
                                                            <Text  style={[style.txt41,{color:'#946D00',paddingLeft:moderateScale(5)}]} numberOfLines={1}>{item.location}</Text>
                                                        </View>
                                                    </View>
                                                   
                                                </View>
                                            </View>
                                            <View style={style.line} />

                                            <View style={style.action}>
                                                <TouchableOpacity onPress={()=>navigation.navigate('Offeredit',{item})}>
                                                    <AntDesign name='edit' size={moderateScale(25)} color={colors.edit} />
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={()=>{setineed_id(item.ii_id); setshowdelete(true); }} >
                                                    <AntDesign name='delete' size={moderateScale(25)}  color={colors.red}/>
                                                </TouchableOpacity>
                                                <AwesomeAlert
                                                show={showdelete}
                                                showProgress={false}
                                                title="Alert"
                                                message="Do you want to delete it?"
                                                closeOnTouchOutside={false}
                                                closeOnHardwareBackPress={false}
                                                showCancelButton={true}
                                                showConfirmButton={true}
                                                cancelText="No"
                                                confirmText="Yes"
                                                messageStyle={{color:'#4B4E4F' }}
                                                titleStyle={{color:'#4B4E4F'}}
                                                cancelButtonStyle={{width:moderateScale(100)}}
                                                confirmButtonStyle={{width:moderateScale(100)}}
                                                confirmButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                                                cancelButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                                                cancelButtonColor='#928F8D'
                                                confirmButtonColor={colors.Golden}
                                                onCancelPressed={() => {
                                                    setshowdelete(false)
                                                }}
                                                onConfirmPressed={() => {
                                                    deleteineed();
                                                    setshowdelete(false)

                                                }}
                                                />
                                            </View>

                                  </View>
                              </View>
                      
                                 )}
                                />
                                </View>

                            ) }
                            
                           
                            
                        </View>
                        
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}