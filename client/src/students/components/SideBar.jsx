import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { sidebar_items } from '../../../utils/DummyData';
import { useCartContext } from '../../context/cart_context';

export default function SideBar() {
  const {total_items} = useCartContext();
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sidebar_items.map((item) => (
          <div key={item.id}>
            <ListItemButton>
              <ListItemIcon>
                 <AccountCircleIcon sx={{width:50,height:50}} /> 
              </ListItemIcon>
              <div className='flex flex-col'><ListItemText primary={item.name} />
              <p>{item.email}</p>
              </div>
            </ListItemButton>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {sidebar_items.map((item) => (
          <div key={item.id} className='flex flex-col pl-5'>
            <ListItemButton>             
              <ListItemText primary={item.mylearning} />
            </ListItemButton>
            <ListItemButton>             
              <ListItemText primary={item.mycart}/><span className='rounded-full px-2 bg-primary text-white'>{total_items}</span> 
            </ListItemButton>
            <ListItemButton>             
              <ListItemText primary={item.wishlist} />
            </ListItemButton>
            </div>
        ))}
      </List>
      
      <Divider />
      <List>
        {sidebar_items.map((item) => (
          <div key={item.id} className='flex flex-col pl-5'>
            <ListItemButton>             
              <ListItemText primary={item.instructor_dashboard} />
            </ListItemButton>
            <ListItemButton>             
              <ListItemText primary={item.notifications} />
            </ListItemButton>
            <ListItemButton>             
              <ListItemText primary={item.messages} />
            </ListItemButton>
            </div>
        ))}
      </List>
      <Divider />
      <List>
        {sidebar_items.map((item) => (
          <div key={item.id} className='flex flex-col pl-5'>
            <ListItemButton>             
              <ListItemText primary={item.help} />
            </ListItemButton>
            <ListItemButton>             
              <ListItemText primary={item.logout} />
            </ListItemButton>
            </div>
        ))}
      </List>
    </Box>
  );

  return (
    
      
        <React.Fragment key={"right"}>
          <Button sx={{color:"#BE123C",padding:0}} onClick={toggleDrawer("right", true)}><AccountCircleIcon /></Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
    
  );
}
