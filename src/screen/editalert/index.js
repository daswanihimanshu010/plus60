import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,Modal,ToastAndroid, ActivityIndicator,StatusBar,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottamTab from '../../component/BottamTab';
import MultiSelect from 'react-native-multiple-select';
import colors from '../../utils/colors';
import Moment from 'moment';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-date-picker';
import { moderateScale } from 'react-native-size-matters';
export default function Humanbookcreate({navigation,route}) {
  const [months, setmonths] = useState([
    { name:'January', isSelect: true},
    { name:'February', isSelect: false},
    { name:'March', isSelect: false},
    { name:'April', isSelect: false},
    { name:'May', isSelect: false},
    { name:'June', isSelect: false},
    { name:'July', isSelect: false},
    { name:'August', isSelect: false},
    { name:'September', isSelect: false},
    { name:'October', isSelect: false},
    { name:'November', isSelect: false},
    { name:'December', isSelect: false},
]);
  const [Dt, setDt] = useState([
    { date:1, isSelect: true},
    { date:2, isSelect: false},
    { date:3, isSelect: false},
    { date:4, isSelect: false},
    { date:5, isSelect: false},
    { date:6, isSelect: false},
    { date:7, isSelect: false},
    { date:8, isSelect: false},
    { date:9, isSelect: false},
    { date:10, isSelect: false},
    { date:11, isSelect: false},
    { date:12, isSelect: false},
    { date:13, isSelect: false},
    { date:14, isSelect: false},
    { date:15, isSelect: false},
    { date:16, isSelect: false},
    { date:17, isSelect: false},
    { date:18, isSelect: false},
    { date:19, isSelect: false},
    { date:20, isSelect: false},
    { date:21, isSelect: false},
    { date:22, isSelect: false},
    { date:23, isSelect: false},
    { date:24, isSelect: false},
    { date:25, isSelect: false},
    { date:26, isSelect: false},
    { date:27, isSelect: false},
    { date:28, isSelect: false},
    { date:29, isSelect: false},
    { date:30, isSelect: false},
    { date:31, isSelect: false},
  ]);
    const [d, setd] = useState(route.params.item.date.split('-')[1])
    const [m, setm] = useState(Moment(new Date('1955-'+ (route.params.item.date.split('-')[0].length) == 1 ? 0 : '',route.params.item.date.split('-')[0],'-12')).format('MMMM'))
    const [images, setimages] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimages(u_img);
    }

    const [days, setdays] = useState(JSON.parse(route.params.item.alert_day));
    const [name, setname] = useState(route.params.item.alert_name);
    const [showModal, setShowModal] = useState(false);
    const [showModal1date, setShowModaldate] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [type, settype] = useState(route.params.item.alert_type);
    const [open, setOpen] = useState(false);
    const [isrepeat, setisrepeat] = useState(true);
    const [date, setdate] = useState(new Date())
    const [time, settime] = useState(new Date())
    const [times, settimes] = useState(route.params.item.alert_time)
    const [note, setnote] = useState(route.params.item.alert_note);
    const chkdt = async (date) =>{
      setdate(date);
      console.log('date',date)
      setOpen(false);
    }
    const chk = async (time) =>{
      settime(time);
      settimes(time.toLocaleTimeString())
      console.log('time',time.toLocaleTimeString())
      setOpen(false);
    }
      const submitdata = async () =>{
        const moonLanding = new Date(m +' 20, 69 00:20:18');
        var monthnumber =moonLanding.getMonth()+1;
        var dateofalert = monthnumber+'-'+d;
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
   
    var dd = JSON.stringify(days);
    var formdata = new FormData();
    formdata.append("alert_name", name);
    formdata.append("alert_type", type);
    formdata.append("alert_time", times);
    formdata.append("alert_note", note);
    formdata.append("member_id",uid);
    formdata.append("date", dateofalert);
    formdata.append("id",route.params.item.id);
    formdata.append("alert_day",dd);
    formdata.append("is_repeat",isrepeat);
    formdata.append("act",'editalert');
    formdata.append("slag", route.params.item.slag);
  
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
              setShowModal(!showModal);

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
    const confirm = async () =>{
      months.map((item,index)=>{
      if(item.isSelect){
        setm(item.name)
      }
      })
      Dt.map((item,index)=>{
        if(item.isSelect){
          setd(item.date)
        }
        })
    }
  

  const selectmt = async (ind) =>{
    let arr =  months.map((item,index)=>{
      if(ind == index){
        item.isSelect = true;
      }else{
        item.isSelect = false;
      }
      return {...item}
      })
      setmonths(arr);
    }
    const selectdt = async (ind) =>{
      let arr =  Dt.map((item,index)=>{
        if(ind == index){
          item.isSelect = true;
        }else{
          item.isSelect = false;
        }
        return {...item}
        })
        setDt(arr);
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
       <Modal
              transparent={true}
              visible={showModal1date}
              animationType={'slide'}
              animationIn="slideInLeft"
              >
         <View  style={style.modal1}>
            <View  style={style.modalInner1}>
            <Text style={style.dtTxt}>select date</Text>

                <View style={{justifyContent:'space-around',marginTop:moderateScale(12),flexDirection:'row',height:moderateScale(190)}}> 
                <View>

                <FlatList
                data={months}
                listKey={item => item.toString()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity onPress={()=> selectmt(index)} style={[style.dtbtn,{ backgroundColor: item.isSelect ? colors.Charcole : colors.white }]}>
                  <Text style={style.dtTxt}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                />
                </View>
                <View >
                <FlatList
                data={Dt}
                listKey={item => item.toString()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                <TouchableOpacity onPress={()=> selectdt(index)} style={[style.dtbtn,{ backgroundColor: item.isSelect ? colors.Charcole : colors.white }]}>
                <Text style={style.dtTxt}>{item.date}</Text>
                </TouchableOpacity>
                )}
                />
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:moderateScale(8)}}>
                  <TouchableOpacity onPress={()=> setShowModaldate(false) }>
                    <Text style={{fontSize:moderateScale(14),color:colors.Charcole , marginRight:moderateScale(8)}}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> { confirm();setShowModaldate(false) } }>
                    <Text style={{fontSize:moderateScale(14),color:colors.Charcole, marginRight:moderateScale(8)}}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>
                
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
                            
                            <Text style={style.hdr}>Edit Alert</Text>
                        </View>
                        <View style={style.card}>
                            <View style={style.cardheader}>
                                
                            </View>
                            <ScrollView horizontal={false}>
                            { route.params.item.slag == 'medicine' ? ( <View style={style.lbl}>
                                <TextField
                                      value={name}
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
                                      placeholder={times}
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
                                      value={note}
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
                                 </View> ) : (
                                    <View style={style.lbl}>
                                    <TextField
                                          value={name}
                                          label='Who'
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
                                            {name:'Birthday'},
                                            {name:'Anniversary'},
                                            {name:'Foundation'},
                                            {name:'Special'},
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
                                     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(12)}}> 
                                    <TouchableOpacity onPress={()=> setShowModaldate(true) }>
                                      <Entypo name="calendar" color={colors.Charcole} size={moderateScale(20)} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} TouchableOpacity onPress={()=> setShowModaldate(true) }>
                                      <Text  style={{fontSize:moderateScale(14) , color:colors.Charcole}}>{d}-{m}</Text>
                                    <Entypo name="chevron-right" color={colors.Charcole} size={moderateScale(20)} />
                                    </TouchableOpacity>
                                  </View>
                                      {/* <TextField
                                          label='Date'
                                          placeholder={date.toLocaleDateString()}
                                          placeholderTextColor={colors.Charcole}
                                          fontSize={moderateScale(14)}
                                          textColor={colors.Charcole}
                                          baseColor={colors.Charcole}
                                          tintColor={colors.Charcole}
                                          onFocus ={()=>setOpen(true)}
                                          
                                      />
                                     
                                      <DatePicker
                                      mode='date'
                                      modal
                                      open={open}
                                      date={date}
                                      
                                      onConfirm={(date) => {
                                        chkdt(date);
                                      }}
                                      onCancel={() => {
                                        setOpen(false)
                                      }}
                                    /> */}
                                       <TextField
                                          value={note}
                                          label='Note'
                                          labelHeight={20}
                                          fontSize={moderateScale(14)}
                                          textColor={colors.Charcole}
                                          baseColor={colors.Charcole}
                                          tintColor={colors.Charcole}
                                         onChangeText={(note) => setnote(note)}
                                      />
                                  
                                 
                                     <TouchableOpacity
                                     onPress={()=>submitdata()}
                                     style={style.btn}>
                                     <Text style={style.txtstyle3}>{'SUBMIT'}</Text>
                                     </TouchableOpacity>
                                     </View>
                                  ) }

                               
                            </ScrollView>

                        </View>
                            

                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}