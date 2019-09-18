import { mimetypeFromExtname } from "./mimetype-from-extname";

describe("mimetypeFromExtname()", () => {

    //
    // Check if known mime types are mapped correctly
    //

    it("should png as image/png", () => {
        expect(mimetypeFromExtname(".png")).toBe("image/png");
    });

    it("should webp as image/webp", () => {
        expect(mimetypeFromExtname(".webp")).toBe("image/webp");
    });

    it("should jpeg as image/jpeg", () => {
        expect(mimetypeFromExtname(".jpeg")).toBe("image/jpeg");
    });

    it("should jpg as image/jpeg", () => {
        expect(mimetypeFromExtname(".jpg")).toBe("image/jpeg");
    });

    it("should svg as image/svg+xml", () => {
        expect(mimetypeFromExtname(".svg")).toBe("image/svg+xml");
    });

    //
    // Check if unknown mime types are mapped to nothing
    //

    it("should qwerty as undefined", () => {
        expect(mimetypeFromExtname("qwerty" as any)).toBe(undefined);
    });

    //
    // Check if random junk won't cause any problems
    // This is just to make sure that random junk from the interwebs doesn't
    // break the server too easily :).
    //

    it("should null as undefined", () => {
        expect(mimetypeFromExtname(null as any)).toBe(undefined);
    });

    it("should undefined as undefined", () => {
        expect(mimetypeFromExtname(undefined as any)).toBe(undefined);
    });

    it("should {} as undefined", () => {
        expect(mimetypeFromExtname({} as any)).toBe(undefined);
    });

});
