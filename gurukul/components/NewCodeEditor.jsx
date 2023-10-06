import React, { useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import { languageOptions } from "../constants/languageOptions";
import { defineTheme } from "../lib/defineTheme";
import LanguageDropdown from "../components/LanguageDropdown";
import ThemeDropdown from "../components/ThemeDropdown";
import OutputWindow from "../components/OutputWindow";
import CustomInput from "../components/CustomInput";
import OutputDetails from "../components/OutputDetails";

const NewCodeEditor = () => {
  const [code, setCode] = useState("//Write your code here");
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [theme, setTheme] = useState({
    value: "cobalt",
    label: "Cobalt",
  });
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleThemeChange = (th) => {
    if (["light", "vs-dark"].includes(th.value)) {
      setTheme(th);
    } else {
      defineTheme(th.value).then(() => setTheme(th));
    }
  };

  const handleLanguageChange = (option) => {
    setLanguage(option);
  };

  const onCodeChange = (action, data) => {
    if (action === "code") {
      setCode(data);
    } else {
      console.warn("case not handled", action, data);
    }
  };

  useEffect(() => {
    defineTheme("oceanic-next").then(() => {
      setTheme({
        value: "oceanic-next",
        label: "Oceanic Next",
      });
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full justify-start px-4 mt-4">
      <div className="flex flex-row w-full justify-between md:justify-start">
        <div className="md:px-4 py-2 px-2 w-5/12 md:w-auto">
          <LanguageDropdown onSelectChange={handleLanguageChange} />
        </div>
        <div className="md:px-4 py-2 px-2 w-5/12 md:w-auto">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="md:flex flex-col w-full md:w-8/12 md:h-full h-96 justify-start items-end">
        <CodeEditor
          onChange={onCodeChange}
          language={language.value}
          theme={theme.value}
          code={code}
        />
      </div>
      <div className="w-full md:w-4/12 p-4 ml-auto">
        <OutputWindow outputDetails={outputDetails} />
        <div className="flex flex-col items-end">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
        </div>
        <OutputDetails outputDetails={outputDetails} />
      </div>
    </div>
  );
};

export default NewCodeEditor;
