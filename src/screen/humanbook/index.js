import React, {useState, useEffect} from 'react';
import {ToastAndroid, View,Text, Image, TextInput,StatusBar,FlatList,Modal,Button} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottamTab from '../../component/BottamTab';

import config from '../../server/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';

export default function Humanbook({navigation,route}) {
    const [showModal, setShowModal] = useState(false);
    const [showModalmsg, setShowModalmsg] = useState(false);
    const [msg, setmsg] = useState('Your life lessons are no less than chapters of a book! Express yourself by recording videos and let others take inspiration from them while you may seek clues from other Human Books! Afterall, Sharing is Caring!');
    const [uname, setuname] = useState('');
    const [inbox, setinbox] = useState(true);
    const [outbox, setoutbox] = useState(false);
    const [connection, setconnection] = useState(false);
    const [List, setList] = useState([]);
    const [clr1, setclr1] = useState(colors.Charcole);
    const [clr2, setclr2] = useState(colors.white);
    const [clr3, setclr3] = useState(colors.white);
    const [image, setimage] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }
    const onpress1 = async () =>{
        setinbox(true);
        setoutbox(false);
        setconnection(false);

        setclr1(colors.Charcole);
        setclr2(colors.white);
        setclr3(colors.white);
    }
    const onpress2 = async () =>{
        setoutbox(true);
        setinbox(false);
        setconnection(false);


        setclr2(colors.Charcole);
        setclr3(colors.white);
        setclr1(colors.white);
    }
    const onpress3 = async () =>{
        setconnection(true);
        setoutbox(false);
        setinbox(false);

        setclr3(colors.Charcole);
        setclr2(colors.white);
        setclr1(colors.white);

    }
    const [showpopup, setshowpopup] = useState(false);

        const showAlert = async () =>{
        setshowpopup(true)
        };
     
        const favouriteremove = async (e) =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "humanbook_favourite_history_remove");
        formdata.append("member_id", uid);
        formdata.append("human_book_id", e);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    getdata();
                    gethbsearch();
                   // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

                }
      
          })
      
            
        }
    const favourite = async (e) =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "humanbook_favourite");
        formdata.append("member_id", uid);
        formdata.append("human_book_id", e);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    getdata();
                    gethbsearch();

                 //   ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

                }else{
                   // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
    
        }
        const [Listsearch, setListsearch] = useState([]);
    const search = async (e) => {
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "hb_search");
        formdata.append("hb_name", e);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                        
                let arr = responseJson.data.map((item,index)=>{
                    item.isfav = false
                    return {...item};
                  })
                  setListsearch(arr);
    
                    formdata.append("act", "humanbook_favourite_history");
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
                                      if (item.hb_id == product.human_book_id) {
                                        item.isfav = true;
                                      }
                                    });
                                    return {...item};
                                  })
                                  
        
                                  setListsearch(arr1);
                            }
                  
                      })  
    
    
                }else{
               //     ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
    }
        
        const gethbsearch = async () =>{
            const uid =await  AsyncStorage.getItem("u_id");
            var formdata = new FormData();
            formdata.append("act", "hb_search");
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
        
        
                        
                    let arr = responseJson.data.map((item,index)=>{
                        item.isfav = false
                        return {...item};
                      })
                      setListsearch(arr);
        
                        formdata.append("act", "humanbook_favourite_history");
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
                                          if (item.hb_id == product.human_book_id) {
                                            item.isfav = true;
                                          }
                                        });
                                        return {...item};
                                      })
                                      
            
                                      setListsearch(arr1);
                                }
                      
                          })  
        
        
                    }
          
              })
          
                
            }
    const getdata = async () =>{
    const uid =await  AsyncStorage.getItem("u_id");
    setuname(uid);    
    var formdata = new FormData();
    formdata.append("act", "humanbooklist");
    var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){


                
            let arr = responseJson.data.map((item,index)=>{
                item.isfav = false
                return {...item};
              })
                setList(arr);

                formdata.append("act", "humanbook_favourite_history");
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
                                  if (item.hb_id == product.human_book_id) {
                                    item.isfav = true;
                                  }
                                });
                                return {...item};
                              })
                              
    
                               setList(arr1);
                        }
              
                  })  


            }else{
              //  ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
  
      })
  
        
    }
  useEffect(() => {
    navigation.addListener('focus',()=>{
        getdata();
        gethbsearch();
        getdatauser();
       })
        getdata();
        getdatauser();
        gethbsearch();
    }, [navigation]);
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
                <Text style={style.modaltitle}>{'Tips'}</Text>
                <Text style={style.modalsubtitle}>{'1. Once you press SStart button, make sure your video covers your face and you do Voice Check.'}</Text>
                <Text style={style.modalsubtitle}>{'2. Prepare the script or points in advance before you record for better impact.'}</Text>
                <Text style={style.modalsubtitle}>{'3. Anything more than 10 minutes may not be impactful, hence stick to a 10-minute restriction.'}</Text>
                <Text style={style.modalsubtitle}>{'4. Mention your name, current location & about your career - 1 min.'}</Text>
                <Text style={style.modalsubtitle}>{'5. Talk about Title of story, topic you want to cover and how old is the story - 2 min.'}</Text>
                <Text style={style.modalsubtitle}>{'6. Actual story - 5 min.'}</Text>
                <Text style={[style.modalsubtitle ,{marginBottom:moderateScale(15)}]}>{'7. Talk about what is your learning, how this experience had a positive impact on you - 2 min.'}</Text>
              
                <Button 
                color={colors.Golden}
                
                title='OK'
                onPress={()=>setShowModal(!showModal)}
                />
            </View>
         </View>

       </Modal>
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
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Humanbook'})}  >
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
                                <Text style={style.hdr}>HUMAN BOOK</Text>
                                <TouchableOpacity  onPress={()=>setShowModalmsg(!showModalmsg)} >
                                        <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.cardheader1}>
                                <TouchableOpacity
                                onPress={()=>onpress1()}
                                >
                                <Text style={[style.typebutton,{backgroundColor: clr1,color: inbox ? colors.white : colors.Charcole  }]}>BookShelf</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>onpress2()}
                                >
                                <Text style={[style.typebutton,{backgroundColor: clr2 ,color: outbox ? colors.white : colors.Charcole  }]}>Your Story</Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>onpress3()}
                                >
                                <Text style={[style.typebutton ,{backgroundColor: clr3 ,color: connection ? colors.white : colors.Charcole  }]}>Favorites</Text>

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
                                onPress={()=>onpress1()}
                                >
                                <Text style={[style.typebutton,{backgroundColor: clr1,color: inbox ? colors.white : colors.Charcole  }]}>BookShelf</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>onpress2()}
                                >
                                <Text style={[style.typebutton,{backgroundColor: clr2 ,color: outbox ? colors.white : colors.Charcole  }]}>Your Story</Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>onpress3()}
                                >
                                <Text style={[style.typebutton ,{backgroundColor: clr3 ,color: connection ? colors.white : colors.Charcole  }]}>Favorites</Text>

                                </TouchableOpacity>
                            </View> */}
                            {outbox ? (
                                <View style={style.cardheader}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                onPress={()=>setShowModal(!showModal)}
                                >
                                
                                <Ionicons name='bulb-outline' size={25} style={style.iconf} />
                                <Text style={style.cardheadertxt}>{'Tips how it works!'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  style={{flexDirection:'row'}}  onPress={()=> navigation.navigate('Humanbookcreate') }  >
                                    <Text style={style.cardheadertxt}>{'Add Video '}</Text>
                                    <MaterialIcons name='add-a-photo' style={{color:colors.orange}} size={moderateScale(25)}  /> 
                                </TouchableOpacity>
                            </View>
                            ) : null}
                            
                            {inbox ? (
                                <View style={style.cardheadersearch}>
                                    <TextInput style={style.searchbar} placeholderTextColor={colors.Charcole} placeholder='Search by Topic/Language/Member'
                                    onChangeText={(itemValue) => {  search(itemValue) }}
                                    />
                                </View>
                            ) : null }
                            
                            <FlatList
                            horizontal={false}
                            style={{marginBottom:moderateScale(210),marginTop: connection ? moderateScale(35) : moderateScale(0)}}
                            data={Listsearch}
                            listKey={item => item.toString()}
                            
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                                <View>
                                    { inbox ? (
                                        <View>
                                            { uname != item.member_id ? (

                                        <TouchableOpacity  onPress={()=> navigation.navigate('Humanbookdetails',{item})} style={style.cardlist}>
                                            <View style={style.roundstyle}>
                                                <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                                source={{uri: config.fileserver+item.hb_file_name}}
                                                />   
            
                                            </View>
                                            <View style={style.cardtxt}>
                                                <Text style={style.cardtxtstyle1} numberOfLines={1}>{item.hb_name}</Text>
                                                <TouchableOpacity onPress={()=> navigation.navigate('UserProfile',{'item':item,'path':'Humanbook'})}>
                                                    <Text style={style.cardtxtstyle2} >{item.member_name}</Text>
                                                </TouchableOpacity>
                                                <Text style={style.cardtxtstyle2lang} >{item.hb_language}</Text>
                                            </View>
                                            <View>
                                            { item.isfav ? (
                                                <TouchableOpacity
                                                onPress={()=>favouriteremove(item.hb_id)}
                                                >
                                                <AntDesign name='heart' size={moderateScale(25)} style={{color:colors.red}}/> 

                                                </TouchableOpacity>

                                            ) : (
                                                <TouchableOpacity
                                                onPress={()=>favourite(item.hb_id)}
                                                >
                                                    <AntDesign name='hearto' size={moderateScale(25)} style={{color:colors.Golden}}/> 
                                                </TouchableOpacity>
                                            ) }
                                           
                                           
                                            </View>
                                        </TouchableOpacity>
                                            ): null }
                                            </View>
                                    ) : null }
                                    { outbox ? (
                                        <View>
                                            { uname == item.member_id ? (
                                                <TouchableOpacity onPress={()=> navigation.navigate('Humanbookdetails',{item})} style={style.cardlist}>
                                                <View style={style.roundstyle}>
                                                    <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                                    source={{uri: config.fileserver+item.hb_file_name}}
                                                    />   
                
                                                </View>
                                                <View style={style.cardtxt}>
                                                    <Text style={style.cardtxtstyle1} numberOfLines={1}>{item.hb_name}</Text>
                                                    <Text style={style.cardtxtstyle2lang} >{item.hb_language}</Text>

                                                </View>
                                               
                                                </TouchableOpacity>
                                            ) : null }
                                            
                                        </View>

                                    ) : null }
                                    { connection ? (
                                        <View >
                                            { item.isfav ? (
                                                <TouchableOpacity onPress={()=> navigation.navigate('Humanbookdetails',{item})} style={style.cardlist}>
                                                    <View style={style.roundstyle}>
                                                        <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                                        source={{uri: config.fileserver+item.hb_file_name}}
                                                        />   
                                                </View>
                                                <View style={style.cardtxt}>
                                                    <Text style={style.cardtxtstyle1} numberOfLines={1}>{item.hb_name}</Text>
                                                    <TouchableOpacity onPress={()=> navigation.navigate('UserProfile',{'item':item,'path':'Humanbook'})}>
                                                        <Text style={style.cardtxtstyle2} >{item.member_name}</Text>
                                                    </TouchableOpacity>
                                                    <Text style={style.cardtxtstyle2lang} >{item.hb_language}</Text>
                                                </View>
                                                <View >
                                                <TouchableOpacity
                                                onPress={()=>favouriteremove(item.hb_id)}
                                                >
                                                <AntDesign name='heart' size={moderateScale(25)} style={{color:colors.red}}/> 

                                                </TouchableOpacity>
                
                                                </View>
                                                </TouchableOpacity>
                                            ) : null }
                                            
                                        </View>

                                    ) : null }
                                </View>
                            
                             )}
                             />
                            
                        </View>
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}