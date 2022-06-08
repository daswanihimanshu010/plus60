import React, {useState, useRef, useContext, useEffect} from 'react';
import {ToastAndroid, View,Text, Image,TextInput, StatusBar,FlatList,TouchableOpacity,Modal,Button,Switch} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import BottamTab from '../../component/BottamTab';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import Entypo from 'react-native-vector-icons/Entypo';
import { moderateScale } from 'react-native-size-matters';
 
export default function Programs({navigation,route}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [showdelete, setshowdelete] = useState(false);
    const [ineed_id, setineed_id] = useState('');
    const [data, setdata] = useState([]);
    const [showModalmsg, setShowModalmsg] = useState(false);
    const [msg, setmsg] = useState('Set up alerts for birthdays, anniversaries as well as your medicines and exercise! Plus60 will also automatically set up reminders of programs you are interested in.');
    const [image, setimage] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }
    const toggleSwitch = (e) =>{
   
        var formdata = new FormData();
        formdata.append("alert_status", e.status);
        formdata.append("id", e.id);
        
        formdata.append("act",'statusalert');

        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    getdata();

                }

            })
 
}
const deletealert = async () => {
    var formdata = new FormData();

    formdata.append("act", "delete_alert");
    formdata.append("id",ineed_id);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        };
        fetch(config.serverURL, requestOptions)
        .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                getdata();
                getdataneed();
            }else{
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
        })
  }
const isreapteSwitch = (e) =>{
   
    var formdata = new FormData();
    formdata.append("is_repeat", e.is_repeat);
    formdata.append("id", e.id);
    
    formdata.append("act",'isrepeatealert');

    var requestOptions = {
        method: 'POST',
        body: formdata,
        };
        fetch(config.serverURL, requestOptions)
        .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){
                getdata();

            }

        })

}

    const getdata = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("act", "getalert");
        formdata.append("member_id", uid);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    setdata(responseJson.data)
                }else{
                }
        })
    }

    const setweekdays = async (e) =>{
    var weekdays =    JSON.parse(e.weekdays)
     console.log('day',weekdays);
        const valueToRemove = e.day;
        var found = false;
        var ind = 0 ;
        weekdays.map((item,index)=>{
            if(item == valueToRemove){
              found = true;
              ind = index
            }
          })
      
          if(found){
            weekdays[ind] = 'NUN';
          }else{
            if( valueToRemove == 'SUN'){
                weekdays[0] = 'SUN';
            }
            if( valueToRemove == 'MON'){
                weekdays[1] = 'MON';
            }
            if( valueToRemove == 'TUE'){
                weekdays[2] = 'TUE';
            }
            if( valueToRemove == 'WED'){
                weekdays[3] = 'WED';
            }
            if( valueToRemove == 'THU'){
                weekdays[4] = 'THU';
            }
            if( valueToRemove == 'FRI'){
                weekdays[5] = 'FRI';
            }
            if( valueToRemove == 'SAT'){
                weekdays[6] = 'SAT';
            }
      
     
          }

          var d = JSON.stringify(weekdays);

          var formdata = new FormData();
          formdata.append("alert_day", d);
          formdata.append("id", e.id);
          
          formdata.append("act",'weekdaysalert');
  
          var requestOptions = {
              method: 'POST',
              body: formdata,
              };
              fetch(config.serverURL, requestOptions)
              .then(response => response.json())
              .then(responseJson =>{
                  if(responseJson.status == 1){
                      getdata();
  
                  }
  
              })
     console.log('weekdays',weekdays);

        }
    useEffect(() => {
        navigation.addListener('focus',()=>{
            getdata();
            getdatauser();
            })
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
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Alert'})}  >

                             
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
                            
                                <Text style={style.hdr}>My Alerts</Text>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.card}>
                       
                            <TouchableOpacity style={style.cardheader} onPress={()=> navigation.navigate('Addalert')}  >
                                <View style={{flexDirection:'row'}}>
                                    <Text style={style.cardheadertxt}>{'Add Alert '}</Text>
                                    <Entypo name='plus' size={moderateScale(25)} style={{color:colors.orange}}/> 
                                </View>
                                
                            </TouchableOpacity>

                        <FlatList
                            style={{marginBottom:moderateScale(100)}}
                            data={data}
                            listKey={item => item.toString()}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                            <View style={style.cardlist}>
                                { item.slag == 'medicine' ? ( 
                                     <View>
                                     <View style={{flexDirection:'row'}}>
                                
                                     <View style={style.cardtxt}> 
                                         <Text style={style.txt1} numberOfLines={1}>{item.alert_name}</Text>
                                         <View style={style.txt3typeview}>
                                         <Text style={style.txt3type} >{item.alert_type}</Text>
                                         </View>
                                                                          
                                         <View style={[style.address,{marginTop:moderateScale(10)}]}>
                                           
                                             <Ionicons name='alarm-outline' size={moderateScale(20)} style={{color:'#952A4E'}}/> 
                                             <Text  style={style.txt4}>{Moment('Mon 03-Jul-2017,'+item.alert_time).format('hh:mm A')}</Text>
                                         </View>
                                         <View style={[style.address]}>
                                              <Text  style={style.txt3}>{item.alert_note}</Text> 
                                         </View>
                                         <View style={{flexDirection:'row',paddingVertical:moderateScale(5),justifyContent:'space-between'}}>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"SUN",'id':item.id})}>
                                             <Text style={  JSON.parse(item.alert_day)[0] == "SUN" ?  style.weektxt1 :  style.weektxt }>{'S'}</Text>
                                             </TouchableOpacity>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"MON",'id':item.id})}>
                                             <Text style={ JSON.parse(item.alert_day)[1] == "MON" ?  style.weektxt1 :  style.weektxt}>M</Text>
                                             </TouchableOpacity>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"TUE",'id':item.id})}>
                                             <Text style={ JSON.parse(item.alert_day)[2] == "TUE" ?  style.weektxt1 :  style.weektxt}>T</Text>
                                             </TouchableOpacity>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"WED",'id':item.id})}>
                                             <Text style={ JSON.parse(item.alert_day)[3] == "WED" ?  style.weektxt1 :  style.weektxt}>W</Text>
                                             </TouchableOpacity>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"THU",'id':item.id})}>
                                             <Text style={ JSON.parse(item.alert_day)[4] == "THU" ?  style.weektxt1 :  style.weektxt}>T</Text>
                                             </TouchableOpacity>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"FRI",'id':item.id})}>
                                             <Text style={ JSON.parse(item.alert_day)[5] == "FRI" ?  style.weektxt1 :  style.weektxt}>F</Text>
                                             </TouchableOpacity>
                                             <TouchableOpacity onPress={()=>setweekdays({"weekdays":item.alert_day,"day":"SAT",'id':item.id})}>
                                             <Text style={ JSON.parse(item.alert_day)[6] == "SAT" ?  style.weektxt1 :  style.weektxt}>S</Text>
                                             </TouchableOpacity>
                                         </View>
                                         </View>
                                         <View style={style.roundimg} >
                                         <View 
                                         style={style.round}>
                                             <Switch
                                             trackColor={{ false: colors.Charcole, true: colors.green}}
                                             thumbColor={isEnabled ? colors.whitelight :colors.whitelight }
                                             ios_backgroundColor="#3e3e3e"
                                             onValueChange={ ()=>toggleSwitch({"status":item.alert_status,"id":item.id})}
                                             value={ item.alert_status == 1 ? true : false }
                                             />
                                         </View>
                                         </View>
                                     </View>
                                     <View style={style.line} />
     
                                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                         <TouchableOpacity onPress={()=>navigation.navigate('Editalert',{item})}>
                                             <AntDesign name='edit' size={moderateScale(25)} color={colors.edit} />
                                         </TouchableOpacity>
     
     
                                         <TouchableOpacity onPress={()=>{setineed_id(item.id); setshowdelete(true); }} >
                                             <AntDesign name='delete' size={moderateScale(25)}  color={colors.red}/>
                                         </TouchableOpacity>
                                         <AwesomeAlert
                                                     show={showdelete}
                                                     showProgress={false}
                                                     title="Alert"
                                                     message="do you want to delete it?"
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
                                                         deletealert();
                                                         setshowdelete(false)
     
                                                     }}
                                                     />
                                     </View>
                                     </View>
                                ) : (
                                    <View>
                                     <View style={{flexDirection:'row'}}>
                                
                                     <View style={style.cardtxt}> 
                                         <Text style={style.txt1} numberOfLines={1}>{item.alert_name}</Text>
                                         <View style={style.txt3typeview}>
                                         <Text style={style.txt3type} >{item.alert_type}</Text>
                                         </View>
                                                                          
                                         <View style={[style.address,{marginTop:moderateScale(10)}]}>
                                        { 
                                        console.log('jgjh',item.date.split('-')[0])
                                        }
                                            <Ionicons name='alarm-outline' size={moderateScale(20)} style={{color:'#952A4E'}}/> 
                                            <Text  style={style.txt4}>{  item.date.split('-')[1] } { Moment(new Date('1955-'+ (item.date.split('-')[0].length) == 1 ? 0 : '',item.date.split('-')[0],'-12')).format('MMMM') }</Text>

                                         </View>
                                         <View style={[style.address]}> 
                                              <Text  style={style.txt3}>{item.alert_note}</Text> 
                                         </View>
                                        
                                         </View>
                                         <View style={style.roundimg} >
                                         <View 
                                         style={style.round}>
                                             <Switch
                                             trackColor={{ false: colors.Charcole, true: colors.green}}
                                             thumbColor={isEnabled ? colors.whitelight :colors.whitelight }
                                             ios_backgroundColor="#3e3e3e"
                                             onValueChange={ ()=>toggleSwitch({"status":item.alert_status,"id":item.id})}
                                             value={ item.alert_status == 1 ? true : false }
                                             />
                                         </View>
                                         </View>
                                     </View>
                                     <View style={style.line} />
     
                                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                         <TouchableOpacity onPress={()=>navigation.navigate('Editalert',{item})}>
                                             <AntDesign name='edit' size={moderateScale(25)} color={colors.edit} />
                                         </TouchableOpacity>
     
     
                                         <TouchableOpacity onPress={()=>{setineed_id(item.id); setshowdelete(true); }} >
                                             <AntDesign name='delete' size={moderateScale(25)}  color={colors.red}/>
                                         </TouchableOpacity>
                                         <AwesomeAlert
                                                     show={showdelete}
                                                     showProgress={false}
                                                     title="Alert"
                                                     message="do you want to delete it?"
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
                                                         deletealert();
                                                         setshowdelete(false)
     
                                                     }}
                                                     />
                                     </View>
                                     </View>
                                )}
                           
                                
                            </View>
                            
                            )}
                            />
                        </View>
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}