"use client";

import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebounce } from "use-debounce";
import { roastCode } from "@/helper/Roaster";
import { showRoastToast } from "@/helper/showRoastToast";

function MainPageComponent() {
  const [language, setLanguage] = useState<string>("javascript");
  const [realTimeCode, setRealTimeCode] = useState<string | undefined>(
    "// Get your code roasted"
  );
  const [code] = useDebounce<string | undefined>(realTimeCode, 200);
  const [existingRoasts, setExistingRoasts] = useState<string[]>([""]);

  useEffect(() => {
    const roasts = roastCode(code);
    const newRoasts = roasts.filter((roast) => !existingRoasts.includes(roast));
    newRoasts.forEach((roast) => {
      showRoastToast(roast);
    });
    setExistingRoasts((prevRoasts) => [...prevRoasts, ...newRoasts]);

    console.log("Roasted Code: ", roastCode(code));
  }, [code]);

  return (
    <main>
      <nav className="w-full h-16 bg-slate-800 flex flex-row justify-between items-center mx-auto">
        <div className="text-slate-200 text-2xl font-bold ml-4">
          International Code Roaster
        </div>
        <div className="flex flex-row items-center mr-4">
          <Select defaultValue={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px] bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 focus-within:ring-2 focus-within:ring-amber-600 focus-within:border-amber-600">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
      <Editor
        height="100vh"
        language={language}
        defaultLanguage={language}
        defaultValue="// Get your code roasted"
        options={{
          selectOnLineNumbers: true,
        }}
        theme="vs-dark"
        onChange={(value) => {
          setRealTimeCode(value);
        }}
      />
    </main>
  );
}

export default MainPageComponent;
