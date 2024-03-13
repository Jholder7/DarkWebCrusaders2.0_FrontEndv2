// This is an example of content that need authentication
// before you can see it. This shouldn't be used but is here
// for backend testing and future reference if you guys need
// to implemented authentication foa component

import React from "react";
import { request, tokenErrorHandler } from '../../axios_helper';

export default class AuthContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            this.setState({data: response.data});
            console.log(response.data);
        }).catch ((e) => {
            tokenErrorHandler(e);
        })
    }

    render() {
        return (
           <div>
               {this.state.data && this.state.data.map((line) => <p>{line}</p>
               )}
           </div>
        );
    }
}
