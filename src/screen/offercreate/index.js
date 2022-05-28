import React, {useState, useRef, useContext, useEffect} from 'react';
import {ActivityIndicator, View,Text, Image, StatusBar,Modal,ToastAndroid} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextField } from 'react-native-material-textfield';
import config from '../../server/config';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'react-native-image-picker';
import { moderateScale } from 'react-native-size-matters';
import MultiSelect from 'react-native-multiple-select';
import BottamTab from '../../component/BottamTab';
import DropDownPicker from "react-native-custom-dropdown";
export default function Humanbookcreate({navigation,route}) {
    const [showModal, setShowModal] = useState(false);
    const [image, setimage] = useState(null);
    const [servicdes, setservicedes] = useState('');
    const [servicelocation, setservicelocation] = useState('');
    const [serviceval, setserviceval] = useState('');  
    const [whomeval, setwhomeval] = useState('');  
    const [typeval, settypeval] = useState('');  
    const [whoms, setwhoms] = useState([]);  
    const [services, setservices] = useState([]);  
    const [type, settype] = useState([
        {id:'ONLINE',name:'ONLINE'},
        {id:'OFFLINE',name:'OFFLINE'},
        {id:'ONLINE/OFFLINE',name:'ONLINE/OFFLINE'},
    ]); 
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
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
     

    
   
    const submitdata = async () =>{
        if (!serviceval.trim()) {
            ToastAndroid.show("Please select services",ToastAndroid.SHORT);
            return;
        }
        if (!whomeval.trim()) {
            ToastAndroid.show("Please select for whom",ToastAndroid.SHORT);
            return;
        }
        if (!typeval.trim()) {
            ToastAndroid.show("Please select type",ToastAndroid.SHORT);
            return;
        }
        if (!servicdes.trim()) {
            ToastAndroid.show("Please enter description",ToastAndroid.SHORT);
            return;
        }
        if (!servicelocation.trim()) {
            ToastAndroid.show("Please enter location",ToastAndroid.SHORT);
            return;
        }
       
        setShowModal(!showModal);
        const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
        formdata.append("description", servicdes);
        formdata.append("location", servicelocation);
        formdata.append("for_whome", whomeval);
        formdata.append("service_name", serviceval);
        formdata.append("type", typeval);
        formdata.append("act", "addineed");
        formdata.append("user_id",uid);
       
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
                    navigation.navigate('Offer') 
                }else{
                    setShowModal(false);
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
    
                
    
          })
    
    }

    
    
    const settypedata = async (e) => {
        console.log(e[0]);
        settypeval(e[0]);
    } 
    const setwhomedata = async (e) => {
        setwhomeval(e[0]);
    }
    const setserdata = async (e) => {
        setserviceval(e[0]);
    }
    const getserviceList = async () => {
        var formdata = new FormData();
        formdata.append("act", "ineed_services");
        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json();
        let arr = json.data.map((item,index)=>{
            item.name = item.service_name
            return {...item};
        })
        setservices(arr);
      
      }; 
      const getwhomList = async () => {
        var formdata = new FormData();
        formdata.append("act", "for_whom");
        var requestOptions = {
            method: 'POST',
            body: formdata,
        };
        const response = await fetch(config.serverURL, requestOptions);
        const json = await response.json();
        let arr = json.data.map((item,index)=>{
            item.name = item.title
            return {...item};
        })
        setwhoms(arr);
      
      }; 
     
      useEffect(() => {
        getwhomList();
        getdatauser();
        getintrest();
        getserviceList();
      }, []);
  
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
            {/* <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} > */}
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity  onPress={()=> navigation.navigate('Offer')} >
                                <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                            </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Offercreate'})}  >

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
                            <Text style={style.hdr}>{'Add Your Need'}</Text>
                        </View>
                        <View style={style.card}>
                        <ScrollView>

                            <View style={style.cardheader}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={style.cardheadertxt}>{'I NEED'}</Text>
                                </View>
                               
                            </View>
                            <View style={style.lbl}>

                            <MultiSelect
                                    hideTags
                                    items={services}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={setserdata}
                                    selectedItems={serviceval}
                                    selectText="Services"
                                    searchInputPlaceholderText="Search Services"
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
                            <Text style={style.label}></Text> 

                            <MultiSelect
                                    hideTags
                                    items={whoms}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={setwhomedata}
                                    selectedItems={whomeval}
                                    selectText={"For Whom"}
                                    searchInputPlaceholderText="Search For Whom"
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
                            <Text style={style.label}></Text> 

                            <MultiSelect
                                    hideTags
                                    items={type}
                                    single
                                    uniqueKey="id"
                                    onSelectedItemsChange={settypedata}
                                    selectedItems={[typeval]}
                                    selectText={"Type"}
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
                                    label='Description'
                                    multiline
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={'#202020'}
                                    tintColor={'#202020'}
                                    onChangeText={(servicdes) =>
                                        setservicedes(servicdes)}
                                />
                                <TextField
                                    label='Location'
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={'#202020'}
                                    tintColor={'#202020'}
                                    onChangeText={(servicelocation) =>
                                        setservicelocation(servicelocation)}
                                />
                                 <TouchableOpacity 
                                 onPress={()=>submitdata()}
                                 style={style.btn}>
                                    <Text style={style.txtstyle3}>{'ADD NEED'}</Text>
                                 </TouchableOpacity>
                            </View>
                            </ScrollView>
                        </View>
                       
                    </SafeAreaView>
            
                    <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}