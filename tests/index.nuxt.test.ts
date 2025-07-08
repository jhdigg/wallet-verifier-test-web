import { describe, it, expect, vi } from "vitest";
import { config, mount } from "@vue/test-utils";
import Index from "../pages/index.vue";

describe("Index", () => {
  it("renders the title", () => {
    const wrapper = mount(Index);
    expect(wrapper.find("h1").text()).toBe("Strumpsorteringscentralen");
  });

  it("shows initial loading state", () => {
    const wrapper = mount(Index);
    expect(wrapper.find(".status-value").text()).toBe("Offline");
  });

  it("calls the API on mount", () => {
    vi.spyOn(global, "$fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: "test" }),
    } as Response);

    mount(Index);

    expect(global.$fetch).toHaveBeenCalledWith("/api/verifier-status");
  });
});
