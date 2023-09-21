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
                <NavLink to="/">Home
                </NavLink>
                <NavLink to="/compare">Compare
                </NavLink>
                <NavLink to="/watchlist">Watchlist
                </NavLink>
                <NavLink to="/dashboard">Dashboard
                </NavLink>
            </div>
          </Drawer>
    </div>
  );
}