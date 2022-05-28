import React, {useState, useRef, useContext, useEffect} from 'react';
import {ToastAndroid, View,Text, Image,TextInput, StatusBar,FlatList,TouchableOpacity,Modal,Button} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import BottamTab from '../../component/BottamTab';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { moderateScale } from 'react-native-size-matters';

export default function Programs({navigation,route}) {
  const [showModalmsg, setShowModalmsg] = useState(false);
  const [msg, setmsg] = useState('Go ahead and explore them as they are only meant for your entertainment and engagement - online, offline and with variety!');
  
    const [image, setimage] = useState(null);
    const [list, setlist] = useState([]);
    const getdatauser = async () =>{
      const u_img =  await AsyncStorage.getItem('u_img');
      setimage(u_img);
  }
    const search = async (e) => {
        var formdata = new FormData();
        formdata.append("act", "program_search");
        formdata.append("key", e);
        const uid =await  AsyncStorage.getItem("u_id");
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
    .then(response => response.json())
      .then(responseJson =>{
          if(responseJson.status == 1){

            let arr = responseJson.data.map((item,index)=>{
                item.isattend = 3
                return {...item};
              })
            setlist(arr);

            formdata.append("act", "program_attendence_history");
            formdata.append("member_id", uid);
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                        
                    if(responseJson.status == 1){
    
                        let arr1 = arr.map((item,index)=>{
                            responseJson.data.forEach((product, indexe) => {
                              if (item.program_id == product.program_id) {
                                item.isattend = product.is_attend;
                              }
                            });
                            return {...item};
                          })
                          arr1.sort(function(a,b){
                            return parseInt(b.isattend)  - parseInt(a.isattend);
                           })

                          setlist(arr1);
                    }
          
              })  




          }else{
              ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
          }

    })
    }
    
        const sendstatus = async (e) =>{

        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "program_attendence");
        formdata.append("program_id", e.id);
        formdata.append("member_id", uid);
        formdata.append("is_attend", e.status);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    getdata();
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                 
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
                
      
          })
    }


    const getdata = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");

        var formdata = new FormData();
        formdata.append("act", "programlist");
        var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    fetch(config.serverURL, requestOptions)
    .then(response => response.json())
      .then(responseJson =>{
          if(responseJson.status == 1){

            let arr = responseJson.data.map((item,index)=>{
                item.isattend = 3
                return {...item};
              })
            setlist(arr);

            formdata.append("act", "program_attendence_history");
            formdata.append("member_id", uid);
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                        
                    if(responseJson.status == 1){
    
                        let arr1 = arr.map((item,index)=>{
                            responseJson.data.forEach((product, indexe) => {
                              if (item.program_id == product.program_id) {
                                item.isattend = product.is_attend;
                              }
                            });
                            return {...item};
                          })
                          arr1.sort(function(a,b){
                            return parseInt(b.isattend)  - parseInt(a.isattend);
                           })

                          setlist(arr1);
                    }
          
              })  




          }else{
              ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
          }

    })

      
  }
  useEffect(() => {
    getdata();
    getdatauser();
   }, [navigation]);
 
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
                title='OK'
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
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Programs'})}  >

                             
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
                            
                                <Text style={style.hdr}>PROGRAMS</Text>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.card}>
                        {/* <View style={style.cardheaderblb}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View> */}
                        <View style={style.cardheader}>
                            <TextInput style={style.searchbar} placeholderTextColor={colors.Charcole} placeholder='Search by Category/Location/Type..'
                                    onChangeText={(itemValue) => {  search(itemValue) }}
                                  />
                        </View>

                        <FlatList
                            style={{marginBottom:moderateScale(100)}}
                            data={list}
                            listKey={item => item.toString()}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                            <View style={style.cardlist}>
                            <View style={{flexDirection:'row'}}>
                                
                                <View style={style.cardtxt}> 
                                    <Text style={style.txt1} numberOfLines={1}>{item.program_name}</Text>
                                    <View style={style.txt3typeview}>
                                    <Text style={style.txt3type} >{item.program_type}</Text>
                                    </View>
                                    <Text style={style.txt2} numberOfLines={1}>{item.category_name}</Text>
                                    <Text style={style.txt3} numberOfLines={1}>{item.program_details}</Text>
                                    <Text  style={style.txt3} numberOfLines={1}>Price : {item.program_price}.Rs</Text>
                                    <View style={[style.address,{marginTop:moderateScale(10)}]}>
                                        <EvilIcons size={moderateScale(18)} name='location' style={{color:'#202020'}} />
                                        <Text  style={style.txt4} numberOfLines={1}>{item.program_location}</Text>
                                    </View>
                                    
                                    <View style={[style.address,{marginTop:moderateScale(10)}]}>
                                        <View style={{width:'50%',flexDirection:'row'}}>
                                            <EvilIcons size={moderateScale(18)} name='calendar'  style={{color:'#202020'}}  />
                                            <Text  style={style.txt4} numberOfLines={1}>{item.date}</Text>
                                        </View>
                                        <View style={{width:'50%',flexDirection:'row'}}>
                                            <AntDesign size={moderateScale(13)} style={{color:'#202020'}}  name='clockcircleo'  />
                                            <Text  style={style.txt4} numberOfLines={1}>{item.time}</Text>
                                        </View>    
                                    </View>
                                    </View>
                                    <View style={style.roundimg} >
                                    <View 
                                    style={style.round}>
                                        <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} source={require('../../Assets/img/img1.jpg')}/>   
                                    </View>
                                    </View>
                                </View>
                                <View style={style.line} />
                                { item.isattend == 3 ? (
                                     <View style={{flexDirection:'row'}}>
                                     { item.program_price  > 0  ? (
                                         <TouchableOpacity 
                                         disabled={true}
                                         onPress={()=> sendstatus({'id':item.program_id,'status':1}) }
                                         style={{width:'50%'}}>
                                          <Text style={style.txt5}>{'Buy Ticket'}</Text>
                                         </TouchableOpacity>
                                        ) : (
                                        <TouchableOpacity 
                                        disabled={true}
                                        onPress={()=> sendstatus({'id':item.program_id,'status':1}) }
                                        style={{width:'50%'}}>
                                         <Text style={style.txt5}>{'Set Alert'}</Text>
                                        </TouchableOpacity>
                                     )}

                                     




                                     <View style = {style.verticalline} />
                                     <TouchableOpacity
                                     onPress={()=> sendstatus({'id':item.program_id,'status':0}) }
                                     style={{width:'50%'}}>
                                      <Text style={[style.txt5,{color:'#d12424'}]}>{'- Not Interested'}</Text>
                                     </TouchableOpacity>
                                 </View>
                                 ):(
                                    <View>
                                     { item.isattend == 1 ? (
                                        <Text style={style.txt5}>{'+ Joined'}</Text>

                                     ) :null }
                                    { item.isattend == 0 ? (
                                        <Text style={[style.txt5,{color:'#d12424'}]}>{'- Not Interested'}</Text>


                                     ) :null }

                                     

                                    </View>
                                )  }
                               
                                
                            </View>
                            
                            )}
                            />
                        </View>
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}