import { MacroNode, nodeInput } from "@flyde/core";

export interface Comment2Config {
  content: string;
}

export const Comment2: MacroNode<Comment2Config> = {
  id: "Comment2",
  displayName: "Comment2",
  defaultStyle: {
    icon: "comment",
  },
  description: "A comment node for documentation purposes",
  runFnBuilder: () => {
    return () => {
      // This node does nothing when run
    };
  },
  definitionBuilder: (config) => {
    return {
      defaultStyle: {
        cssOverride: {
          fontSize: "10px",
          borderRadius: "0",
          fontFamily: "monospace",
          minHeight: "40px",
          padding: "6px 8px",
          textAlign: "left",
          fontWeight: "normal",
          display: "inline-flex",
          alignItems: "center",
        },
      },

      displayName: config.content,
      description: "Comment node",
      inputs: {
        never: nodeInput(), // this is a hack to make the node never trigger
      },
      outputs: {},
    };
  },
  defaultData: {
    content: "abcde",
  },
  editorConfig: {
    type: "custom",
    editorComponentBundlePath: "../dist/ui/Comment2.js",
  },
};
