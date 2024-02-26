import React from "react";
import "./FileExplorer.css"
import fileIcon from "./resources/file.svg"
import folder from "./resources/folder.svg"
import folderOpen from "./resources/folderOpen.svg"

class FileExplorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filesData: {},
            isExpanded: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            filesData: props.filesData
        }
    }

    render() {
        if (this.state.filesData.type === "file") {
            return (
                <div className="file">
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"/>
                    <link type="text/css" href="FileExplorer.css"/>
                    <h3 className="fileName"><img className="icon" src={fileIcon}
                                                  alt="fileIcon"/>{this.state.filesData.name}</h3>
                </div>
            );
        }

        let specIcon;
        if (this.state.isExpanded) {
            specIcon = folderOpen;
        } else {
            specIcon = folder;
        }

        return (
            <div className={this.state.filesData.type === "baseFolder" ? "folder baseFolder" : "folder"}>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"/>
                <link type="text/css" href="FileExplorer.css"/>
                <h3 className="folderName" onClick={() => {
                    this.setState({isExpanded: !this.state.isExpanded})
                }}>
                    <img className="icon" src={specIcon} alt="fileIcon"/>
                    {this.state.filesData.name}
                </h3>
                <div className="folderItems">
                    {
                        this.state.isExpanded && this.state.filesData.items.map((item) => <FileExplorer
                            filesData={item}/>)
                    }
                </div>
            </div>
        );
    }
}

export default FileExplorer;
