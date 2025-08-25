import { vi } from "vitest";

vi.mock("#imports", () => ({
  useHead: vi.fn(),
  definePageMeta: vi.fn(),
  useSeoMeta: vi.fn(),
}));
