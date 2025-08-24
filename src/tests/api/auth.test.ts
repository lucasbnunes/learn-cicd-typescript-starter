import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

const mockApiKey = "abc123";

const headers: IncomingHttpHeaders = {
  authorization: `ApiKey ${mockApiKey}`,
};

describe("getAPIKey", () => {
  test("returns the api key", () => {
    const result = getAPIKey(headers);

    expect(result).toBe(mockApiKey);
  });

  test("returns null if the headers doesn't contain authorization", () => {
    const result = getAPIKey({ "x-test": "abc123" });

    expect(result).toBe(null);
  });

  test("returns null if 'ApiKey' string is not present", () => {
    const result = getAPIKey({ authorization: mockApiKey });

    expect(result).toBe(null);
  });
});
