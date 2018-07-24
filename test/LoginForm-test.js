import React from "react";
import { expect } from "chai";
import sinon from "sinon";
import { shallow } from "enzyme";

import LoginForm from "../src/components/LoginForm";
import { isValueInState, noop } from "./util";

describe("<LoginForm />", () => {
  const spy = sinon.spy();

  afterEach(() => {
    spy.reset();
  });

  describe("Saving input values in state", () => {
    it("should save the username in state when the input changes", () => {
      const wrapper = shallow(<LoginForm />);
      wrapper.find("#test-username").simulate("change", {
        target: { name: "username", id: "test-username", value: "johndoe" },
      });
      expect(
        isValueInState(wrapper.state(), "johndoe"),
        "The username input value is not being saved in the state"
      ).to.be.true;
    });

    it("should save the password in state when the input changes", () => {
      const wrapper = shallow(<LoginForm />);
      wrapper.find("#test-password").simulate("change", {
        target: {
          name: "password",
          id: "test-password",
          value: "supersecret",
        },
      });
      expect(
        isValueInState(wrapper.state(), "supersecret"),
        "The password input value is not being saved in the state"
      ).to.be.true;
    });
  });


});
