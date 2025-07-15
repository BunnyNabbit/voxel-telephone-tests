import { Level } from "./voxel-telephone/class/level/Level.mjs"

test("Level", () => {
	const level = new Level()
	expect(level).toBeInstanceOf(Level)
})
