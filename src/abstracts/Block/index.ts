import { BlockInterface } from '../../interfaces/Block'
import { BlockCategory } from '../../types/BlockCategory'
import { DataBlockInterface } from '../../interfaces/DataBlock'
import { NormalBlockInterface } from '../../interfaces/NormalBlock'
import { UseTarget } from '../../classes/UseTarget'

/*
 * Block class.
 */
export abstract class Block extends UseTarget implements BlockInterface {
  /**
   * ID.
   */
  id!: string

  /**
   * X.
   */
  x!: number

  /**
   * Y.
   */
  y!: number

  /**
   * Opcode category.
   */
  private opcodeCategory: {
    tester: RegExp
    category: BlockCategory
  }[] = [
    {
      tester: /^motion/,
      category: BlockCategory.Motion
    },
    {
      tester: /^looks/,
      category: BlockCategory.Looks
    },
    {
      tester: /^sound/,
      category: BlockCategory.Sound
    },
    {
      tester: /^event/,
      category: BlockCategory.Event
    },
    {
      tester: /^control/,
      category: BlockCategory.Control
    },
    {
      tester: /^sensing/,
      category: BlockCategory.Sensing
    },
    {
      tester: /^operator/,
      category: BlockCategory.Operator
    },
    {
      tester: /^data/,
      category: BlockCategory.Data
    },
    {
      tester: /^procedures/,
      category: BlockCategory.Procedures
    },
    {
      tester: /^music/,
      category: BlockCategory.Music
    },
    {
      tester: /^pen/,
      category: BlockCategory.Pen
    },
    {
      tester: /^videoSensing/,
      category: BlockCategory.VideoSensing
    },
    {
      tester: /^text2speech/,
      category: BlockCategory.Text2speech
    },
    {
      tester: /^translate/,
      category: BlockCategory.Translate
    },
    {
      tester: /^makeymakey/,
      category: BlockCategory.Makeymakey
    },
    {
      tester: /^microbit/,
      category: BlockCategory.Microbit
    },
    {
      tester: /^ev3/,
      category: BlockCategory.Ev3
    },
    {
      tester: /^boost/,
      category: BlockCategory.Boost
    },
    {
      tester: /^wedo2/,
      category: BlockCategory.Wedo2
    },
    {
      tester: /^gdxfor/,
      category: BlockCategory.Gdxfor
    }
  ]

  /**
   * Constructor.
   */
  constructor(data: { id: string; x: number; y: number }) {
    super()
    this.id = data.id
    this.x = data.x
    this.y = data.y
  }

  /**
   * Is data block.
   */
  abstract isDataBlock(): this is DataBlockInterface

  /**
   * Is normal block.
   */
  abstract isNormalBlock(): this is NormalBlockInterface

  /**
   * Is category block.
   *
   * @param category
   */
  isCategoryBlock(category: BlockCategory) {
    return this.category() === category
  }

  /**
   * Category.
   */
  category() {
    if (!this.isNormalBlock()) {
      return BlockCategory.Unknown
    }

    const item = this.opcodeCategory.find(({ tester }) =>
      this.opcodeTest(tester)
    )

    return item ? item.category : BlockCategory.Unknown
  }

  /**
   * Test opcode.
   *
   * @param tester
   */
  private opcodeTest(tester: RegExp) {
    if (this.isNormalBlock()) {
      return tester.test(this.opcode)
    }
    return false
  }
}
