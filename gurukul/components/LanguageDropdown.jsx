import React from "react"
import Select from "react-select"
import { customStyles } from "../constants/customStyles"
import { languageOptions } from "../constants/languageOptions"

const LanguageDropdown = ({ onSelectChange }) => {
    return(
        <Select
            placeholder = "Select Language"
            options = {languageOptions}
            defaultValue = {languageOptions[0]}
            styles = {customStyles}
            onChange = {(selectedOption) => onSelectChange(selectedOption)}
        ></Select>  
    );
};

export default LanguageDropdown;