import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
      //  alignItems:'center',
     //   justifyContent:'center',
       // backgroundColor:colors.white
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
    phoneNumberView: {
        width: '100%',
        height: '40@ms',
        backgroundColor: 'white',
        marginVertical:'15@ms'
    },
    stylelogo:{ 
     //   height:'22%',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapp:{
        height:'78%',
    //    backgroundColor:'red'
    },
    headerstyle:{
        backgroundColor:colors.headerview,
        justifyContent:'center',
        alignItems:'center'

    },
    txtstyle11:{
        color:colors.Charcole,
        fontSize:'16@ms',
        alignSelf:'center'
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
        marginTop:'3@ms',
        marginBottom:'10@ms',
       // borderEndWidth:1,
        borderBottomColor:colors.black,
        borderBottomWidth:1,
     //  backgroundColor:'red',
       // borderRadius:'8@ms',
        // shadowColor:colors.shadow,
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity:  0.9,
        // shadowRadius: 2,
        // elevation: 6,
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
       // marginTop:'10@ms'
    },
    imgStyle1: {
        
        height:'95@ms',
        resizeMode:'contain',
        width:'105@ms',
        alignSelf : 'center',
        marginTop:'-18@ms'
    },
    
})