
import { Button } from '../ui/button';

export default function Navbar() {
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
            style={{ marginRight: 10 }} onClick={()=>{}}  >
              Login
            </Button>
            <Button 
            className='rounded-3xl'
            onClick={()=>{
              }}>
             Signup</Button>
  
        </div>
      </div>    
  )
}


