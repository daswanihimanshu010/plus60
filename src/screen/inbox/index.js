import React, {useState, useEffect} from 'react';
import {ToastAndroid, View,Text, Image, StatusBar,TouchableOpacity,TextInput,FlatList} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Connect({navigation,route}) {
    const [inbox, setinbox] = useState(false);
    const [outbox, setoutbox] = useState( route.params.path != 'inbox' ? true : false);
    const [connection, setconnection] = useState( route.params.path == 'inbox' ? true : false );

    const [userid, setuserid] = useState('');

    const [clr1, setclr1] = useState('#C5C5C5');
    const [clr2, setclr2] = useState(route.params.path != 'inbox' ? colors.Charcole : '#C5C5C5');
    const [clr3, setclr3] =  useState(route.params.path == 'inbox' ? colors.Charcole : '#C5C5C5' );
    const [image, setimage] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }

    const [List, setList] = useState([])
    const [sendbyme, setsendbyme] = useState([])
    const onpress1 = async () =>{
        setinbox(true);
        setoutbox(false);

        setconnection(false);

        setclr1(colors.Charcole);
        setclr2('#C5C5C5');
        setclr3('#C5C5C5');
    }
    const onpress2 = async () =>{
        setoutbox(true);
        setinbox(false);
        setconnection(false);

        setclr2(colors.Charcole);
        setclr3('#C5C5C5');
        setclr1('#C5C5C5');
    }
    const onpress3 = async () =>{
        setconnection(true);
        setoutbox(false);
        setinbox(false);

        setclr3(colors.Charcole);
        setclr2('#C5C5C5');
        setclr1('#C5C5C5');

    }
    const [connectiondata, setconnectiondata] = useState([])

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
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
          
            
        }
    
    const getmydata = async () =>{
       
        const uid =await  AsyncStorage.getItem("u_id");
        setuserid(uid);
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
                  setList(responseJson.data);
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
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

         useEffect(() => {
            
            getmyconnection();
            getmydata();
            reqisend();
            getdatauser()
            navigation.addListener('focus',()=>{
                getmyconnection();
                getmydata();
                reqisend();
                getdatauser()
            
               })
           }, [navigation]);
      
      
    
    return(
        <View style={style.viewStyle}>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>
                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity  onPress={()=> navigation.navigate(route.params.path)} >
                                <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                            </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Inbox'})}  >
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
                            <Text style={style.hdr}>INBOX</Text>
                        </View>
                        <View style={style.card}>
                            
                            <View style={style.cardheader}>
                                  <TextInput style={style.searchbar} placeholderTextColor='#7C7979' placeholder='Search by #tag, Name, Location, etc..' />
                            </View>
                            <View style={style.cardheader1}>
                                <TouchableOpacity
                                onPress={()=>onpress1()}
                                >
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
                            { outbox ? (
                            <FlatList
                            style={{marginBottom:55}}
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
        style={{marginBottom:55}}
        bounces={false}
        data={List}
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
                          style={{marginBottom:55}}
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
                                     <Text style={[style.cardtxt2]}>{'Already Share'}</Text>
                                 </TouchableOpacity>
                            ) : (
                                <TouchableOpacity 
                                onPress={()=>sharecontact1({"connect_id":item.connect_id,"member_id":item.member_id})}
                                style={[style.cardtxt,{borderColor:colors.Golden}]}>
                                    <Text style={[style.cardtxt2]}>{'Share Contact'}</Text>
                                </TouchableOpacity>
                            )}
                           
                        </View>
                       
                    :
                    <View>
                    { item.is_share_member_id == 1 ? (
                        <TouchableOpacity 
                        style={[style.cardtxt,{borderColor:colors.green}]}>
                            <Text style={style.cardtxt2}>{'Already Share'}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity 
                        onPress={()=>sharecontact2({"connect_id":item.connect_id,"share_with_my_connection":item.share_with_my_connection})}
                        style={[style.cardtxt,{borderColor:colors.Golden}]}>
                            <Text style={style.cardtxt2}>{'Share Contact'}</Text>
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
        </View>
    )
}