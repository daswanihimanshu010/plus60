import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
      //  alignItems:'center',
     //   justifyContent:'center',
       // backgroundColor:colors.white
    },
    stylelogo:{
        height:'22%',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapp:{
        height:'78%',
    //    backgroundColor:'red'
    },
    headerstyle:{
        height:'10%',
        backgroundColor:colors.headerview,
        justifyContent:'center',
        alignItems:'center'

    },
    label:{
        fontSize:'15@ms',
        color:'#202020',
        marginVertical:'8@ms',
        fontWeight:'bold'
    },
    labelhead:{
        alignSelf:'center',
        padding:'5@ms',
        fontSize:'15@ms',
        color:'#202020',
        marginVertical:'8@ms',
        fontWeight:'bold',
        borderColor:'#202020',
        borderWidth:1
    },
    txtstyle1:{
        color:colors.whitelight,
        fontSize:'20@ms',
        fontWeight:'300'
    },
    txtstyle3:{
        color:colors.Golden,
        fontSize:'16@ms',
        fontWeight:'300'
    },
    field:{
        width:'80%',
        alignSelf:'center',
        marginTop:'25@ms',
        flex:1
        
    },
    txtstyle2:{
        color:colors.Charcole,
        fontSize:'15@ms',
    },
    dob:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10@ms',

    },
    dobtext:{
        color:'#202020',
        fontSize:'14@ms'
    },
    inputdate:{
       fontSize:'14@ms',
        color:'#202020'
    },
    input:{
        width:'100%',
       
    },
    btn:{
        width:'80%',
        marginVertical:'15@ms',
        height:'45@ms',
        backgroundColor:colors.Charcole,
        borderRadius:'8@ms',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'


    }, modalInner1:{
        padding:'25@ms',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    modal:{
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



   
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        
      },
      imgStyle: {
        alignSelf : 'center',
        height:'50%',
        resizeMode:'contain',
        width:'40%',
       // marginTop:'10@ms'
    },
    imgStyle1: {
        
        height:'50%',
        resizeMode:'contain',
        width:'40%',
        alignSelf : 'center',
        marginTop:'-18@ms'
    },
    
})