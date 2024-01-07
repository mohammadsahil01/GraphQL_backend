
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between", width:"full" }} className='p-2'>
        <div className='hover:cursor-pointer mt-1.5 font-bold'>
            <span>BlogBox</span>
          </div>
        <div>
          
            <Button 
            className='bg-white text-black rounded-3xl hover:bg-white hover:border border-slate-300 '
            onClick={()=>{navigate("/login")
              }}
            style={{ marginRight: 10 }}  >
              Login
            </Button>
            <Button 
            className='rounded-3xl'
            onClick={()=>{navigate("/signup")
              }}>
             Signup</Button>
  
        </div>
      </div>    
  )
}


