import React, {useState, useEffect} from 'react';
import {ImageBackground,Alert, View,Text, Image, StatusBar,Modal,TouchableOpacity,Button,TextInput,FlatList,ToastAndroid} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { moderateScale } from 'react-native-size-matters';
import AwesomeAlert from 'react-native-awesome-alerts';
import BottamTab from '../../component/BottamTab';

export default function Connect({navigation,route}) {
   
    const [showModalmsg, setShowModalmsg] = useState(false);
    const [msg, setmsg] = useState('Re-live olden days by finding good old friends again. And make new friends to build new connections! It is clutter free!');
    
    const [List, setList] = useState([]);
    const [userid, setid] = useState('');
    const [showAlert, setshowAlert] = useState(false);
    const [showok, setok] = useState(false);
    const [image, setimage] = useState(null);
    const [id, setsetid] = useState('');


    const [inbox, setinbox] = useState(false);
    const [outbox, setoutbox] = useState(false);
    const [connection, setconnection] = useState(false);
    const [find, setfind] = useState(true);
    const [clr1, setclr1] = useState(colors.white);
    const [clr2, setclr2] = useState(colors.white);
    const [clr3, setclr3] =  useState(colors.white);
    const [clr4, setclr4] =  useState(colors.Charcole);
    const [connectiondata, setconnectiondata] = useState([])

    const [Lists, setLists] = useState([])
    const [sendbyme, setsendbyme] = useState([])
    const onpress1 = async () =>{
        setinbox(true);
        setoutbox(false);
        setconnection(false);
        setfind(false)

        setclr1(colors.Charcole);
        setclr4(colors.white);
        setclr2(colors.white);
        setclr3(colors.white);
    }
    const onpress2 = async () =>{
        setoutbox(true);
        setinbox(false);
        setconnection(false);
        setfind(false)

        setclr2(colors.Charcole);
        setclr3(colors.white);
        setclr4(colors.white);
        setclr1(colors.white);
    }
    const onpress3 = async () =>{
        setconnection(true);
        setoutbox(false);
        setinbox(false);
        setfind(false)

        setclr3(colors.Charcole);
        setclr2(colors.white);
        setclr1(colors.white);
        setclr4(colors.white);

    }
    const onpress4 = async () =>{
        setconnection(false);
        setoutbox(false);
        setinbox(false);
        setfind(true);

        setclr4(colors.Charcole);
        setclr2(colors.white);
        setclr1(colors.white);
        setclr3(colors.white);

    }
    const getmyconnection = async () =>{
       
        const uid =await  AsyncStorage.getItem("u_id");
         
        var formdata = new FormData();

        formdata.append("act", "connectionacceptedlist");
        formdata.append("member_id", uid);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    setconnectiondata(responseJson.data);
                }else{
                   // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
          
            
        }
    
    const getmydata = async () =>{
       
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();

        formdata.append("act", "connectionlist");
        formdata.append("member_id", uid);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                  setLists(responseJson.data);
                }else{
                 //   ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
          
            
        }
        const reqisend = async () =>{
       
            const uid =await  AsyncStorage.getItem("u_id");
             
            var formdata = new FormData();
    
            formdata.append("act", "connectionlistbyme");
            formdata.append("share_with_my_connection", uid);
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
                        setsendbyme(responseJson.data);
                    }else{
                        ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    }
          
              })
              
                
            }
            const sharecontact1 = async (e) =>{
             
                var formdata = new FormData();
        
                formdata.append("act", "share_contact");
                formdata.append("connect_id", e.connect_id);
                formdata.append("member_id", e.member_id);
                var requestOptions = {
                    method: 'POST',
                    body: formdata,
                  };
                  fetch(config.serverURL, requestOptions)
                  .then(response => response.json())
                    .then(responseJson =>{
                        if(responseJson.status == 1){
                            ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                            getmyconnection();
                            getmydata();
                            reqisend();
                        }else{
                            ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                        }
                  })
                  getmydata();
                    
                }
                const sharecontact2 = async (e) =>{
             
                    var formdata = new FormData();
            
                    formdata.append("act", "share_contact");
                    formdata.append("connect_id", e.connect_id);
                    formdata.append("share_with_my_connection_id", e.share_with_my_connection);
                    var requestOptions = {
                        method: 'POST',
                        body: formdata,
                      };
                      fetch(config.serverURL, requestOptions)
                      .then(response => response.json())
                        .then(responseJson =>{
                            if(responseJson.status == 1){
                                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                                getmyconnection();
                                getmydata();
                                reqisend();
        
                            }else{
                                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                            }
                      })
                      getmydata();
                        
                    }
        const sendstatus = async (e) =>{
             
            var formdata = new FormData();
    
            formdata.append("act", "connection_accept_reject");
            formdata.append("conection_id", e.id);
            formdata.append("status", e.status);
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
                        ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                        getmyconnection();
                        getmydata();
                        reqisend();

                    }else{
                        ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    }
              })
              getmydata();
                
            }
  const getdatauser = async () =>{
      const u_img =  await AsyncStorage.getItem('u_img');
      setimage(u_img);
  } 
    const search = async (e) => {
        const uid =await  AsyncStorage.getItem("u_id");

        var formdata = new FormData();
        formdata.append("act", "search");
        formdata.append("member_name", e);
        formdata.append("user_id", uid);
   
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    let arr1 = responseJson.data.map((item,index)=>{
  
                        if (uid != item.member_id ) {
                          return {...item};
                        }
                    })
                    setList(arr1);
                  
                }else{
                }
      
          })
    }

      
     const connect = async () =>{
      const uid =await  AsyncStorage.getItem("u_id");

        setid(uid);
        var formdata = new FormData();
        formdata.append("act", "send_connection");
        formdata.append("member_id", uid);
        formdata.append("share_with_my_connection", id);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    setok(true);
                    reqisend();
                }
      
          })

     }

    const getdata = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        setid(uid);
    var formdata = new FormData();
    formdata.append("act", "member");
    formdata.append("user_id", uid);
    var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){
                let arr1 = responseJson.data.map((item,index)=>{
  
                            if (uid != item.member_id ) {
                              return {...item};
                            }
                        })
                setList(arr1);

            }else{
             //   ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
  
      })
        
    }
    useEffect(() => {
    navigation.addListener('focus',()=>{
        getmyconnection();
        getmydata();
        reqisend();
        getdatauser()
    
        })
    getdatauser();
    getdata();
    getmyconnection();
    getmydata();
    reqisend();
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
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Connect'})}  >
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
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(25)}}>
                                <Text style={style.hdr}>CONNECT</Text>
                                <TouchableOpacity  onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.cardheader1}>
                                <TouchableOpacity
                                onPress={()=>onpress4()}
                                >
                                <Text style={[style.typebutton,{backgroundColor: clr4 , color: find ? colors.white : colors.Charcole  }]}>Find</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>onpress1()} >
                                    <Text style={[style.typebutton,{backgroundColor: clr1 , color: inbox ? colors.white : colors.Charcole  }]}>Inbox</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                  onPress={()=>onpress2()}
                                >
                                    <Text style={[style.typebutton,{backgroundColor: clr2 , color: outbox ? colors.white : colors.Charcole  }]}>Outbox</Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>onpress3()}
                                >
                                    <Text style={[style.typebutton ,{backgroundColor: clr3 , color: connection ? colors.white : colors.Charcole  }]}>Connections</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.card}>
                        {/* <View style={style.cardheaderblb}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                     <Text style={style.cardheadertxt}>{'How it works!'}</Text> 
                                </TouchableOpacity>
                            </View> */}
                        {/* <View style={style.cardheader1}>
                                <TouchableOpacity
                                onPress={()=>onpress4()}
                                >
                                <Text style={[style.typebutton,{backgroundColor: clr4 , color: find ? colors.white : colors.Charcole  }]}>Find</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>onpress1()} >
                                    <Text style={[style.typebutton,{backgroundColor: clr1 , color: inbox ? colors.white : colors.Charcole  }]}>Inbox</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                  onPress={()=>onpress2()}
                                >
                                    <Text style={[style.typebutton,{backgroundColor: clr2 , color: outbox ? colors.white : colors.Charcole  }]}>Outbox</Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>onpress3()}
                                >
                                    <Text style={[style.typebutton ,{backgroundColor: clr3 , color: connection ? colors.white : colors.Charcole  }]}>Connections</Text>
                                </TouchableOpacity>
                            </View> */}
                            { find ? (
                                <View>
                                <View style={style.cardheader}>
                                  <TextInput style={style.searchbar} placeholderTextColor={colors.Charcole} placeholder='Search by Name/Location ...'
                                    onChangeText={(itemValue) => {  search(itemValue) }}
                                  />
                                </View>
                                <FlatList
          data={List}
          style={{
              marginBottom:moderateScale(300)
          }}
          
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
                <View>
              

                <TouchableOpacity onPress={()=> navigation.navigate('UserProfile',{'item':item,'path':'Connect'})} style={style.cardlist}>
                    <View style={style.round}> 
                    <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                        source={{uri: config.fileserver+item.member_img}}
                    />   
                    </View>
                    <Text style={style.cardtxt1}  numberOfLines={1}>{item.member_name}</Text>
                    <Text style={style.cardtxt1add}  numberOfLines={1}>{item.member_address}</Text>
                  
                        <TouchableOpacity 
                        onPress={()=>{
                          setsetid(item.member_id)
                          setshowAlert(true)}}
                        style={style.cardtxt}>
                            <Text style={style.cardtxt2}>{'Connect'}</Text>
                        </TouchableOpacity>
                        <AwesomeAlert
                                    show={showAlert}
                                    showProgress={false}
                                    title="Alert"
                                    message="do you want to send connection request?"
                                    closeOnTouchOutside={false}
                                    closeOnHardwareBackPress={false}
                                    showCancelButton={true}
                                    showConfirmButton={true}
                                    cancelText="No"
                                    confirmText="Yes"
                                    messageStyle={{color:'#4B4E4F' }}
                                    titleStyle={{color:'#4B4E4F'}}
                                    confirmButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                                    cancelButtonStyle={{width:moderateScale(100)}}
                                    confirmButtonStyle={{width:moderateScale(100)}}
                                    cancelButtonTextStyle={{color:'#FFFFFF',alignSelf:'center'}}
                                    cancelButtonColor='#928F8D'
                                    confirmButtonColor={colors.Golden}
                                    onCancelPressed={() => {
                                        setshowAlert(false)
                                    }}
                                    onConfirmPressed={() => {
                                        connect()
                                        setshowAlert(false)

                                    }}
                                    />
                    <AwesomeAlert
                    show={showok}
                    showProgress={false}
                    title="Alert"
                    message="connection request sent successfully"
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
                        getdata();
                    }}
                    />
                   
                </TouchableOpacity>
            
            </View>
           )}
           />
                                </View>
                            ) : null }
                            
                            { outbox ? (
                            <FlatList
                            style={{marginBottom:355,marginTop:moderateScale(35)}}
                            bounces={false}
                            data={sendbyme}
                            listKey={item => item.toString()}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                                <View >
                                <View style={style.cardlist}>
                                    <View style={style.round}>
                                    <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                        source={{uri: config.fileserver+item.connection_img}}
                                    />   
                                    </View>
                                    <Text style={style.cardtxt1}  numberOfLines={1}>{item.connection_name}</Text>
                                    { item.mag_request == '' ? null : (
                                    <Text style={style.cardtxt1}  >{item.mag_request}</Text>
                                    )}
                                        <TouchableOpacity style={[style.cardtxt,{marginBottom:6}]}>
                                            <Text style={[style.cardtxt23]}>{'Pending'}</Text>
                                        </TouchableOpacity>
                                </View>
                        </View>
                            )}
                            />
                    ) : null } 
                      { inbox ? (
        <FlatList
        style={{marginBottom:355,marginTop:moderateScale(35)}}
        bounces={false}
        data={Lists}
        listKey={item => item.toString()}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
            <View >
            <View style={style.cardlist}>
                 <View style={style.round}>
                 <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                     source={{uri: config.fileserver+item.connection_img}}
                 />   
                 </View>
                 <Text style={style.cardtxt1}  numberOfLines={1}>{item.connection_name}</Text>
                    <TouchableOpacity 
                     onPress={()=>sendstatus({"status":1,'id':item.connect_id})}

                    style={[style.cardtxt,{borderColor:colors.green,marginBottom:6}]}>
                        <Text style={[style.cardtxt2]}>{'Accept'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPress={()=>sendstatus({"status":2,'id':item.connect_id})}
                     style={[style.cardtxt,{borderColor:colors.red}]}>
                         <Text style={style.cardtxt2}>{'Reject'}</Text>
                     </TouchableOpacity>
              

                

             </View>

       
       </View>

         )}
        />
                    ) : null } 
                     { connection ? (
                        <FlatList
                        style={{marginBottom:355,marginTop:moderateScale(35)}}
      bounces={false}
      data={connectiondata}
      listKey={item => item.toString()}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View >
                  <View style={style.cardlist}>
                  <View style={style.round}>
                  <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                      source={{uri: config.fileserver+item.userdata.member_img}}
                  />   
                  </View>
                  <Text style={style.cardtxt1}  numberOfLines={1}>{item.userdata.member_name}</Text>
                  { item.member_id == userid ? 

                   (
                       <View>
                          { item.is_share_member_id == 1 ? (

                          <Text style={style.cardtxt1add}  >{item.userdata.member_mob}</Text>

                          ): (

                              <Text style={style.cardtxt1add}  >{'User does not share contact'}</Text>
  
                              ) }
                       </View>
                    )
                   :
                   (
                      <View>
                          { item.is_share_share_with_my_connection == 1 ? (

                          <Text style={style.cardtxt1add}  >{item.userdata.member_mob}</Text>

                          ): (

                              <Text style={style.cardtxt1add}  >{'User does not share contact'}</Text>
  
                              ) }
                       </View>  
                   )
                  }

                  { item.member_id == userid ? 
                      <View>
                          { item.is_share_share_with_my_connection == 1 ? (
                               <TouchableOpacity 
                               style={[style.cardtxt,{borderColor:colors.green}]}>
                                   <Text style={[style.cardtxt2]}>{'Already share'}</Text>
                               </TouchableOpacity>
                          ) : (
                              <TouchableOpacity 
                              onPress={()=>sharecontact1({"connect_id":item.connect_id,"member_id":item.member_id})}
                              style={[style.cardtxt,{borderColor:colors.Golden}]}>
                                  <Text style={[style.cardtxt2]}>{'Share contact'}</Text>
                              </TouchableOpacity>
                          )}
                         
                      </View>
                     
                  :
                  <View>
                  { item.is_share_member_id == 1 ? (
                      <TouchableOpacity 
                      style={[style.cardtxt,{borderColor:colors.green}]}>
                          <Text style={style.cardtxt2}>{'Already share'}</Text>
                      </TouchableOpacity>
                  ) : (
                      <TouchableOpacity 
                      onPress={()=>sharecontact2({"connect_id":item.connect_id,"share_with_my_connection":item.share_with_my_connection})}
                      style={[style.cardtxt,{borderColor:colors.Golden}]}>
                          <Text style={style.cardtxt2}>{'Share contact'}</Text>
                      </TouchableOpacity> 
                  )}
                  </View>
                  }
                  </View>
                  </View>

                  )}
                  />
                  ) : null }  
                            
                        </View>
                        
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}