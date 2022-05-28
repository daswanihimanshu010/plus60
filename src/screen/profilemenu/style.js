import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
   
    imgStyle1: {
        
        height:'50@mvs',
        resizeMode:'contain',
        width:'100@ms',
    },
    imgStyle2: {  
        color:colors.Golden, 
    },
   
    imgStyle3: {
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },
   
    stylelogo:{
     
        height:'130@mvs',
        paddingHorizontal:'15@ms'
    },
    label:{
        fontSize:'15@ms',
        color:colors.Golden
    },
  
    card:{
        backgroundColor:colors.white,
        height:'580@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
        flex:1
    },
    hdr:{
        marginTop:'25@mvs',
        fontWeight:'bold',
        fontSize:'20@ms',
        color:colors.black,
    },
    logout:{
        alignItems:'center',
    },
    cardmenu:{
        backgroundColor:colors.Golden,
        alignSelf:'center',
        width:'90%',
        marginBottom:'25@mvs',
        alignItems:'center',
        paddingVertical:'12@ms',
        borderRadius:'15@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,

    },
    menutext:{
        fontSize:'15@ms',
        color:'#403f3a',
        fontWeight:'600'

    }
   
   
    
   
  
    
   
   
  
    
})