import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import ToggleButton from './ToggleButton'
import { useLocalStorage } from "@uidotdev/usehooks";
import "./TabCards.css";




export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
    const [settings, saveSettings] = useLocalStorage("settings", [])
    document.settings = settings;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    function addSetting(setting) {
        saveSettings([setting]);
        console.log(setting);
    }

    return (
    <Box className="containingBox">
        <TabContext value={value}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Visual Style" />
                <Tab value="two" label="Other Settigns" />
            </Tabs>
            <TabPanel value="one" className="tabContainer" >
                <ToggleButton onClick={() => {addSetting("3Allman")}} title="Allman Style" initialState={settings.includes("3Allman")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar)\n" +
                    "    {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Java")}} title="Java Style" initialState={settings.includes("3Java")} preview={"int Foo(bool isBar) {\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    } else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3KR")}} title="Kernighan & Ritchie Style" initialState={settings.includes("3KR")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    } else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Stroustrup")}} title="Stroustrup Style" initialState={settings.includes("3Stroustrup")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Whitesmith")}} title="Whitesmith Style" initialState={settings.includes("3Whitesmith")} preview={"int Foo(bool isBar)\n" +
                    "    {\n" +
                    "    if (isBar)\n" +
                    "        {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "        }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "    }"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3VTK")}} title="VTK (Visualization Toolkit) Style" initialState={settings.includes("3VTK")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar)\n" +
                    "        {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "        }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Ratliff")}} title="Ratliff Style" initialState={settings.includes("3Ratliff")} preview={"int Foo(bool isBar) {\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "        }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "    }"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3GNU")}} title="GNU Style" initialState={settings.includes("3GNU")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar)\n" +
                    "        {\n" +
                    "            bar();\n" +
                    "            return 1;\n" +
                    "        }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Linux")}} title="Linux Style" initialState={settings.includes("3Linux")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "        if (isFoo) {\n" +
                    "                bar();\n" +
                    "                return 1;\n" +
                    "        } else\n" +
                    "                return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Horstmann")}} title="Horstmann Style" initialState={settings.includes("3Horstmann")} preview={"int Foo(bool isBar)\n" +
                    "{   if (isBar)\n" +
                    "    {   bar();\n" +
                    "        return 1;\n" +
                    "    }\n" +
                    "    else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3OTBS")}} title="One True Brace Style" initialState={settings.includes("3OTBS")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isFoo) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    } else {\n" +
                    "        return 0;\n" +
                    "    }\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Google")}} title="Google Style" initialState={settings.includes("3Google")} preview={"int Foo(bool isBar) {\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    } else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Mozilla")}} title="Mozilla Style" initialState={settings.includes("3Mozilla")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    } else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3WebKit")}} title="WebKit Style" initialState={settings.includes("3WebKit")} preview={"int Foo(bool isBar)\n" +
                    "{\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1;\n" +
                    "    } else\n" +
                    "        return 0;\n" +
                    "}"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Pico")}} title="Pico Style" initialState={settings.includes("3Pico")} preview={"int Foo(bool isBar)\n" +
                    "{   if (isBar)\n" +
                    "    {   bar();\n" +
                    "        return 1; }\n" +
                    "    else\n" +
                    "        return 0; }"} language="csharp"
                              supportedLanguages="Java, C#"/>
                <ToggleButton onClick={() => {addSetting("3Lisp")}} title="Lisp Style" initialState={settings.includes("3Lisp")} preview={"int Foo(bool isBar) {\n" +
                    "    if (isBar) {\n" +
                    "        bar();\n" +
                    "        return 1; }\n" +
                    "    else\n" +
                    "        return 0; }"} language="csharp"
                              supportedLanguages="Java, C#"/>
            </TabPanel>
            <TabPanel value="two">
                <button onClick={() => {
                    document.appContext.openNewTab(0, null,   "Blank.txt", "txt");
                }}>Open Blank Tab</button>
            </TabPanel>
      </TabContext>
    </Box>
  );
}