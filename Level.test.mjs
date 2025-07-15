import { Level } from "./voxel-telephone/class/level/Level.mjs"
import { NullChangeRecord } from "./voxel-telephone/class/level/changeRecord/NullChangeRecord.mjs"

describe("Level", () => {
	it("should initalize", () => {
		const level = new Level()
		expect(level).toBeInstanceOf(Level)
	})

	it("should set and get blocks", () => {
		const level = new Level([32, 32, 32], Buffer.alloc(32 * 32 * 32))
		level.changeRecord = new NullChangeRecord()
		const blocks = [
			{ position: [0, 0, 0], block: 1 },
			{ position: [1, 0, 0], block: 2 },
		]
		blocks.forEach((block) => level.setBlock(block.position, block.block))
		expect(level.getBlock([0, 0, 0])).toBe(1)
		expect(level.getBlock([1, 0, 0])).toBe(2)
		expect(level.getBlock([2, 0, 0])).toBe(0) // Default block
		expect(() => level.getBlock([32, 32, 32])).toThrow() // Out of bounds
	})
})
