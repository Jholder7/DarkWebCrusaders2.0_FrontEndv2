import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabCards from './TabCards'

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
            <TabPanel value="one"><TabCards /></TabPanel>
            <TabPanel value="two">Item two</TabPanel>
            <TabPanel value="three">Item three</TabPanel>
            <TabPanel value="four">Item four</TabPanel>
            <TabPanel value="five">Item five</TabPanel>
            <TabPanel value="six">Item six</TabPanel>
            <TabPanel value="seven">Item seven</TabPanel>
      </TabContext>
    </Box>
  );
}