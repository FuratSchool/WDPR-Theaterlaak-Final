export const Reserveren = (props) => { 
    const { handleAddReservatie } = props;
    
    function addReservatie(){
      handleAddReservatie({
        id: 2,
        movie: 'The Godfather',
        date: '2022-02-01',
        selectedChairs: [1,2,3,4],
        price: 40.0
      });
    }
    return (
      <div>
        <button onClick={addReservatie}>Voeg toe aan winkelwagen</button>
      </div>
    );
  }
  export default Reserveren;