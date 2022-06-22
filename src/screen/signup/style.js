import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
   
    
    phoneNumberView: {
        width: '100%',
        height: '40@ms',
        backgroundColor: 'white',
        marginVertical:'15@ms'
      },
    t_c_text:{
        fontSize:'14@ms',
        color:colors.Charcole,
      },modal:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
        
    },
    modalInner:{
        
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      t_c_text1:{
        fontSize:'14@ms',
        textDecorationLine: 'underline',
        lineHeight:'18@ms',
        color:colors.Charcole,
      },
    t_c:{
        marginTop:'10%',
        width:'100%',
        alignItems:'center',
      },
    stylelogo:{
        width:'100%',
        paddingVertical:'14@ms',
        alignItems:'center'
    },
    wrapp:{
        height:'78%',
    },
    btnback:{
        width:'55@ms',
        marginTop:'65@ms',
        height:'55@ms',
        backgroundColor:colors.Charcole,
        borderRadius:'55@ms',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',

    },
    headerstyle:{
        backgroundColor:colors.headerview,
        justifyContent:'center',
        alignItems:'center'

    },
    txtstyle1:{
        color:colors.whitelight,
        fontSize:'20@ms',
        fontWeight:'300',
        paddingVertical:'10@ms'
    },
    txtstyle3:{
        color:colors.Golden,
        fontSize:'17@ms',
        fontWeight:'300'
    },
    field:{
        width:'75%',
        alignSelf:'center',
        marginTop:'35@ms'
        
    },
    txtstyle2:{
        color:colors.Charcole,
        fontSize:'15@ms',
    },
    input:{
        width:'100%',
        height:'40@ms',
        borderBottomColor:colors.black,
        borderBottomWidth:1,
       // marginTop:'3@ms',
        marginBottom:'10@ms',
      
        // borderRadius:'8@ms',
       
    },
    btn:{
        width:'100%',
        marginTop:'25@ms',
        height:'45@ms',
        backgroundColor:colors.Charcole,
        borderRadius:'8@ms',
        justifyContent:'center',
        alignItems:'center',

    },




   
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        
      },
      imgStyle: {
        alignSelf : 'center',
        height:'60@ms',
        resizeMode:'contain',
        width:'60@ms',

    },
    imgStyle1: {
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
        marginTop:'-18@ms'
    },
    
})