import * as React from "react";
import SideNav from "../../src/pageContainers/SideNav";
import { configure, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });

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

})