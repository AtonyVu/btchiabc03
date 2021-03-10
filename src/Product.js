import React from 'react'
import Laptop from './Laptop'
import Phone from './Phone'
class Header extends React.Component 
{
    render(){
        return(
            <div>
                 <Phone/>
          <Laptop/>
            </div>
         
        )
    }
}
export default Header 