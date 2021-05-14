import React, {Component} from "react";
import './AboutSection.css'
import {connect} from "react-redux";
import MessageBox from "../../MyComponents/MessageBox";

import Draggable from 'react-draggable';

function mapReduxStateToReactProps(state){
    return{
        aboutSectionData:state.aboutSectionData
    };
}

class AboutSection extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataList:this.props.aboutSectionData.dataList
        }
    }

    render(){

        const dataList = this.state.dataList;
        let viewData=[];

        dataList.forEach(function (data){
            viewData.push(
                <div className="row row-add">
                    <div className="col-sm-12">
                        <div className="main_about text-center">
                            <MessageBox addClassName="aboutTitle" message={data.title}></MessageBox>
                            <div className="m-top-20">
                                <MessageBox addClassName="aboutContent" message={data.content}></MessageBox>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <>
                <section id="about" className="about bg-yellow roomy-80">
                    <div className="container container-add">

                        {viewData}

                    </div>
                </section>

                {/*<Draggable*/}
                {/*    axis="x"*/}
                {/*    handle=".handle"*/}
                {/*    defaultPosition={{x: 0, y: 0}}*/}
                {/*    position={null}*/}
                {/*    grid={[25, 25]}*/}
                {/*    scale={1}*/}
                {/*    onStart={this.handleStart}*/}
                {/*    onDrag={this.handleDrag}*/}
                {/*    onStop={this.handleStop}>*/}
                {/*    <div>*/}
                {/*        <div className="handle">Drag from here</div>*/}
                {/*        <div>This readme is really dragging on...</div>*/}
                {/*    </div>*/}
                {/*</Draggable>*/}

            </>
        )
    }
}
export default connect(mapReduxStateToReactProps) (AboutSection);