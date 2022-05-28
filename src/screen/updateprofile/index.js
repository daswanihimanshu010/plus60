import React, {useState, useRef, useContext, useEffect} from 'react';
import {ActivityIndicator, View,Text, Image, StatusBar,PermissionsAndroid,Modal,ToastAndroid,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import config from '../../server/config';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultiSelect from 'react-native-multiple-select';
import DatePicker from 'react-native-date-picker'
import { TextField } from 'react-native-material-textfield';
import BottamTab from '../../component/BottamTab';
import Moment from 'moment';
import { moderateScale } from 'react-native-size-matters';
export default function Humanbookcreate({navigation,route}) {
  
    const [date, setDates] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [maxdate, setmaxdate] = useState(false)
    const [lang, setlang] = useState([]);  
    const [stay, setstay] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalimg, setShowModalimg] = useState(false);
    const [retired, setretired] = useState('');
    const [intrest, setintrest] = useState([]);  
    const [state, setstate] = useState([]);  
    const [intrests, setintrests] = useState('');
    const [stats, setstates] = useState('');
    const [langs, setlangs] = useState('');
    const [selectdate, setdate] = useState('');
    const [city, setcity] = useState([]);  
    const [citys, setcitys] = useState([]); 
    const [textMessage, settextMessage] = useState('');
    const [img, setimg] = useState(''); 
    const [name, setname] = useState('');
    const [address, setaddress] = useState('adfgad');
    const [p1, setp1] = useState('');
    const [p2, setp2] = useState('');
    const [image, setimage] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [countryvl, setcountrysvl] = useState('');
    const [country, setcountry] = useState([]); 
      const logout = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("member_id", uid);
        formdata.append("act", "device_token");
        var requestOptions = {
        method: 'POST',
        body: formdata,
        };
        fetch(config.serverURL, requestOptions)
        .then(response => response.json())
        .then(responseJson =>{
        console.log('token update')
        })
        await AsyncStorage.removeItem('u_id');
        navigation.navigate('Onbording');
        ToastAndroid.show('logout successfully!',ToastAndroid.SHORT);
      }
      const upload_profile = async (response) =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        setShowModal(!showModal);
        
          formdata.append("image", {
              name: response.assets[0].fileName,
              filename: response.assets[0].fileName,
              uri: response.assets[0].uri,
              type: response.assets[0].type
          });
   
        formdata.append("act", "upload_profile");
        formdata.append("user_id",uid);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{

                if(responseJson.status == 1){

                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    getuserdata();
    
                }else{
                    ToastAndroid.show('something went wrong!',ToastAndroid.SHORT);
                    getuserdata();

                }
          })
    
    }
      const removeprofile = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        setShowModal(!showModal);
        formdata.append("act", "remove_profile");
        formdata.append("user_id",uid);
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{

                if(responseJson.status == 1){

                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    getuserdata();
    
                }else{
                    ToastAndroid.show('something went wrong!',ToastAndroid.SHORT);
                    getuserdata();

                }
          })
    
    }
        const submitdata = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
        const u_email =await  AsyncStorage.getItem("u_email");
        const u_mo =await  AsyncStorage.getItem("u_mo");
        var formdata = new FormData();
        if (!name.trim()) {
            formdata.append("username", p1);

          }else{
            formdata.append("username", name);

          }
          if (!selectdate.trim()) {
            ToastAndroid.show("Please enter dob",ToastAndroid.SHORT);
            return;
          }
          if (!address.trim()) {
            formdata.append("address", p2);
          }else{
            formdata.append("address", address);
          }
          
        setShowModal(!showModal);
        const inst =  JSON.stringify(selectedItems);
        formdata.append("isimg", image);
        formdata.append("dob", Moment(Date(selectdate)).format('YYYY-MM-DD'));
        formdata.append("state", stats);
        formdata.append("is_retired", retired);
        formdata.append("stay_with", stay);
        formdata.append("city", citys);
        formdata.append("interest", inst);
        formdata.append("language", langs);
          formdata.append("country", countryvl);
          formdata.append("act", "update_profile_2");
        formdata.append("user_id",uid);
        formdata.append("email",u_email);
        formdata.append("mobile_no",u_mo); 
        if (img) {
          formdata.append("image", {
              name: img.assets[0].fileName,
              filename: img.assets[0].fileName,
              uri: img.assets[0].uri,
              type: img.assets[0].type
          });
      }
        var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
          .then(response => response.json())
            .then(responseJson =>{

                if(responseJson.status == 1){

                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    AsyncStorage.setItem('u_id',String(responseJson.data.member_id));
                    AsyncStorage.setItem('u_fullname',String(responseJson.data.member_name));
                    AsyncStorage.setItem('u_email',String(responseJson.data.member_email));
                    AsyncStorage.setItem('u_mo',String(responseJson.data.member_mob));
                    AsyncStorage.setItem('u_img',String(responseJson.data.member_img));
                    AsyncStorage.setItem('is_member',String(responseJson.data.is_membership));

                    
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    getuserdata();
    
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
    
                
    
          })
    
    }
    const onSelectedItemsChange = (selectedItems) => {
  
      setSelectedItems(selectedItems);
    };
    const selectimgG = async () =>{
      let options = {
        title: 'Select Image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
    
  ImagePicker.launchImageLibrary(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
                console.log(response)
                var a =response.assets[0].uri;
                var b =response.assets[0].type;
                var c = a +'.'+ b;
                settextMessage(a)
                setimg(response);
                upload_profile(response);
    }
  });
        
        
    }
    const selectimg = async () =>{
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "App Camera Permission",
              message:"App needs access to your camera ",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            ImagePicker.launchCamera(options, (response) => {
        
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                console.log(response.customButton);
              } else {
                var a =response.assets[0].fileName;
                var b =response.assets[0].type;
                var c = a +'.'+ b;
                settextMessage(a)
                setimg(response);
                upload_profile(response);
              }
            });
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
        
        
    }
    const staydata = async (e) => {
      setstay(e[0]);
    }
    const setretireddata = async (e) => {
      setretired(e[0]);
    }
    const setcitydata = async (e) => {
      setcitys(e[0]);
  

    }
      const setdata = async (e) => {
        setstates(e[0])
        getcity(e[0]);

      } 
      const setcountrydata = async (e) => {
        setcountrysvl(e[0])
        getstate(e[0]);
 
       }
      const getcountry = async () => {
        var formdata = new FormData();
        formdata.append("act", "country");
        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json(); 
        setcountry(json.data);  
      
      }; 
       const getcity = async (e) => {
      var formdata = new FormData();
      formdata.append("state_id", e);
      formdata.append("act", "city");
      var requestOptions = {
          method: 'POST',
          body: formdata,
      };
      const response = await fetch(config.serverURL, requestOptions);
      const json = await response.json();
      setcity(json.data);
    
    };
   
  

         

    useEffect(() => {
      var date = new Date();
      date.setFullYear( date.getFullYear() - 60 );
      setmaxdate(date.getFullYear()+'-12-31')
      getuserdata()
      
        
      }, []);
      const getuserdata = async () => {
        setShowModal(false);

        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
          formdata.append("act", "user_info");
          formdata.append("member_id",uid);
            var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(config.serverURL, requestOptions)
            .then(response => response.json())
              .then(responseJson =>{
                    AsyncStorage.setItem('u_id',String(responseJson.data.member_id));
                    AsyncStorage.setItem('u_fullname',String(responseJson.data.member_name));
                    AsyncStorage.setItem('u_email',String(responseJson.data.member_email));
                    AsyncStorage.setItem('u_mo',String(responseJson.data.member_mob));
                    AsyncStorage.setItem('u_img',String(responseJson.data.member_img));
                    AsyncStorage.setItem('is_member',String(responseJson.data.is_membership));

                  setaddress(responseJson.data.member_address)
                  setp1(responseJson.data.member_name);
                  setp2(responseJson.data.member_address);
                  setdate(Moment(responseJson.data.member_dob).format('MM-DD-YYYY'));
                  setimage(responseJson.data.member_img);
                  setstates(responseJson.data.member_state);
                  setcitys(responseJson.data.member_city)
                  setlangs(responseJson.data.preffered_language);
                  setSelectedItems( JSON.parse(responseJson.data.area_of_intrests));
                    getstate(responseJson.data.member_country);
                    setcountrysvl(responseJson.data.member_country);
                    getcountry();
                    getlang();
                    getintrest();
                    getcity(responseJson.data.member_state)
                    setstay(responseJson.data.stay_with)
                    setretired(responseJson.data.is_retired)
            })
      }
        const getintrest = async () => {
        var formdata = new FormData();
        formdata.append("act", "areaofinterest");
        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json();
        setintrest(json.data);
      
      };
      const getlang = async () => {
        var formdata = new FormData();
        formdata.append("act", "lang");
        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json();
        setlang(json.data);
      
      }; 
    const getstate = async (e) => {
        var formdata = new FormData();
        formdata.append("act", "state");
        formdata.append("c_id", e);

        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json();
        setstate(json.data);
      
      };
   
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
                  <TouchableOpacity onPress={()=>{setShowModalimg(false);selectimgG()}}  style={{marginRight:moderateScale(30)}}>
                    <MaterialIcons name='add-photo-alternate' color={colors.edit} size={moderateScale(55)} />
                    <Text style={style.camtxt}>Gallery</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setShowModalimg(false);selectimg()}} >
                    <MaterialIcons name='add-a-photo' color={colors.edit}  size={moderateScale(55)}  />
                    <Text style={style.camtxt}>Camera</Text>
                  </TouchableOpacity>
                  

                </View>
                <TouchableOpacity style={{backgroundColor:colors.red,paddingHorizontal:moderateScale(5),paddingVertical:moderateScale(3),marginTop:moderateScale(8),borderRadius:moderateScale(5)}} onPress={()=>{setShowModalimg(false)}} >
                    <Text style={[style.camtxt,{color:colors.white}]}>Cancel</Text>
                  </TouchableOpacity>
            </View>
         </View>
       </Modal>
            {/* <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} > */}
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity  onPress={()=> navigation.navigate('HOME')} >
                                <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                            </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                  { image != '' ? (
                                        <Image style={style.imgStyle3} 
                                            source={{uri: config.fileserver+image}}
                                        /> 
                                    ): (
                                        <Image style={style.imgStyle3} source={require('../../Assets/icon/avtar.png')}/> 
                                    )
                                    }
                            </View>
                            <View style={style.logout}>
                            <Text style={style.hdr}>{'Profile'}</Text>
                            <TouchableOpacity
                            onPress={()=>logout()}
                            >
                                  <FontAwesome  style={style.hdricon} name='power-off' size={moderateScale(25)}  color={colors.Charcole}/>
                                {/* <Text style={style.hdr}>{'Logout'}</Text> */}
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.cardheader}>
                                <View style={{flexDirection:'row'}}>
                                {/* <Text style={style.cardheadertxt}>{'Submit Data'}</Text> */}
                                </View>
                                
                            </View>
                            <ScrollView>
                            
                            <View style={style.lbl}>
                                <View style={style.userimg}>
                                    <View style={style.cover}>
                                    { image != '' ? (
                                        <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                            source={{uri: config.fileserver+image}}
                                        /> 
                                    ): (
                                        <Image style={{height:'100%',width:'100%',resizeMode:'cover',}}  source={require('../../Assets/icon/avtar.png')}/> 
                                    )
                                    }
                                        {/* <Image style={{height:'100%',width:'100%',resizeMode:'cover',}} 
                                            source={{uri: config.fileserver+image}}
                                        />    */}
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <TouchableOpacity style={style.btn1} onPress={() =>
                                   
                                     setShowModalimg(true)
                                       } >
                                        <Text style={style.labelbtn1}>Update Image</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity disabled={ image == '' ? true : false } style={style.btn2} onPress={() => removeprofile()} >
                                        <Text style={style.labelbtn1}>Remove Image</Text>
                                    </TouchableOpacity>
                                    </View>
                                <TextField
                                    label='*Username'
                                    placeholder={p1}
                                    placeholderTextColor="#202020" 
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={'#202020'}
                                    tintColor={'#202020'}
                                    onChangeText={(name) =>
                                      setname(name)}
                                />
                                <TextField
                                    label='Locality'
                                    placeholder={p2}
                                    placeholderTextColor="#202020" 
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={'#202020'}
                                    tintColor={'#202020'}
                                    onChangeText={(address) =>
                                    setaddress(address)}
                                />
                                
                                <TouchableOpacity 
                                onPress={()=>setOpen(true)}
                                style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(15)}}>
                                <Text style={style.label}>*Date of birth</Text>
                                <MaterialCommunityIcons name='calendar' size={30} style={{ color:'#202020' }} />
                                </TouchableOpacity>
                                <Text style={style.labeldob}>{selectdate}</Text>
                                 <DatePicker
                                 mode='date'
                                 maximumDate={new Date(maxdate)}
                                 minimumDate={new Date("1900-12-31")}
                                 
                                  modal
                                  open={open}
                                  date={date}
                                  onConfirm={(date) => {
                                    setOpen(false)
                                    setDates(date)
                                    setdate(Moment(date).format('MM-DD-YYYY') )
                                    
                                  }}
                                  onCancel={() => {
                                    setOpen(false)
                                  }}
                                />
                                {/* <Text style={style.label}>State</Text> */}
                                <Text style={style.label}>*Where do you stay? </Text> 
                                <MultiSelect
                                    hideTags
                                    items={country}
                                    single
                                    uniqueKey="id"
                                   onSelectedItemsChange={setcountrydata}
                                   selectedItems={[countryvl]}
                                    selectText="Select Country"
                                    searchInputPlaceholderText="Search Items..."
                                    tagRemoveIconColor="#CCC"
                                    tagBorderColor="#CCC"
                                    tagTextColor="#CCC"
                                    selectedItemTextColor="#CCC"
                                    selectedItemIconColor="#CCC"
                                    itemTextColor="#000"
                                    displayKey="title"
                                    searchInputStyle={{color: '#CCC'}}
                                />
                                <Text style={{marginTop:moderateScale(2)}}></Text>

                                <MultiSelect
                                  hideTags
                                  single
                                  items={state}
                                  uniqueKey="state_id"
                                  onSelectedItemsChange={setdata}
                                  selectedItems={[stats]}
                                  selectText="Select State"
                                  searchInputPlaceholderText="Search Items..."
                                  onChangeInput={(text) => console.log(text)}
                                  tagRemoveIconColor="#CCC"
                                  tagBorderColor="#CCC"
                                  tagTextColor="#CCC"
                                  selectedItemTextColor="#CCC"
                                  selectedItemIconColor="#CCC"
                                  itemTextColor="#000"
                                  displayKey="state_title"
                                  searchInputStyle={{color: '#CCC'}}
                                />
                                <Text style={{marginTop:moderateScale(2)}}></Text>
                                <MultiSelect
                                  hideTags
                                  single
                                  items={city}
                                  uniqueKey="id"
                                  onSelectedItemsChange={setcitydata}
                                  selectedItems={[citys]}
                                  selectText={"Select City"}
                                  searchInputPlaceholderText="Search Items..."
                                  onChangeInput={(text) => console.log(text)}
                                  tagRemoveIconColor="#CCC"
                                  tagBorderColor="#CCC"
                                  tagTextColor="#CCC"
                                  selectedItemTextColor="#CCC"
                                  selectedItemIconColor="#CCC"
                                  itemTextColor="#000"
                                  displayKey="name"
                                  searchInputStyle={{color: '#CCC'}}
                                />
                               
                                <Text style={style.labelhead}>{'My Preferences'}</Text> 
                                <Text style={style.label}>{'I am retired from my work.'} </Text>
                                <MultiSelect
                                  hideTags
                                  single
                                  items={[
                                    {id: 'YES', name: 'YES', },
                                    {id: 'NO', name: 'NO', },
                                    ]}
                                  uniqueKey="id"
                                  onSelectedItemsChange={setretireddata}
                                  selectedItems={[retired]}
                                  selectText={"Select"}
                                  searchInputPlaceholderText="Search Items..."
                                  onChangeInput={(text) => console.log(text)}
                                  tagRemoveIconColor="#CCC"
                                  tagBorderColor="#CCC"
                                  tagTextColor="#CCC"
                                  selectedItemTextColor="#CCC"
                                  selectedItemIconColor="#CCC"
                                  itemTextColor="#000"
                                  displayKey="name"
                                  searchInputStyle={{color: '#CCC'}}
                                />
                               
                                <Text style={style.label}>{'I stay'} </Text>
                                  <MultiSelect
                                  hideTags
                                  single
                                  items={[
                                    {id: 'Alone', name: 'Alone', },
                                    {id: 'With My Spouse', name: 'With My Spouse', },
                                    {id: 'With My Spouse & Kids', name: 'With My Spouse & Kids', },
                                    {id: 'Other', name: 'Other', },

                                    ]}
                                  uniqueKey="id"
                                  onSelectedItemsChange={staydata}
                                  selectedItems={[stay]}
                                  selectText={"Select"}
                                  searchInputPlaceholderText="Search Items..."
                                  onChangeInput={(text) => console.log(text)}
                                  tagRemoveIconColor="#CCC"
                                  tagBorderColor="#CCC"
                                  tagTextColor="#CCC"
                                  selectedItemTextColor="#CCC"
                                  selectedItemIconColor="#CCC"
                                  itemTextColor="#000"
                                  displayKey="name"
                                  searchInputStyle={{color: '#CCC'}}
                                />
                                <Text style={style.label}>Some areas of my interest are</Text>
                                
                                <MultiSelect
                                hideTags
                                items={intrest}
                                uniqueKey="id"
                                onSelectedItemsChange={onSelectedItemsChange}
                                selectedItems={selectedItems}
                                selectText="Select more than one"
                                searchInputPlaceholderText="Search Items..."
                                onChangeInput={(text) => console.log(text)}
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#CCC"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                searchInputStyle={{color: '#CCC'}}
                                submitButtonColor={colors.Golden}
                                submitButtonText="Submit"
                                />
                                <Text style={style.label}>My Preferred Language</Text>
                                <MultiSelect
                                  hideTags
                                  single
                                  items={lang}
                                  uniqueKey="language_id"
                                  onSelectedItemsChange={setdata}
                                  selectedItems={[langs]}
                                  selectText="Select language"
                                  searchInputPlaceholderText="Search Items..."
                                  onChangeInput={(text) => console.log(text)}
                                  tagRemoveIconColor="#CCC"
                                  tagBorderColor="#CCC"
                                  tagTextColor="#CCC"
                                  selectedItemTextColor="#CCC"
                                  selectedItemIconColor="#CCC"
                                  itemTextColor="#000"
                                  displayKey="language"
                                  searchInputStyle={{color: '#CCC'}}
                                />
                                 <TouchableOpacity 
                                 onPress={()=>submitdata()}
                                 style={style.btn}>
                                 <Text style={style.txtstyle3}>{'update profile'}</Text>

                                 </TouchableOpacity>
                            </View>
                           
                            </ScrollView>
                        </View>
                       
                        
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}