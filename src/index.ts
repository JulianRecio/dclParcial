import {
  Animator,
  AudioSource,
  AvatarAttach,
  engine,
  GltfContainer,
  InputAction,
  Material,
  MeshCollider,
  MeshRenderer,
  pointerEventsSystem,
  Transform,
  VisibilityComponent
} from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'

// You can remove this if you don't use any asset packs
initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer
})

import { bounceScalingSystem, circularSystem } from './systems'

import { setupUi } from './ui'
import { BounceScaling, Spinner } from './components'
import { createCube } from './factory'

// Defining behavior. See `src/systems.ts` file.
engine.addSystem(circularSystem)
engine.addSystem(bounceScalingSystem)

export function main() {

  let pawn = engine.addEntity()

  GltfContainer.create(pawn, {
    src: 'models/pawn.glb',
  })

  Transform.create(pawn, {
    position: Vector3.create(3, 0.85, 3),
    scale: Vector3.create(10,10,10)
  })


  let mvArg = engine.addEntity()

  GltfContainer.create(mvArg, {
    src: 'models/estadioMVARG.glb',
  })

  Transform.create(mvArg, {
    position: Vector3.create(6,0,8),
    scale: Vector3.create(0.01,0.01,0.01),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
  })


  let mustang = engine.addEntity()

  GltfContainer.create(mustang, {
    src: 'models/mustang.glb',
  })

  Transform.create(mustang, {
    position: Vector3.create(12,0,10),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(0,145,0)
  })

  let duck = engine.addEntity()

  GltfContainer.create(duck, {
    src: 'models/duck.glb',
  })

  Transform.create(duck, {
    position: Vector3.create(2,1.65,8),
    scale: Vector3.create(0.5,0.5,0.5),
    rotation: Quaternion.fromEulerDegrees(0,125,0)
  })
}
