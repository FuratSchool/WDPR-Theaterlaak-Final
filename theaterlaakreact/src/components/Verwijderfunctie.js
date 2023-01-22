function Verwijderfunctie(id){
    fetch('http://localhost:5044/api/Groep' + "/" + id, {
      method: 'DELETE'
    }).then(() => {
       console.log('removed');
       window.location.reload(false);
    }).catch(err => {
      console.error(err)
    })} export default Verwijderfunctie