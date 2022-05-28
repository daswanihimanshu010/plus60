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
  
    stylelogo:{
        height:'130@mvs',
    },
    htmlview:{

    },
    card:{
        padding:'25@ms',
        flex:1,
        backgroundColor:colors.white,
        height:'680@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
        
    },
    hdr:{
        marginLeft:'15@ms',
        marginTop:'25@mvs',
        fontWeight:'bold',
        fontSize:'18@ms',
        color:colors.black
    },
   
    
})