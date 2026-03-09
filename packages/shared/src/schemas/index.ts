import { z } from "zod/v4";

export * from "./user";
export * from "./test";

export const TestSchema = z.object({
	id: z.string(),
	name: z.string(),
	bool: z.boolean(),
	arr: z.array(z.string()),
	imageId: z.string(),
	imageIds: z.array(z.string()),
});
