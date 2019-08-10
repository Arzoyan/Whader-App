import React, { Component } from 'react';
import { connect } from "react-redux";
import selector from "../../services/selector";
// import { getUser } from "../../modules/auth/Actions";

class WhaderShow extends Component {

    render() {

        return (
            <div className={"dashboard"}>
                <h2>
                whader-App
                </h2>



            </div>
        );
    }
}

const mapStateToProps = state => selector(state, ["auth"]);

export default connect(mapStateToProps)(WhaderShow);