import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,Modal,ToastAndroid, ActivityIndicator,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottamTab from '../../component/BottamTab';
import MultiSelect from 'react-native-multiple-select';

import colors from '../../utils/colors';

import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-date-picker';
import { moderateScale } from 'react-native-size-matters';
export default function Humanbookcreate({navigation,route}) {
    const [images, setimages] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimages(u_img);
    }

    const [days, setdays] = useState(["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]);
    const [name, setname] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [type, settype] = useState('');
    const [open, setOpen] = useState(false);
    const [isrepeat, setisrepeat] = useState(true);
    const [time, settime] = useState(new Date())
    const [note, setnote] = useState('');
    const chk = async (time) =>{
      settime(time);
      console.log('time',time.toLocaleTimeString())
      setOpen(false);
    }
      const submitdata = async () =>{
   
    const uid =await  AsyncStorage.getItem("u_id");
   
    if (!name.trim()) {
      ToastAndroid.show("Please enter alert name",ToastAndroid.SHORT);
      return;
    }if (!type.trim()) {
      ToastAndroid.show("Please enter alert type",ToastAndroid.SHORT);
      return;
    }
       
    if (!note.trim()) {
      ToastAndroid.show("Please enter alert note",ToastAndroid.SHORT);
      return;
    }
    setShowModal(!showModal);
  
    var d = JSON.stringify(days);
    var formdata = new FormData();
    formdata.append("alert_name", name);
    formdata.append("alert_type", type);
    formdata.append("alert_time", time.toLocaleTimeString());
    formdata.append("alert_note", note);
    formdata.append("member_id",uid);
    formdata.append("alert_day",d);
    formdata.append("is_repeat",isrepeat);
    formdata.append("act",'addalert');
  
    var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){
                setShowModal(!showModal);
  
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
  
                navigation.navigate('Alert') 
  
            }else{
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
  
      })
   
  }
  const setdata = async (e) => {
    console.log(e[0]);
    settype(e[0]);
   }
    const setweekdays = async (e) =>{
  
    const valueToRemove = e;
    var found = false;
    var ind = 0 ;
    days.map((item,index)=>{
        if(item == valueToRemove){
          found = true;
          ind = index
        }
      })
  
      if(found){
        days[ind] = 'NUN';
  
      }else{
        if( e == 'SUN'){
          days[0] = 'SUN';
        }
        if( e == 'MON'){
          days[1] = 'MON';
        }
        if( e == 'TUE'){
          days[2] = 'TUE';
        }
        if( e == 'WED'){
          days[3] = 'WED';
        }
        if( e == 'THU'){
          days[4] = 'THU';
        }
        if( e == 'FRI'){
          days[5] = 'FRI';
        }
        if( e == 'SAT'){
          days[6] = 'SAT';
        }
  
     
      }
  
      setdays(days)
      setShowModal1(!showModal1)
  
  
  
    }
    useEffect(() => {
        navigation.addListener('focus',()=>{
            getdatauser();
            })
        getdatauser();

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
                <ActivityIndicator size="large" animating={showModal} color={colors.Golden}/>
            </View>
         </View>
       </Modal>
     
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity  onPress={()=> navigation.navigate('Alert')} >
                                    <AntDesign name='arrowleft' color={colors.Charcole} style={style.imgStyle2} size={moderateScale(30)} />
                                </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Addalert'})}  >
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
                            
                            <Text style={style.hdr}>Add Alert</Text>
                        </View>
                        <View style={style.card}>
                            <View style={style.cardheader}>
                                
                            </View>
                            <ScrollView horizontal={false}>
                                <View style={style.lbl}>
                                <TextField
                                      label='Medicine Name'
                                      fontSize={moderateScale(14)}
                                      textColor={colors.Charcole}
                                      baseColor={colors.Charcole}
                                      tintColor={colors.Charcole}
                                     onChangeText={(name) => setname(name)}
                                  />
                                  <Text style={[{marginTop:moderateScale(2)}]}></Text>
                                  <MultiSelect
                                      hideTags
                                      items={[
                                        {name:'Pill'},
                                        {name:'Liquid'},
                                        {name:'Powder'},
                                        {name:'Water'},
                                        {name:'Exercise'},
                                        {name:'Other'},
                                    ]}
                                      single
                                      uniqueKey="name"
                                      onSelectedItemsChange={setdata}
                                      selectedItems={[type]}
                                      selectText="Type"
                                      searchInputPlaceholderText="Search Type"
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
                                  <TextField
                                      label='Time'
                                      placeholder={time.toLocaleTimeString()}
                                      placeholderTextColor={colors.Charcole}
                                      fontSize={moderateScale(14)}
                                      textColor={colors.Charcole}
                                      baseColor={colors.Charcole}
                                      tintColor={colors.Charcole}
                                      onFocus ={()=>setOpen(true)}
                                      
                                  />
                                 
                                  <DatePicker
                                  mode='time'
                                  modal
                                  open={open}
                                  date={time}
                                  
                                  onConfirm={(time) => {
                                    chk(time);
                                  }}
                                  onCancel={() => {
                                    setOpen(false)
                                  }}
                                />
                                   <TextField
                                      label='Note'
                                      labelHeight={20}
                                      fontSize={moderateScale(14)}
                                      textColor={colors.Charcole}
                                      baseColor={colors.Charcole}
                                      tintColor={colors.Charcole}
                                     onChangeText={(note) => setnote(note)}
                                  />
                              
                              <View style={style.week}>
                              
                                        <TouchableOpacity onPress={()=> setweekdays('SUN') }>
                                          <Text style={  days[0] == "SUN" ?  style.weektxt1 :  style.weektxt }>{'S'}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=> setweekdays('MON') }>
                                        <Text style={ days[1] == "MON" ?  style.weektxt1 :  style.weektxt}>M</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=> setweekdays('TUE') }>
                                        <Text style={ days[2] == "TUE" ?  style.weektxt1 :  style.weektxt}>T</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=> setweekdays('WED') }>
                                        <Text style={ days[3] == "WED" ?  style.weektxt1 :  style.weektxt}>W</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=> setweekdays('THU') }>
                                        <Text style={ days[4] == "THU" ?  style.weektxt1 :  style.weektxt}>T</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=> setweekdays('FRI') }>
                                        <Text style={ days[5] == "FRI" ?  style.weektxt1 :  style.weektxt}>F</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=> setweekdays('SAT') }>
                                        <Text style={ days[6] == "SAT" ?  style.weektxt1 :  style.weektxt}>S</Text>
                                        </TouchableOpacity>

                              </View>
                             
                                 <TouchableOpacity
                                 onPress={()=>submitdata()}
                                 style={style.btn}>
                                 <Text style={style.txtstyle3}>{'SUBMIT'}</Text>
                                 </TouchableOpacity>
                                 </View>
                            </ScrollView>

                        </View>
                            

                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}