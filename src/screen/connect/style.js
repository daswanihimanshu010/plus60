import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    searchbar:{
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:'25@ms',
        width:'95%',
        paddingHorizontal:'25@ms',
        paddingVertical:'5@ms',
        color:colors.Charcole
    },
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    imgStyle1: {
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },
   
    imgStyle3: {
        
        height:'38@ms',
        width:'38@ms',
        marginRight:'15@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },   cardheadertxt:{
        marginLeft:'6@ms',
        color:colors.black,
        fontSize:'14@ms',
        lineHeight:'25@ms',
        fontWeight:'400'
    },
    iconf:{color:'red'},

    modal:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }, cardheaderblb:{
        paddingTop:'25@mvs',
        marginBottom:'-8@ms',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
    },
    modalInner:{
        width: '320@ms',
        backgroundColor: 'white',
   
        borderRadius: '4@ms',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow:'hidden',
        paddingHorizontal:'12@ms',
        paddingVertical:'14@ms'
      },
      modalsubtitle:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'400',
        marginBottom:'2@ms'
      },
   
    stylelogo:{
        paddingHorizontal:'15@ms',
     //   height:'130@mvs',
    },
    cardheader:{
        paddingBottom:'25@mvs',
        marginTop:'30@ms',
        paddingHorizontal:'25@ms',
    },
    cardheader1:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginVertical:'15@ms'

    },
    cardtxt23:{
        fontSize:'12@ms',
        color:colors.black,
        marginVertical:'4@ms',
        marginHorizontal:'15@ms',
        fontWeight:'bold',
    },
    typebutton:{
        backgroundColor:colors.blacklight,
        fontSize:'14@ms',
        paddingVertical:'5@ms',
        paddingHorizontal:'12@ms',
        borderRadius:'25@ms'
    },
    card:{
        backgroundColor:colors.white,
        height:'680@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
    },
    hdr:{
        fontWeight:'bold',
        fontSize:'20@ms',
        color:colors.black
    },
  
    cardlist:{
        backgroundColor:'#FAFAFA',
        width:'155@ms',
       marginLeft:'15@ms',
        overflow:'hidden',
        marginBottom:'20@ms',
        padding:'14@ms',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'6@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,


    },
    cardtxt:{
      //  backgroundColor:'green'
      borderRadius:'15@ms',
      borderWidth:1
    },
    cardtxt1:{
        fontSize:'14@ms',
        fontWeight:'500',
        marginVertical:'5@ms',
        alignSelf:'center',
        color:'#7e807f'
    },
    cardtxt1add:{
        fontSize:'12@ms',
        fontWeight:'500',
        marginVertical:'5@ms',
        alignSelf:'center',
        color:colors.Charcole
    },
    cardtxt2:{
        fontSize:'14@ms',
        color:colors.black,
        marginVertical:'2@ms',
        marginHorizontal:'12@ms',
    },
    line:{
        borderBottomWidth:1,
        width:'88%',
        alignSelf:'center',
        marginBottom:'25@ms',
        borderBottomColor:colors.blacklight

    },
    round:{
        height:'55@ms',
        width:'55@ms',
        borderRadius:'40@ms',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
    },
    
   
   
   
    
   
  
    
   
   
  
    
})