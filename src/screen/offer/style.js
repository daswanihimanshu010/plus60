import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    requestcart:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    searchbar:{
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:'25@ms',
        width:'100%',
        paddingHorizontal:'15@ms',
        paddingVertical:'5@ms',
        fontSize:'12@ms'
    },
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    imgStyle1: {
        height:'60@mvs',
        resizeMode:'contain',
        width:'110@ms',
    },
   
    imgStyle3: {
        
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },
    cardheadertxt:{
        marginLeft:'6@ms',
        color:colors.black,
        fontSize:'14@ms',
        lineHeight:'25@ms',
        fontWeight:'400'
    },
    iconf:{color:'red'},
    stylelogo:{
        paddingHorizontal:'15@ms',
       // height:'130@mvs',
    },
    cardheader:{
        paddingVertical:'18@mvs',
        paddingHorizontal:'5@ms',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    cardheaderfilter:{
        paddingHorizontal:'25@ms',
        marginVertical:'18@ms',
        
    },
    cardheader1:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginVertical:'15@ms',
      width:'70%'

    },
    typebutton:{
        backgroundColor:colors.blacklight,
        fontSize:'14@ms',
        paddingVertical:'5@ms',
        paddingHorizontal:'20@ms',
        borderRadius:'25@ms'
    },
    card:{
        backgroundColor:colors.white,
        height:'680@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
    },
    modalsubtitle:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'400',
        marginBottom:'2@ms'
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
      modal:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    hdr:{
       
        fontWeight:'bold',
        fontSize:'20@ms',
        color:colors.black
    }, cardheaderblb:{
        paddingTop:'25@mvs',
        marginBottom:'-8@ms',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
    },
    cardlist:{
        backgroundColor:colors.listbg,
        paddingVertical:'12@ms',
        paddingHorizontal:'20@ms',
        width:'100%',
        alignSelf:'center',
        marginBottom:'12@mvs'

    },
    line:{
        borderBottomWidth:1,
        width:'100%',
        marginVertical:'10@ms',
        borderBottomColor:colors.blacklight
    },
    action:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardtxt:{
        width:'85%',
    },
    txt1:{
        fontWeight:'700',
        color:'#564e4e',
        fontSize:'15@ms'
    },
    address:{flexDirection:'row',marginTop:'6@ms'},
    roundimg:{
        width:'15%',
        
    },
    txt4:{
        color:colors.Charcole,
        fontSize:'18@ms',
        fontWeight:'bold',
    },
    txt41:{
        color:'#946D00',
        fontSize:'14@ms',
        fontWeight:'bold',
    },
    txt2:{
        color:'#b7aaaa',
        fontSize:'13@ms',
        marginTop:'5@ms',
        fontWeight:'500'
    }, 
    txt3:{
        color:colors.Charcole,
        fontSize:'16@ms',
        fontWeight:'300',
        marginBottom:'8@ms',
        marginTop:'2@ms'
    },
    cardtxt1:{
        fontSize:'14@ms',
    color:'black'
    },
    cardtxt12:{
        fontSize:'14@ms',
        color:'white',
        padding:'5@ms',
        backgroundColor:'green',
        borderRadius:'25@ms'
    },
    cardtxt2:{
        fontSize:'12@ms',
        marginLeft:'6@ms'
    },
  
    round:{
        backgroundColor:'black',
        width:'40@ms',
        height:'40@ms',
        borderRadius:'25@ms',
        overflow:'hidden'
    },
    
   
   
   
    
   
  
    
   
   
  
    
})