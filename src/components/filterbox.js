import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./index.css";

function Filterbox(props) {
    
    const {filterAction, tags} = props;

    const filterUpdated = (newTags) => {
        filterAction(newTags);
    }

    const clearAll = () => {
        filterUpdated([])
    } 

    return (
        <>
            <ReactTagInput
                tags = {tags}
                maxTags = {10}
                editable = {true}
                readOnly = {false}
                removeOnBackspace = {true}
                onChange = {filterUpdated}
                placeholder={"Type..."}
            />
            <button className="clear-btn" onClick={clearAll}>Clear</button>
        </>
    )
}

export default Filterbox;