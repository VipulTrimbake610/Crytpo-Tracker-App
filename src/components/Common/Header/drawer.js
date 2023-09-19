import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import './style.css';
import { NavLink } from 'react-router-dom';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  


  return (
    <div>
      
          <IconButton onClick={()=>setState(true)}>
            <MenuRoundedIcon style={{color:"var(--grey)",fontSize:"2rem"}}/>
            </IconButton>
          <Drawer
            anchor={"right"}
            open={state}
            onClose={()=>setState(false)}
          >
           <div className="drawer-div">
                <NavLink to="/">
                    <p className="link">Home</p>
                </NavLink>
                <NavLink to="/compare">
                    <p className="link">Compare</p>
                </NavLink>
                <NavLink to="/watchlist">
                    <p className="link">Watchlist</p>
                </NavLink>
                <NavLink to="/dashboard">
                    <p className="link">Dashboard</p>
                </NavLink>
            </div>
          </Drawer>
    </div>
  );
}