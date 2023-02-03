import { API_BASE_URL } from '../../../../apiConfig';



function Verwijderfunctie(id){
    fetch(`${API_BASE_URL}/api/Groep/${id}`, {
      method: 'DELETE'
    }).then(() => {
       console.log('removed');
       window.location.reload(false);
    }).catch(err => {
      console.error(err)
    })} export default Verwijderfunctie