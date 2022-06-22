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
import MultiSelect from 'react-native-multiple-select';
import BottamTab from '../../component/BottamTab';
import { moderateScale } from 'react-native-size-matters';
export default function Humanbookcreate({navigation,route}) {
    const [showModal, setShowModal] = useState(false);
    const [image, setimage] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }
    useEffect(() => {
        getwhomList();
        getdatauser();
        getserviceList();
      }, []);

    const [servicdes, setservicedes] = useState(route.params.item.description);
    const [servicelocation, setservicelocation] = useState(route.params.item.location); 
    const [serviceval, setserviceval] = useState(route.params.item.service_name);  
    const [whomeval, setwhomeval] = useState(route.params.item.for_whome);  
    const [typevals, settypevals] = useState(route.params.item.type);  
    const submitdata = async () =>{
        if (!serviceval.trim()) {
            ToastAndroid.show("Please select services",ToastAndroid.SHORT);
            return;
        }
        if (!whomeval.trim()) {
            ToastAndroid.show("Please select for whom",ToastAndroid.SHORT);
            return;
        }
        if (!typevals.trim()) {
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
        var formdata = new FormData();
        formdata.append("description", servicdes);
        formdata.append("location", servicelocation);
        formdata.append("for_whome", whomeval);
        formdata.append("service_name", serviceval);
        formdata.append("type", typevals);
        formdata.append("act", "edit_ineed");
        formdata.append("id",route.params.item.ii_id);
       
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
   
    const [whoms, setwhoms] = useState([]);  
    const [services, setservices] = useState([]);  
    const [types, settype] = useState([
        {name:'ONLINE'},
        {name:'OFFLINE'},
        {name:'ONLINE/OFFLINE'},
    ]);  
    const settypedata = async (e) => {
        settypevals(e[0]);
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
        setservices(json.data);
      
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
        setwhoms(json.data);
      
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
                            <Text style={style.hdr}>{'Edit your need'}</Text>
                        </View>
                        <View style={style.card}>
                        <ScrollView>

                            <View style={style.cardheader}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={style.cardheadertxt}>{'I need'}</Text>
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
                                    searchInputPlaceholderText="Search services"
                                    tagRemoveIconColor="#202020"
                                    tagBorderColor="#202020"
                                    tagTextColor="#202020"
                                    fontSize={moderateScale(15)}
                                    selectedItemTextColor="#202020"
                                    selectedItemIconColor="#202020"
                                    itemTextColor="#202020"
                                    displayKey="service_name"
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
                                    selectText={"For whom"}
                                    searchInputPlaceholderText="Search for whom"
                                    tagRemoveIconColor="#202020"
                                    tagBorderColor="#202020"
                                    tagTextColor="#202020"
                                    fontSize={moderateScale(15)}
                                    selectedItemTextColor="#202020"
                                    selectedItemIconColor="#202020"
                                    itemTextColor="#202020"
                                    displayKey="title"
                                    searchInputStyle={{color: '#202020'}}
                            />
                            <Text style={style.label}></Text> 
                            <MultiSelect
                                    hideTags
                                    items={types}
                                    single
                                    uniqueKey="name"
                                    onSelectedItemsChange={settypedata}
                                    selectedItems={[typevals]}
                                    selectText={"Type"}

                                    searchInputPlaceholderText="Search type"
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
                                    value={route.params.item.description}
                                    multiline
                                    style={style.input} 
                                    textColor={'#202020'}
                                    baseColor={'#202020'}
                                    tintColor={'#202020'}
                                    onChangeText={(servicdes) =>
                                        setservicedes(servicdes)}
                                />
                                <TextField
                                    value={route.params.item.location}
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
                                    <Text style={style.txtstyle3}>{'Edit need'}</Text>
                                 </TouchableOpacity>
                            </View>
                            </ScrollView>
                        </View>
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}