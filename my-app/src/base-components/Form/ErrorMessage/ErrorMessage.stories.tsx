import { storiesOf } from "@storybook/react";
import * as React from "react";

import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";

import { wInfo } from "../../storybookUtils";

import { ErrorMessage } from "./ErrorMessage";

const stories = storiesOf("Form Components", module);
stories.addDecorator(withKnobs);

stories.add(
  "Error Message",
  wInfo()(() => (
    <>
      <div style={{ padding: "10px" }}>
        <ErrorMessage error={text("error", "Error message")} />
      </div>

      <div style={{ padding: "10px" }}>
        <ErrorMessage
          error="error"
          actionOnError={{
            conditionalError: "error",
            callToAction: "click",
            onClick: action("click")
          }}
        />
      </div>
    </>
  ))
);
