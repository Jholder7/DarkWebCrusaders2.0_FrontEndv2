import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabCards from './TabCards'
import javaBraceStyle from '../images/javaBraceStyle.png'

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Brace Style" />
                <Tab value="two" label="Brace Options" />
                <Tab value="three" label="Tab Options" />
                <Tab value="four" label="Formatting Options" />
                <Tab value="five" label="Indentation Options" />
                <Tab value="six" label="Padding Options" />
                <Tab value="seven" label="Object C Options" />
            </Tabs>
            <TabPanel value="one" >
              <TabCards 
              title="Java"
              img={javaBraceStyle}
              />
              <TabCards 
              title="Java"
              img={javaBraceStyle}
              />
            </TabPanel>
            <TabPanel value="two">
              <TabCards 
              title="Java"
              />
            </TabPanel>
            <TabPanel value="three">
              <TabCards  
              title="Java"/>
            </TabPanel>
            <TabPanel value="four">
              <TabCards  
              title="Java"/>
            </TabPanel>
            <TabPanel value="five">
              <TabCards  
              title="Java"/>
            </TabPanel>
            <TabPanel value="six">
              <TabCards  
              title="Java"/>
            </TabPanel>
            <TabPanel value="seven">
              <TabCards  
              title="Java"/>
            </TabPanel>
      </TabContext>
    </Box>
  );
}