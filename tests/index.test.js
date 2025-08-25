// test/index.test.js
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Index from "../app/pages/index.vue";

// Mock Nuxt-specific imports
vi.mock("#app", () => ({
  useHead: () => {},
}));

describe("Index.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Index, {
      global: {
        stubs: {
          NuxtImg: {
            template: "<img />",
          },
          NuxtLink: {
            template: "<a><slot /></a>",
          },
          ConfirmLeaveModal: {
            template: "<div />",
          },
        },
      },
    });
  });

  it("renders hero section with correct heading", () => {
    expect(wrapper.text()).toContain("Let's Ride the Waves");
  });

  it("renders Learn More button with link", () => {
    const learnMore = wrapper.find("a");
    expect(learnMore.exists()).toBe(true);
    expect(learnMore.text()).toContain("Learn more");
  });

  it("renders Join Today button and triggers openModal", async () => {
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);

    await button.trigger("click");
    expect(wrapper.vm.showModal).toBe(true);
  });

  it("computes scrollProgress correctly", async () => {
    wrapper.vm.windowHeight = 1000;
    wrapper.vm.scrollY = 500;
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.scrollProgress).toBeCloseTo(0.33, 1);
  });

  it("applies dynamic heroStyles when scrolling", async () => {
    wrapper.vm.scrollY = 200;
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.heroStyles.transform).toContain("translateY");
  });

  it("scrollToTop scrolls container", async () => {
    const mockScroll = vi.fn();
    wrapper.vm.scrollContainer = { scrollTo: mockScroll };

    wrapper.vm.scrollToTop();
    expect(mockScroll).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("feature cards render correctly", () => {
    const features = wrapper.findAll(".grid > div");
    expect(features.length).toBe(wrapper.vm.features.length);
    expect(features[0].text()).toContain("Tidal Sets");
  });
});
