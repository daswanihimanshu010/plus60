import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
      //  alignItems:'center',
     //   justifyContent:'center',
        backgroundColor:colors.white
    },
    imgStyle: {
        alignSelf : 'center',
        height:'80@ms',
        resizeMode:'contain',
        width:'160@ms',
        marginTop:'130@ms'
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        
      },
    imgStyle1: {
        
        height:'100@ms',
        resizeMode:'contain',
        width:'180@ms',
        alignSelf : 'center',
        marginTop:'-18@ms'
    },
    
})