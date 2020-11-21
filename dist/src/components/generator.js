"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const exports_1 = __importDefault(require("./generatorChildren/exports"));
const initVal = {
    input: '',
    type: '',
    percent: "0"
};
const Generator = () => {
    const [values, setValues] = react_1.useState([]);
    function addInput() {
        setValues([...values, initVal]);
    }
    //update input value when a user types in new value
    function handleChange(e, i) {
        let value = e.target.value;
        console.log(values);
        setValues(prevValue => [...prevValue.slice(0, i), { ...values[i], input: value }, ...prevValue.slice(i + 1)]);
    }
    //update option type when a new data type is selected
    function handleOption(e, i) {
        let value = e.target.value;
        setValues(prev => [...prev.slice(0, i), { ...values[i], type: value }, ...prev.slice(i + 1)]);
        console.log(values);
    }
    //update the % empty value when percent is changed
    function handlePercent(e, i) {
        let value = e.target.value;
        //for testing use this:
        // setValues(prev=> {
        //   let val = [...prev.slice(0, i),{...values[i], percent:(value)},...prev.slice(i + 1)]
        //   console.log(val)
        //   return val
        // })
        setValues(prev => [...prev.slice(0, i), { ...values[i], percent: (value) }, ...prev.slice(i + 1)]);
        console.log(values);
    }
    return (react_1.default.createElement("div", { id: "gencontainer" },
        react_1.default.createElement("h1", { id: "gennytitle" }, " Dummy Data Generator "),
        values.map((el, i) => {
            return (react_1.default.createElement("div", { key: i },
                react_1.default.createElement("input", { value: el.input, placeholder: "Field Name", onChange: (e) => handleChange(e, i) }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", null, "Choose a Data Type")),
                react_1.default.createElement("select", { id: "dataType", onChange: (e) => handleOption(e, i) },
                    react_1.default.createElement("option", { value: "first_name" }, "Frist Name"),
                    react_1.default.createElement("option", { value: "last_name" }, "Last Name"),
                    react_1.default.createElement("option", { value: "st_address" }, "Street Address"),
                    react_1.default.createElement("option", { value: "city" }, "City"),
                    react_1.default.createElement("option", { value: "state" }, "State"),
                    react_1.default.createElement("option", { value: "zip_code" }, "Zip Code"),
                    react_1.default.createElement("option", { value: "phone_number" }, "Phone Number"),
                    react_1.default.createElement("option", { value: "email" }, "Email"),
                    react_1.default.createElement("option", { value: "image" }, "Image"),
                    react_1.default.createElement("option", { value: "username" }, "Username"),
                    react_1.default.createElement("option", { value: "password" }, "Password")),
                react_1.default.createElement("div", { id: "percentagediv" },
                    react_1.default.createElement("input", { onChange: (e) => handlePercent(e, i), type: 'number', min: '0', max: '100', value: el.percent, id: "empty", placeholder: "0" }),
                    react_1.default.createElement("h3", null, "% Empty"))));
        }),
        react_1.default.createElement("button", { onClick: addInput, id: "addColumn" }, " Add Another Column"),
        react_1.default.createElement(exports_1.default, null)));
};
exports.default = Generator;
//# sourceMappingURL=generator.js.map