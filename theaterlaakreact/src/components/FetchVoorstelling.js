import axios from "axios"

export default function getVoorstellingInfo(){
    const data = axios.get('http://localhost:5044/api/Voorstelling')
    console.log(data)
    return data;
}