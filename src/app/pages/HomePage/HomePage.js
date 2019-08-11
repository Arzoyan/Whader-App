import React, { Component } from 'react';
import { connect } from "react-redux";
import selector from "../../services/selector";
import { getCurrentWeather, thisWeek } from "../../modules/auth/Actions";
import moment from "moment";
import DropdownCreator from "../../../components/DropdownCreator";


class HomePage extends Component {

    componentDidMount() {
        let defaultWeek = []
        for (let i = 0; i < 7; i++) {
            if ((new Date().getDate() + i) > 30) {
                defaultWeek.push((new Date().getDate() + i - 30))
            } else {
                defaultWeek.push(new Date().getDate() + i)
            }
        }

        this.props.dispatch(thisWeek(defaultWeek))
        this.props.dispatch(getCurrentWeather())
    }
    gago(e) {
        console.log("eeeeeeeeeee", e)
    }


    render() {
        console.log(this.props, "gagik ")
        return (
            <div className={"dashboard"}>
                <div>
                    <h1 onClick={(e) => { this.gago(moment().format("dd, MM DD")) }} >  {moment().format("ddddd, MM DD")}
                    </h1>
                </div>

                <div>
                    {
                        this.props.thisWeek.length > 0 ? this.props.thisWeek.map(e => {
                            return <DropdownCreator key={e} day={e} />
                        }) : null
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => selector(state, ["auth"]);

export default connect(mapStateToProps)(HomePage);