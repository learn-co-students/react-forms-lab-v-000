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


  describe("Calling `handleLogin` callback prop", () => {
    it("should call the prevent the default action when the form is being submitted", () => {
      let spy = sinon.spy();
      const wrapper = mount(<App />);
      wrapper.find("form").simulate("submit", { preventDefault: spy });

      expect(
        spy.calledOnce,
        "The default form action is not being prevented when the form is submitted"
      ).to.be.true;
    });


  });
});
