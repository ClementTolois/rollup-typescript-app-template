
import Welcome from "@/core/Welcome";

describe("Should test the greetings", () => {
    it("Should console.log the greetings", () => {
        expect(Welcome.greetings()).toBe(undefined);
        expect(true).toBe(true);
    });
});