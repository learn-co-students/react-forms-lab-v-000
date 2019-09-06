import React from "react";
import { expect } from "chai";
import sinon from "sinon";
import { configure, shallow, mount } from "enzyme";
import App from "../src/App";
import LoginForm from "../src/components/LoginForm";
import { isValueInState, noop } from "./util";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<LoginForm />", () => {
  describe("Saving input values in state", () => {
    it("should save the username in state when the input changes", () => {
      const wrapper = shallow(<LoginForm />);

      wrapper.find("#username").simulate("change", {
        target: { name: "username", id: "username", value: "johndoe" }
      });
      expect(
        isValueInState(wrapper.state(), "johndoe"),
        "The username input value is not being saved in the state"
      ).to.be.true;
    });

    it("should save the password in state when the input changes", () => {
      const wrapper = shallow(<LoginForm />);
      wrapper.find("#password").simulate("change", {
        target: {
          name: "password",
          id: "password",
          value: "supersecret"
        }
      });
      expect(
        isValueInState(wrapper.state(), "supersecret"),
        "The password input value is not being saved in the state"
      ).to.be.true;
    });
  });

 
  });
