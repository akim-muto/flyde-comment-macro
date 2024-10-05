import React, { useEffect, useState } from "react";
import { MacroEditorComp } from "@flyde/core";
import { Comment2Config } from "./Macro.flyde";
import { Callout } from "@blueprintjs/core";

export const MacroEditor: MacroEditorComp<Comment2Config> = ({
  value,
  onChange,
}) => {
  const [content, setContent] = useState(value.content);

  useEffect(() => {
    onChange({ content });
  }, [content, onChange]);

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your comment here (HTML supported)"
        rows={10}
        style={{ width: "100%", padding: "8px 6px" }}
      />
      <Callout intent="primary" icon={null}>
        HTML formatting is supported
      </Callout>
    </div>
  );
};

export default MacroEditor;
