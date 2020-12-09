import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Test Setup', () => {
  it('should run before all tests', () => {
    expect(true).toBe(true);
  })
})