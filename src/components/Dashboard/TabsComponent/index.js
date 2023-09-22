import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './style.css'
import Grid from '../Grid';
import List from '../List';
import { NavLink } from 'react-router-dom';
import WatchListContext from '../../../context/WatchListContext';

const TabsComponent = ({ coins }) => {

  const [value, setValue] = React.useState('grid');
  let { handleWatchlist, watchData } = React.useContext(WatchListContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9"
      }
    }
  })

  const style = {
    color: "var(--white)",
    fontWeight: 600
  }
  return (
    <div sx={{ width: '100%', typography: 'body1' }}>
      <ThemeProvider theme={theme}>

        <TabContext value={value}>
          <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant="fullWidth">
              <Tab label="Grid" value="grid" sx={style} />
              <Tab label="List" value="list" sx={style} />
            </TabList>
          </div>
          <TabPanel value="grid">
            <div className='flex-grid'>
              {

                coins && coins.map((coin, i) => {
                  if (watchData.length > 0) {
                    for (let p = 0; p < watchData.length; p++) {
                      if (watchData[p] == coin.id) {
                        return <Grid key={i} coin={coin} handleWatchlist={handleWatchlist} watchStatus={true} />
                      }
                    }
                    return <Grid key={i} coin={coin} handleWatchlist={handleWatchlist} watchStatus={false} />
                  } else {
                    return <Grid key={i} coin={coin} handleWatchlist={handleWatchlist} watchStatus={false} />
                  }
                })

              }
            </div>
          </TabPanel>
          <TabPanel value="list">

            <NavLink to={`/coin/${coins.id}`}>
              <table className='list-table'>
                {
                  coins && coins.map((coin, i) => {
                    if (watchData.length > 0) {
                      for (let p = 0; p < watchData.length; p++) {
                        if (watchData[p] == coin.id) {
                          return <List key={i} coin={coin} handleWatchlist={handleWatchlist} watchStatus={true} />
                        }
                      }
                      return <List key={i} coin={coin} handleWatchlist={handleWatchlist} watchStatus={false} />
                    } else {
                      return <List key={i} coin={coin} handleWatchlist={handleWatchlist} watchStatus={false} />
                    }
                  })
                }
              </table>
            </NavLink>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default TabsComponent;