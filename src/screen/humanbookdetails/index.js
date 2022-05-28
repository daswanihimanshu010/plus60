import React, {useRef, useState,useEffect} from 'react';
import {ToastAndroid, View,Text, Image, TextInput,StatusBar,FlatList,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VideoPlayer from 'react-native-video-controls';
import config from '../../server/config';
import { moderateScale } from 'react-native-size-matters';
import moment from 'moment';
import BottamTab from '../../component/BottamTab';

export default function Humanbook({navigation,route}) {
    const [comment, setcomment] = useState('');
    const [reply, setreply] = useState('');
    const [commentid, setcommentid] = useState('');
    const [totalcomment, settotalcomment] = useState(0);
    const [totallike, settotallike] = useState(0);
    const [hbraiting, sethbraiting] = useState([]);
    const [listcomment, setlistcomment] = useState([]);
    const [iscomment, setiscomment] = useState(true);
    const [fav, setfav] = useState(false);
    const [likes, setlike] = useState(false);
    const [des, showdes] = useState(false);
    const favouriteremove = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "humanbook_favourite_history_remove");
        formdata.append("member_id", uid);
        formdata.append("human_book_id", route.params.item.hb_id);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    setfav(false)
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
      
            
        }
        const likeremove = async () =>{
            const uid =await  AsyncStorage.getItem("u_id");
            var formdata = new FormData();
            formdata.append("act", "humanbook_like_history_remove");
            formdata.append("member_id", uid);
            formdata.append("human_book_id", route.params.item.hb_id);
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
                        setlike(false);
                        getlikes();

                        ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
    
                    }else{
                        ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    }
              })
          
                
            }
    const like = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "humanbook_lik_rating");
        formdata.append("member_id", uid);
        formdata.append("human_book_id", route.params.item.hb_id);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    getlike()
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
        
            })
    
        }
        const raiting = async (e) =>{
            const uid =await  AsyncStorage.getItem("u_id");
            var formdata = new FormData();
            formdata.append("act", "humanbook_rating");
            formdata.append("member_id", uid);
            formdata.append("hb_id", route.params.item.hb_id);
            formdata.append("hb_raiting", e);
            var requestOptions = {
                method: 'POST',
                body: formdata,
                };
                fetch(config.serverURL, requestOptions)
                .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
                        ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                        getraiting();
    
                    }else{
                      //  ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    }
            
                })
        
            }
    const getraiting = async () =>{
            const uid =await  AsyncStorage.getItem("u_id");
            var formdata = new FormData();
            formdata.append("act", "get_humanbook_rating");
            formdata.append("member_id", uid);
            formdata.append("hb_id", route.params.item.hb_id);
            
            var requestOptions = {
                method: 'POST',
                body: formdata,
                };
                fetch(config.serverURL, requestOptions)
                .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
                            var leftraiting = 5 - responseJson.data[0].hb_raiting ;
                           var myObjArray = [];
                            for(let i = 1; i <= responseJson.data[0].hb_raiting; i++){
                                    myObjArray.push({israiting: false, value: i});
                            }
                            for(let i = responseJson.data[0].hb_raiting ; i <= 5; i++){
                                var isfound = false;

                                myObjArray.map((item,index)=>{
                                    if(i == item.value){
                                        isfound = true;
                                    }
                                    
                                  })
                                  if(!isfound){
                                    myObjArray.push({israiting: true, value: i});
                                    }
                            }
                    }else{
                        var myObjArray = [];

                        for(let i = 1; i <= 5; i++){
                            myObjArray.push({israiting: true, value: i});
                            }
                    }

                    sethbraiting(myObjArray)

            
                })
        
            }
    const favourite = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "humanbook_favourite");
        formdata.append("member_id", uid);
        formdata.append("human_book_id", route.params.item.hb_id);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    getfav()
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
      
          })
    
        }
    const getfav = async () =>{
    const uid =await  AsyncStorage.getItem("u_id");
       
        var formdata = new FormData();
      
        formdata.append("act", "humanbook_favourite_history");
        formdata.append("member_id", uid);
      
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                responseJson.data.map((item,index)=>{
                    if( item.human_book_id == route.params.item.hb_id && item.member_id == uid ){
                        setfav(true)
                    }
                  })

          })
    
    }
    const getlike = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
            var formdata = new FormData();
            formdata.append("act", "humanbook_like_history");
            formdata.append("member_id", uid);
          
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                    responseJson.data.map((item,index)=>{
                        if( item.human_book_id == route.params.item.hb_id && item.member_id == uid ){
                            setlike(true);
                            getlikes();
                        }
                      })
    
              })
        
        }
        const getlikes = async () =>{
       
            var formdata = new FormData();
          
            formdata.append("human_book_id", route.params.item.hb_id);
           
            formdata.append("act",'humanbooklikecount');
          
            var requestOptions = {
                method: 'POST',
                body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
                .then(responseJson =>{
                    if(responseJson.status == 1){
                        var countQ = Object.keys(responseJson.data).length;
                        settotallike(countQ);
                    }else{
                        settotallike(0);

                    }
        
              })
        
        }
    const getcomment = async () =>{
       
        var formdata = new FormData();
      
        formdata.append("hb_id", route.params.item.hb_id);
       
        formdata.append("act",'humanbookcomment');
      
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                
                if(responseJson.status == 1){
                    setlistcomment(responseJson.data)
                    var countQ = Object.keys(responseJson.data).length;
                    settotalcomment(countQ)
    
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
    
          })
    
    }
    const submitdatarep = async () =>{
        if(!fav){
            favourite()
        }
        const uid =await  AsyncStorage.getItem("u_id");
       
        if (!reply.trim()) {
          return;
        }
       
        var formdata = new FormData();
      
        formdata.append("comment_id", commentid);
        formdata.append("reply", reply);
        formdata.append("member_id",uid);
        formdata.append("act",'addhumanbookreply');
      
  
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
               
                if(responseJson.status == 1){
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    setiscomment(!iscomment);
                    getcomment();
                    setreply('');
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }    
    
          })
    
    }
    const submitdata = async () =>{
        if(!fav){
            favourite()
        }
      const uid =await  AsyncStorage.getItem("u_id");
     
      if (!comment.trim()) {
        return;
      }
     
      var formdata = new FormData();
    
      formdata.append("hb_id", route.params.item.hb_id);
      formdata.append("hbc_comment", comment);
      formdata.append("member_id",uid);
      formdata.append("act",'addhumanbookcomment');
    
          

      var requestOptions = {
          method: 'POST',
          body: formdata,
        };
        fetch(config.serverURL, requestOptions)
        .then(response => response.json())
          .then(responseJson =>{
             
              if(responseJson.status == 1){
                  ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                  getcomment();
                  setcomment('')
  
              }else{
                  ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
              }    
  
        })
  
  }
  const player = useRef();
    useEffect(() => {
        getraiting();
        getfav();
        getlike();
        getcomment();
        getlikes();
       }, [navigation]); 
return(
    <View style={style.viewStyle}>
        <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
            <SafeAreaView style={{flex:1}}>
                <View style={style.header}>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Humanbook')} >
                        <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                    </TouchableOpacity>
                    <Text style={style.headertitle}>{route.params.item.hb_name}</Text>
                </View> 
                <View style={style.videosec}>
                    {/* <Video
                        source={ { uri : config.fileserver+route.params.item.video}  }
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='contain'
                        controls={true}
                        ref={player}
                        onLoad={() => { uri : config.fileserver+route.params.item.hb_file_name}}
                    /> */}
                    <VideoPlayer
                    paused={true}
                    source={ { uri : config.fileserver+route.params.item.video}  }
                    disableBack
                    
                    // onEnterFullscreen={()=>
                    //     navigation.navigate('Fullscreen',{'url':route.params.item.video})
                    // }
                  
                    //   navigator={this.props.navigator}
                  
                    />
                </View>  
                <View style={style.likesec}>
                    {likes ? (
                        <TouchableOpacity onPress={()=>likeremove()}>
                        <AntDesign name='like1' color={colors.red}  size={moderateScale(25)} />
                        <Text style={style.detailssectxt}>{totallike}</Text>
                    </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={()=>like()}>
                        <AntDesign name='like2' color={colors.Golden}  size={moderateScale(25)} />
                        <Text style={style.detailssectxt}>{totallike}</Text>
                    </TouchableOpacity>
                    )}
                    
                    <View>
                        <FontAwesome name='comment-o' color={colors.Golden}  size={moderateScale(25)} />
                        <Text style={style.detailssectxt}>{totalcomment}</Text>
                    </View>
                    {fav ? (
                        <TouchableOpacity  onPress={()=>favouriteremove()}  >
                            <AntDesign name='heart'  color={colors.red}  size={moderateScale(25)}/> 
                        </TouchableOpacity>

                    ) : (
                        <TouchableOpacity   onPress={()=>favourite()} >
                            <AntDesign name='hearto'  color={colors.Golden}  size={moderateScale(25)}/> 
                        </TouchableOpacity>
                    )}

                </View> 
                    <View style={style.cardraiting}>

                    <FlatList
                            horizontal={true}
                            data={hbraiting}
                            listKey={item => item.toString()}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                                <View>
                                    <TouchableOpacity style={{paddingHorizontal:moderateScale(5)}} onPress={()=>raiting(item.value)}>
                                        <AntDesign name={item.israiting ? 'staro' : 'star'}  color={item.israiting ? colors.Golden : colors.red }  size={moderateScale(20)}/> 
                                    </TouchableOpacity>
                                </View>
                            
                     )}
                     />
                        
                    </View>
                <View style={style.detailssec1}>

                    <TouchableOpacity onPress={()=> showdes(!des) } style={{flexDirection:'row',justifyContent:'space-between'}}>
                    {des ? (
                        <Text style={style.detailssectxt} > Show Less </Text>
                     ) : (
                        <Text style={style.detailssectxt} > Show More </Text>
                     )}

                        {des ? ( 
                        <AntDesign name='caretup'  color={colors.green}  size={moderateScale(20)}/> 

                        ) : (
                        <AntDesign name='caretdown'  color={colors.Golden}  size={moderateScale(20)}/> 

                        ) }
                    </TouchableOpacity>
                </View>
                
                {des ? ( 
                    <View style={style.detailssec}>
                        <TouchableOpacity  onPress={()=> navigation.navigate('UserProfile',{'item':route.params.item,'path':'Humanbook'})} style={{flexDirection:'row'}}>
                            {/* <Text style={style.detailssectxt}>{'Member name:'}</Text> */}
                             <View style={style.mmrdp}>
                                    <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                    source={{uri: config.fileserver+route.params.item.member_img}}
                                    /> 
                             </View>
                            <Text style={style.detailssectxt}>{route.params.item.member_name}</Text>
                        </TouchableOpacity>
                        <Text style={style.detailssectxt}>{route.params.item.hb_language}</Text>

                    </View> 
                ) : null }
                { iscomment ? (
                     <View style={style.commentsec}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{justifyContent:'center'}}>
                             <Feather name='smile'  color={colors.Charcole}  size={moderateScale(25)}/> 
                         </View>
                         <View>
                            <TextInput multiline value={comment} style={style.searchbar} placeholderTextColor={colors.Charcole} placeholder='Interact...'
                                onChangeText={(comment) =>
                                setcomment(comment)}
                            />
                         </View>
                         
                     </View>
                     <TouchableOpacity onPress={()=>submitdata(route.params.item.hbc_id)} style={{justifyContent:'center'}}>
                         <Text style={style.commentspost}>{'Post'}</Text>
                     </TouchableOpacity>
                 </View>
                ) : (
                    <View style={style.commentsec}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>
                                <Feather name='smile'  color={colors.Charcole}  size={moderateScale(25)}/> 
                            </View>
                                <TextInput multiline value={reply} style={style.searchbar} placeholderTextColor={colors.Charcole} placeholder='Reply...'
                                    onChangeText={(reply) =>
                                        setreply(reply)}
                                    />
                    </View>
                    
                    <TouchableOpacity onPress={()=>submitdatarep()} style={{justifyContent:'center'}}>
                        <Text style={style.commentspost}>{'Reply'}</Text>
                    </TouchableOpacity>
                 </View>
                ) }
               
                <FlatList
                        horizontal={false}
                        data={listcomment}
                        listKey={item => item.toString()}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => (
                            <View style={style.comments}>
                            <View> 
                                <View style={style.pic}>
                                    { item.member_img == '' ? (
                                <Feather name='user'  color={colors.Charcole}  size={moderateScale(25)}/> 
                                            
                                    ) : (
                            <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                                source={{uri: config.fileserver+item.member_img}}
                                                /> 
                                    )}
                                    
                                </View>
                            </View>
                    <View style={{flex:1}}>
                        <Text  style={style.commentstxtname}>{item.member_name} . {moment(item.hbc_comment_time, "YYYY-MM-DD hh:mm:ss").fromNow()}</Text>
                        <Text style={style.commentstxt}>{item.hbc_comment}</Text>
                        <TouchableOpacity onPress={()=> 
                            {setiscomment(!iscomment)
                                setcommentid(item.hbc_id)
                            }
                            } style={{alignSelf:'flex-end'}} > 
                            <Text style={[style.commentstxt,{color:colors.Golden}]}>Reply</Text>
                        </TouchableOpacity>
                          
                       

                                { item.reply != 'undefined' ? ( 
                                    
                                    <FlatList
                                    style={{marginTop:moderateScale(8)}}
                                    data={item.reply}
                                    renderItem={({  item: innerItem ,index }) => (
                                        
                                        <View style={style.commentsre}>
                                        <View> 
                                            <View style={style.pic}>
                                                { innerItem.member_img == '' ? (
                                            <Feather name='user'  color={colors.Charcole}  size={moderateScale(25)}/> 
                                                        
                                                ) : (
                                            <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                                            source={{uri: config.fileserver+innerItem.member_img}}
                                                            /> 
                                                )}
                                             
                                            </View>
                                        </View>
                                     <View style={{flex:1}}>
                                <Text  style={style.commentstxtname}>{innerItem.member_name} . {moment(innerItem.date_time, "YYYY-MM-DD hh:mm:ss").fromNow()}</Text>
                                <Text style={style.commentstxt}>{innerItem.reply}</Text>

                                        </View>
                                        </View>  
                                    )}
                                    keyExtractor={(innerItem) => innerItem.id}
                                  />
                                   
                                ) : null }
                       
                    </View>
                </View>   

                    )}
                    />
                    
                                 
            </SafeAreaView>
            <BottamTab item={route} navigation={navigation} /> 

    </View>
)

}