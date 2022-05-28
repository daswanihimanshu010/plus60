import React, {useState, useEffect} from 'react';
import {ActivityIndicator,ImageBackground, View,Text, Image,Modal,ToastAndroid, PermissionsAndroid,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import Moment from 'moment';
import MultiSelect from 'react-native-multiple-select';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-date-picker'
import { moderateScale } from 'react-native-size-matters';
export default function Profiledetail({navigation}) {
    const [showModal, setShowModal] = useState(false);
    const [stay, setstay] = useState('');
    const [retired, setretired] = useState('');
    const [statsvl, setstatesvl] = useState('');
    const [countryvl, setcountrysvl] = useState('');
    const [country, setcountry] = useState([]);  
    const [state, setstate] = useState([]);  

    const [city, setcity] = useState([]);  
    const [cityvl, setcitysvl] = useState('');
    const [langs, setlangs] = useState('');
    const [intrests, setintrests] = useState('');
    const [name, setname] = useState('');
    const [namem, setnamem] = useState('');
    const [namel, setnamel] = useState('');
    const [showModalimg, setShowModalimg] = useState(false);
    const [email, setemail] = useState('');
    const [dob, setdob] = useState('');
    const [address, setaddress] = useState('');
    const [textMessage, settextMessage] = useState('');
    const [img, setimg] = useState(''); 
    const [selectedItems, setSelectedItems] = useState([]);
    const [date, setDates] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [maxdate, setmaxdate] = useState(false)
    useEffect(() => {
      var date = new Date();
      date.setFullYear( date.getFullYear() - 60 );
      setmaxdate(date.getFullYear()+'-12-31')
      getcountry();
        getlang();
        getintrest();
      }, []);
      const submitdata = async () =>{
        
    
          const uid =await  AsyncStorage.getItem("u_id");
          const u_mo =await  AsyncStorage.getItem("u_mo");
          
          if (!name.trim()) {
            ToastAndroid.show("Please enter first name",ToastAndroid.SHORT);
            return;
          }
          if (!namel.trim()) {
            ToastAndroid.show("Please enter last name",ToastAndroid.SHORT);
            return;
          }
          if (!selectdate.trim()) {
            ToastAndroid.show("Please enter date of birth",ToastAndroid.SHORT);
            return;
          }
          if (!countryvl.trim()) {
            ToastAndroid.show("Please select country",ToastAndroid.SHORT);
            return;
          }
          
          if (!statsvl.trim()) {
            ToastAndroid.show("Please select state",ToastAndroid.SHORT);
            return;
          }
          if (!cityvl.trim()) {
            ToastAndroid.show("Please select city",ToastAndroid.SHORT);
            return;
          }
        //   if (!address.trim()) {
        //     ToastAndroid.show("Please enter address",ToastAndroid.SHORT);
        //     return;
        //   }
        //   if (selectedItems.length == 0) {
            
        //     ToastAndroid.show("Please enter intrests area",ToastAndroid.SHORT);
        //     return;
        // }
       const inst =  JSON.stringify(selectedItems);
          const full_name = name+' '+namem+' '+namel;
          var formdata = new FormData();
          formdata.append("is_retired", retired);
          formdata.append("stay_with", stay);
          formdata.append("username", full_name);
          formdata.append("address", address);
          formdata.append("dob", Moment(Date(selectdate)).format('YYYY-MM-DD'));
          formdata.append("country", countryvl);
          formdata.append("state", statsvl);
          formdata.append("city", cityvl);
          formdata.append("interest", inst);
          formdata.append("language", langs);
          formdata.append("act", "update_profile");
          formdata.append("user_id",uid);
          formdata.append("email",email);
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
            setShowModal(!showModal);

            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
              .then(responseJson =>{
                  console.log('res:::',responseJson)
                  if(responseJson.status == 1){
                      ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                      AsyncStorage.setItem('u_id',String(responseJson.data.member_id));
                      AsyncStorage.setItem('u_fullname',String(responseJson.data.member_name));
                      AsyncStorage.setItem('u_email',String(responseJson.data.member_email));
                      AsyncStorage.setItem('u_mo',String(responseJson.data.member_mob));
                      AsyncStorage.setItem('u_img',String(responseJson.data.member_img));
                      AsyncStorage.setItem('is_update',String(responseJson.data.is_updated));
                      AsyncStorage.setItem('is_member',String(responseJson.data.is_membership));
                      setShowModal(false);
                      navigation.navigate('Membership') 
      
                  }else{
                      setShowModal(false);
                      ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                  }
      
            })
      
      }
      const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        console.log('select',selectedItems);
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
      }
    });
          
          
      }
      const selectimg = async () => {
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
              console.log('Response = ', response);
        
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
              }
            });
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
       
    }
      const [intrest, setintrest] = useState([]);  
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
   

      const [lang, setlang] = useState([]);  
      const getlang = async () => {
        var formdata = new FormData();
        formdata.append("act", "lang");
        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json();
        let arr = json.data.map((item,index)=>{
          item.id = item.language_id
          item.name = item.language
          return {...item};
        })
        setlang(arr); 

      
      }; 
      const setlangdata = async (e) => {
        setlangs(e[0]);
       }
      const setcitydata = async (e) => {
        setcitysvl(e[0])
        console.log('hi',e[0]);
       }
       const setstaydata = async (e) => {
        setstay(e[0]);
       }
       const setretireddata = async (e) => {
        setretired(e[0]);
       }
      const setdata = async (e) => {
       setstatesvl(e[0])
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
        let arr = json.data.map((item,index)=>{
          item.id = item.state_id
          item.name = item.state_title
          return {...item};
        })
        setstate(arr);  
      
      }; 


        const getcity = async (e) => {
            console.log('run city',e);
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
        
          const [selectdate, setdate] = useState('');

      
    return(
        <View style={style.viewStyle}>
            <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} >
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
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView>
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.wrapp}>
                            <View style={style.headerstyle}>
                                <Text style={style.txtstyle1}>{'PROFILE'}</Text>
                            </View>  
                            
                            <ScrollView>
                            <View style={style.field}>
                          <TouchableOpacity style={{flexDirection:'row',width:'100%',alignSelf:'center', justifyContent:'space-between'}} 
                          onPress={() => 
                            setShowModalimg(true)
                          } 
                          >
                                <Text style={{color:'#202020',fontSize:moderateScale(14)}}>{'Upload Profile Image'}</Text>
                                <Ionicons name='camera' size={30} color={colors.Golden} /> 
                                </TouchableOpacity>
                                { textMessage != '' ? (
                                <Text style={{color:'#202020',fontSize:moderateScale(14)}}>{textMessage}</Text>
                                ) : null}
                                <TextField
                                    label='*First Name'
                                   
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={colors.Charcole}
                                    tintColor={'#202020'}
                                    onChangeText={(name) =>
                                      setname(name)}
                                />
                                <TextField
                                    label='Middle Name'
                                   
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={colors.Charcole}
                                    tintColor={'#202020'}
                                    onChangeText={(namem) =>
                                      setnamem(namem)}
                                />
                                <TextField
                                    label='*Last Name'
                                   
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={colors.Charcole}
                                    tintColor={'#202020'}
                                    onChangeText={(namel) =>
                                      setnamel(namel)}
                                />
                               <TextField
                                    label='Email Address'
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={colors.Charcole}
                                    tintColor={'#202020'}
                                    onChangeText={(email) =>
                                      setemail(email)}
                                />
                               
                               
                                <Text style={[style.label,{marginTop:moderateScale(15)}]}>*Date of Birth </Text> 
                                
                                <TouchableOpacity onPress={()=>setOpen(true)}  style={style.dob}>
                                  <Text style={style.dobtext}>Select Date</Text> 
                                  <Text style={style.inputdate}>{selectdate}</Text>
                                  <MaterialCommunityIcons name='calendar' size={30} style={{ color:colors.Golden}} /> 
                                </TouchableOpacity>
                                <DatePicker
                                 mode='date'
                                 minimumDate={new Date("1900-12-31")}
                                 maximumDate={new Date(maxdate)}
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
                                

                                <Text style={style.label}>*Where do you stay? </Text> 

                                <Text style={style.labelsub}> </Text> 
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
                                <Text style={style.labelsub}> </Text> 

                                <MultiSelect
                                    hideTags
                                    items={state}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={setdata}
                                    selectedItems={[statsvl]}
                                    selectText="Select State"
                                    searchInputPlaceholderText="Search Items..."
                                    tagRemoveIconColor="#CCC"
                                    tagBorderColor="#CCC"
                                    tagTextColor="#CCC"
                                    selectedItemTextColor="#CCC"
                                    selectedItemIconColor="#CCC"
                                    itemTextColor="#000"
                                    displayKey="name"
                                    searchInputStyle={{color: '#CCC'}}
                                />
                                
                                <Text style={style.labelsub}></Text> 
                                <MultiSelect
                                    hideTags
                                    items={city}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={setcitydata}
                                    selectedItems={[cityvl]}
                                    selectText="Select City"
                                    searchInputPlaceholderText="Search Items..."
                                   // onChangeInput={(text) => console.log(text)}
                                    tagRemoveIconColor="#CCC"
                                    tagBorderColor="#CCC"
                                    tagTextColor="#CCC"
                                    selectedItemTextColor="#CCC"
                                    selectedItemIconColor="#CCC"
                                    itemTextColor="#000"
                                    displayKey="name"
                                    searchInputStyle={{color: '#CCC'}}
                                />
                                
                                <TextField
                                    label='Locality'
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={colors.Charcole}
                                    tintColor={'#202020'}
                                    onChangeText={(address) =>
                                      setaddress(address)}
                                />
                                
                                <Text style={style.labelhead}>{'My Preferences'}</Text> 
                                
                                <Text style={style.label}>{'I am retired from my work.'} </Text>
                                <MultiSelect
                                    hideTags
                                    items={[
                                    {id: 'YES', name: 'YES', },
                                    {id: 'NO', name: 'NO', },
                                    ]}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={setretireddata}
                                    selectedItems={[retired]}
                                    selectText="Select"
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
                                    items={[
                                    {id: 'Alone', name: 'Alone', },
                                    {id: 'With My Spouse', name: 'With My Spouse', },
                                    {id: 'With My Spouse & Kids', name: 'With My Spouse & Kids', },
                                    {id: 'Other', name: 'Other', },
                                    ]}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={setstaydata}
                                    selectedItems={[stay]}
                                    selectText="Select"
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
                                  
                                 <Text style={style.label}>Some areas of my interest are </Text> 
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
                                  <Text style={style.label}>{'My Preferred Language'} </Text>
                                  <MultiSelect
                                      hideTags
                                      items={lang}
                                      single
                                      uniqueKey="id"
                                      onSelectedItemsChange={setlangdata}
                                      selectedItems={[langs]}
                                      selectText="Select"
                                      searchInputPlaceholderText="Search Language"
                                      tagRemoveIconColor="#CCC"
                                      tagBorderColor="#CCC"
                                      tagTextColor="#CCC"
                                      selectedItemTextColor="#CCC"
                                      selectedItemIconColor="#CCC"
                                      itemTextColor="#000"
                                      displayKey="name"
                                      searchInputStyle={{color: '#CCC'}}
                                />
                                
                                <View style={style.btn}>
                                    <TouchableOpacity onPress={()=>submitdata()}>
                                        <Text style={style.txtstyle3}>{'COMPLETE PROFILE'}</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                            </ScrollView>
                           
                            

                        </View>
                    </SafeAreaView>
            </ImageBackground>
        </View>
    )
}