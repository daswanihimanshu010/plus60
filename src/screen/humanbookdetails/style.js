import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    mmrdp:{
        height:'25@ms',
        width:'25@ms',
        marginHorizontal:'5@ms',
        borderRadius:'25@ms',
        overflow:'hidden',
        borderWidth:1,
        borderColor:colors.Charcole,
        marginBottom:5

    },
    cardraiting:{
        flexDirection:'row',
        paddingHorizontal:'45@ms',
        justifyContent:'space-around',
        paddingVertical:'5@ms',
        marginBottom:'3@ms',
        borderBottomWidth:1,
        borderBottomColor:colors.Golden,
    },
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    commentsec:{
       marginVertical:'12@ms',
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:'25@ms',
        width:'95%',
        alignSelf:'center',
        flexDirection:'row',
        paddingHorizontal:'20@ms',
        justifyContent:'space-between'
    },
    commentrep:{
        marginVertical:'5@ms',
         borderWidth:1,
         borderColor:'#DFDFDF',
         borderRadius:'25@ms',
         width:'100%',
         alignSelf:'center',
         flexDirection:'row',
         paddingHorizontal:'8@ms',
         justifyContent:'space-between'
     },
    repsec:{
        marginLeft:'-8@ms',
        marginVertical:'8@ms',
         borderWidth:1,
         borderColor:'#DFDFDF',
         borderRadius:'25@ms',
         width:'98%',
         alignSelf:'center',
         flexDirection:'row',
         paddingHorizontal:'15@ms',
         justifyContent:'space-between'
     },
    commentspost:{
        color:colors.blue,
        fontSize:'15@ms',

    },
    searchbar:{
        width:'200@ms',
        color:colors.Charcole,
        fontWeight:'300',
        paddingHorizontal:'8@ms',
    },
    searchbarrep:{
        width:'150@ms',
        color:colors.Charcole,
        fontWeight:'300',
        paddingHorizontal:'5@ms',
    },
    header:{
        backgroundColor:colors.Golden,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'8@ms',
        paddingVertical:'12@ms'
    },
    headertitle:{
        fontSize:'18@ms',
        color:colors.Charcole,
        fontWeight:'bold'
    },
    videosec:{
        backgroundColor:colors.Charcole,
        width:'100%',
        height:'200@mvs',
        alignItems:'center'
    },
    detailssec1:{
        paddingHorizontal:'12@ms',
        paddingVertical:'5@ms'

    },
    detailssec:{
        paddingHorizontal:'12@ms',
        paddingBottom:'5@ms'
    },
    detailssectxt:{
        fontSize:'14@ms',
        color:colors.Charcole,
    },
    likesec:{
        justifyContent:'space-around',
        flexDirection:'row',
        paddingVertical:'4@ms',
        borderWidth:1,
        borderColor:colors.Golden
    },
    comments:{
        paddingHorizontal:'14@ms',
        paddingVertical:'12@ms',
        width:'90%',
        alignSelf:'center',
   
        borderRadius:'8@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        marginBottom:'12@mvs',
        flexDirection:'row'
    },
    commentsre:{
        paddingHorizontal:'14@ms',
        paddingVertical:'12@ms',
        width:'100%',
        alignSelf:'center',
   
        borderRadius:'8@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        marginBottom:'12@mvs',
        flexDirection:'row'
    },
    commentstxt:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'500' , 
    },
    pic:{
        height:'28@ms',
        width:'28@ms',
        borderRadius:'25@ms',
        marginRight:'8@ms',
        overflow:'hidden',
        borderWidth:1,
        borderColor:colors.Golden

    },
    commentstxtname:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'400' , 
    }
    
   
   
    
   
  
    
   
   
  
    
})