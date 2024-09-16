import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return ( 

        //use Link to Go between pages
        <>
        
        <Menu  mode="inline" style={{width:100,backgroundColor:'#3c1764',textAlign:'center',marginTop:50
        }}>
            <Menu.Item>
            <Link to='/' style={{color:'white'}}>Home</Link>
            </Menu.Item>
            <Menu.Item>
            <Link to='/profile' style={{color:'white'}}>Profile</Link>
            </Menu.Item>
            <Menu.Item>
            <Link to='/settings' style={{color:'white'}}>Settings</Link>
            </Menu.Item>
            <Menu.Item>
            <Link to='/about' style={{color:'white'}}>About</Link>
            </Menu.Item>
            <Menu.Item>
            <Link to='/contact' style={{color:'white'}}>Contact</Link>
            </Menu.Item>
        </Menu>
        </>
     );
}
 
export default Sidebar;