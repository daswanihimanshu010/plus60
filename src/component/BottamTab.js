import React, { useEffect,useState } from 'react';
import {View, Text, Modal, TouchableOpacity,Button} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import colors from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BottamTab = props => {
  const [showModal, setShowModal] = useState(false);

  const {item,navigation} = props;

  const checklogin = async(e) => {
    
    const uid =await  AsyncStorage.getItem("u_id");
    if(uid != null){
      navigation.navigate(e);
    }else{
      
      if(e == 'About'){
        navigation.navigate(e);

      }else{
        if(e == 'HOME'){
          navigation.navigate('Onbording');
  
        }else{
          setShowModal(!showModal)

        }
 
      }
   
    }

  }

  return (
    <View style={{justifyContent:'flex-end',paddingVertical:moderateScale(18),borderTopColor:colors.blacklight,borderTopWidth:1,backgroundColor:colors.white}}>
        <Modal
         transparent={true}
         visible={showModal}
         animationType={'slide'}
          animationIn="slideInLeft"
    
         >
       
         <View  style={{backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,}}>
            <View  style={{
              width: moderateScale(320),
              backgroundColor: 'white',
              borderRadius: moderateScale(4),
              borderColor: 'rgba(0, 0, 0, 0.1)',
              overflow:'hidden',
              paddingHorizontal:moderateScale(12),
              paddingVertical:moderateScale(14),
            }}>
                <Ionicons name='alert-circle' style={{alignSelf:'center'}} color={colors.red} size={moderateScale(25)} />
                <Text style={[{ fontSize:moderateScale(14),
                                color:colors.Charcole,
                                fontWeight:'400',
                                alignSelf:'center',
                                marginVertical:moderateScale(10)}]}>{'Login or Signup first!'}</Text>
                <Button color={colors.Golden}            
                title='OK'
                onPress={()=>setShowModal(!showModal)}
                />
            </View>
         </View>

       </Modal>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={()=>checklogin('HOME')}>
          <AntDesign color={item.name == 'HOME' ? '#d4af37': '#010101'} name='home' size={moderateScale(25)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>checklogin('Notification')}>
          <EvilIcons  color={item.name == 'Notification' ? '#d4af37': '#010101'}  name='bell' size={moderateScale(30)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>checklogin('About')}>
          <AntDesign name='question' color={item.name == 'About' ? '#d4af37': '#010101'} size={moderateScale(25)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottamTab;
