import Select from "./Select";
import Input from "./Input";
import { useState } from "react";
import {baseURL, apiKey} from "./Utils";
import { useEffect } from "react";
import { useRef } from "react";
import "./Content.css";

export default function Content() {

    const [countryCodes, setCountryCodes] = useState([]);
    const [converted, setConverted] = useState();
    const [date, setDate] = useState("");
    const from = useRef("");
    const to = useRef("");
    const amount = useRef(0);
    

    useEffect(() => {
        fetch(`${baseURL}/${apiKey}/codes`)
        .then((res) => {
            return res.json()
        })
        .then((jsonData) => {
            const countryCodesArray = jsonData.supported_codes.map((item) => {
                return item[0]
            });
            setCountryCodes(countryCodesArray)
        })
        .catch((err) => {
            alert(`Failed to fetch country codes: ${err}`)
        })
    }, [])

    function currencyConvert() {
        if(amount.current.value <= 0) {
            return 
        }
        fetch(`${baseURL}/${apiKey}/pair/${from.current.value}/${to.current.value}/${amount.current.value}`)
        .then((res) => {
            return res.json()
        })
        .then((jsonData) => {
            setConverted(jsonData.conversion_result)
            setDate(new Date().toLocaleString())
        })
        .catch((err) => {
            alert(`Failed to convert currency: ${err}`)
        })
    }
    

    return (
        <div className="content">
            <div className="select from">
                <Select ref={from} optionValues={countryCodes} onChangeHandler={currencyConvert}/>
            </div>
            <div className="select to">
                <Select ref={to} optionValues={countryCodes} onChangeHandler={currencyConvert}/>
            </div>
            <div className="result">
                <p id="amount-text">Amount</p>
                <Input id="amount" type="number" ref={amount} onChangeHandler={currencyConvert}/>
                <p id="amount-currency">{amount.current.value} {from.current.value}</p>
                <p id="converted">{converted} {to.current.value}</p>
                <p id="date">{date}</p>
            </div>
        </div>
    )
}