import * as React from "react";
import SideNav from "../../src/pageContainers/SideNav";
import { configure, shallow } from "enzyme";

describe ("SideNav testing", () => {
  let wrapper:any;

  beforeAll(() => {
    wrapper = shallow(<SideNav />)
  })

  it('Should render a div element', () => {
    expect(wrapper.find("div").length).toBe(1);
  })

  it('Should render a nav element', () => {
    expect(wrapper.find("nav").length).toBe(1);
  })

  it('Should render a ul element', () => {
    expect(wrapper.find("ul").length).toBe(1);
  })

  it('Should render 1 li element for each nav item (4 total)', () => {
    expect(wrapper.find("li").length).toBe(4);
  })
})