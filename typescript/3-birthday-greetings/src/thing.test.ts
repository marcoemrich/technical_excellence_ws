import { describe, expect, it } from "vitest";
import { Thing } from "./thing";

describe("Thing", () => {
  it("has a name", () => {
    const thing = new Thing("foo");
    expect(thing.name).toBe("foo");
  });
});
