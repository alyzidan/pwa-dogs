import  firebase  from '../../configFirebase.js';
import router from '../../router';

export default (url, comment, author) => {
    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(firebase.db);
    firebase.db.collection('dogs').add({
        url,
        comment,
        info:`posted By ${author != '' ? author : 'Unknown'} on ${days[d.getDay()]}`,
        created_at: d.getTime()
    }).then(
        router.go(-1)
    )


 

}