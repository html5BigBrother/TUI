import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { Button } from "../index";

describe("describe demo", () => {
  test("test demo", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "测试按钮",
      },
    });
    expect(wrapper.text()).toBe("测试按钮");
  });
});

describe("describe demo2", () => {
  test("test demo", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "测试按钮",
      },
    });
    expect(wrapper.text()).toBe("测试按钮");
  });
});
