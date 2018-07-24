import React from "react";
import { expect } from "chai";
import sinon from "sinon";
import { shallow } from "enzyme";

import PoemWriter from "../src/components/PoemWriter";
import { isValueInState } from "./util";

const INVALID_POEM = `${"word ".repeat(2)}
${"word ".repeat(5)}`;

const VALID_POEM = `${"word ".repeat(5)}
${"word ".repeat(3)}
${"word ".repeat(5)}`;

const VALID_POEM_WITH_EXTRA_WHITESPACE = `${"word ".repeat(5)}
  ${"word ".repeat(3)}
${"word ".repeat(5)}  `;

describe("<PoemWriter />", () => {
  const spy = sinon.spy();

  afterEach(() => {
    spy.reset();
  });


  });
