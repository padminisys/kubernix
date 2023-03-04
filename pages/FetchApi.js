import React , {useState , useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'username', headerName: 'Username', width: 500 },
  { field: 'name', headerName: 'Name', width: 600 },
  { field: 'email', headerName: 'Email', width: 600 }
]

const FetchApi = () => {

    const [user ,setUser] = useState([]);

    const fethData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return setUser(data);
    }

    useEffect(() =>{
      fethData();
    },[])

   
  return (
    <>
   <div style={{ height: 700, width: '100%' }}>
  <h3 style={{color:"darkmagenta",marginTop:"2rem",display:"flex",alignItems:"center",justifyContent:"center"}}>Fetching data using fake Api</h3>
     <DataGrid
       rows={user}
       columns={columns}
       pageSize={10}
     />
   </div>
    </>
  );
};

export default FetchApi;
