describe("project test suite", () => {
  test("Jest test runner is working", () => {
    expect(true).toBe(true);
  });

  test("the React mount element can exist in the document", () => {
    document.body.innerHTML = '<div id="root"></div>';

    expect(document.getElementById("root")).not.toBeNull();
  });
});
