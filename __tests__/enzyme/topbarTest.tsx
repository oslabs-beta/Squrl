import * as React from "react";
import TopNav from "../../src/pageContainers/TopNav";
import { shallow } from "enzyme";

describe ("SideNav testing", () => {

  let wrapper:any;

  beforeAll(() => {
    wrapper = shallow(<TopNav />)
  })

  it('Should render a <div> element', () => {
    expect(wrapper.find("div").length).toBe(1);
  })

  it('Should render a <ul> element', () => {
    expect(wrapper.find("ul").length).toBe(1);
  })

  it('Should render 3 <li> elements', () => {
    expect(wrapper.find("li").length).toBe(2);
  })

  it('Should render an <a> element', () => {
    expect(wrapper.find("a").length).toBe(1);
  })

  it("should render the type logo", () => {
    expect(wrapper.find("img").length).toBe(1);
  });

  it("should render the svg styling", () => {
    expect(wrapper.find("svg").length).toBe(1);
  });

})